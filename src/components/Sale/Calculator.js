// React Native version of https://codepen.io/mjijackson/pen/xOzyGX
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  UIManager,
  View
} from "react-native";

/**
 * KeyboardInput
 */
class KeyboardInput extends React.Component {
  handleKeyDown(event) {
    if (this.props.onKeyDown) this.props.onKeyDown(event);
  }

  componentDidMount() {
    // Ah, auto-binding. I hardly knew ye.
    this.handleKeyDown = this.handleKeyDown.bind(this);
    //document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    // document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return null;
  }
}

let counter = 0;
/**
 * CalculatorDisplay
 */
class CalculatorDisplay extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      scale: 1
    };
  }

  handleTextLayout = e => {
    const { scale } = this.state;
    const { width, x } = e.nativeEvent.layout;
    const maxWidth = width + x;
    const actualWidth = width / scale;
    const newScale = maxWidth / actualWidth;
    if (x < 0) {
      this.setState({ scale: newScale });
    } else if (x > width) {
      this.setState({ scale: 1 });
    }
  };

  render() {
    const { value } = this.props;
    const { scale } = this.state;

    const language = navigator.language || "en-US";
    let formattedValue = parseFloat(value).toLocaleString(language, {
      useGrouping: true,
      maximumFractionDigits: 6
    });

    const trailingZeros = value.match(/\.0*$/);

    if (trailingZeros) formattedValue += trailingZeros;

    return (
      <View style={calculatorDisplayStyles.root}>
        <Text
          children={formattedValue}
          onLayout={this.handleTextLayout}
          style={[calculatorDisplayStyles.text, { transform: [{ scale }] }]}
        />
      </View>
    );
  }
}

const calculatorDisplayStyles = StyleSheet.create({
  root: {
    backgroundColor: "#1c191c",
    flex: 1,
    justifyContent: "center"
  },
  text: {
    alignSelf: "flex-end",
    color: "white",
    //lineHeight: 130,
    fontSize: 96,
    paddingHorizontal: 30,
    //position: 'absolute',
    right: 0
    //transformOrigin: "right"
  }
});

/**
 * CalculatorKey
 */
class CalculatorKey extends React.Component {
  render() {
    const { children, onPress, style, textStyle } = this.props;

    return (
      <TouchableHighlight
        accessibilityRole="button"
        onPress={onPress}
        style={[calculatorKeyStyles.root, style]}
        underlayColor="rgba(0,0,0,0.25)"
      >
        <Text
          children={children}
          style={[calculatorKeyStyles.text, textStyle]}
        />
      </TouchableHighlight>
    );
  }
}

const calculatorKeyStyles = StyleSheet.create({
  root: {
    width: 80,
    height: 80,
    borderTopWidth: 1,
    borderTopColor: "#777",
    borderStyle: "solid",
    borderRightWidth: 1,
    borderRightColor: "#666",
    borderStyle: "solid"
    //outline: "none"
  },
  text: {
    lineHeight: 80,
    textAlign: "center"
  }
});

const CalculatorOperations = {
  "/": (prevValue, nextValue) => prevValue / nextValue,
  "*": (prevValue, nextValue) => prevValue * nextValue,
  "+": (prevValue, nextValue) => prevValue + nextValue,
  "-": (prevValue, nextValue) => prevValue - nextValue,
  "=": (prevValue, nextValue) => nextValue
};

/**
 * Calculator
 */
class Calculator extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: null,
      displayValue: "0",
      operator: null,
      waitingForOperand: false
    };
  }

  clearAll() {
    this.setState({
      value: null,
      displayValue: "0",
      operator: null,
      waitingForOperand: false
    });
  }

  clearDisplay() {
    this.setState({
      displayValue: "0"
    });
  }

  clearLastChar() {
    const { displayValue } = this.state;

    this.setState({
      displayValue: displayValue.substring(0, displayValue.length - 1) || "0"
    });
  }

  toggleSign() {
    const { displayValue } = this.state;
    const newValue = parseFloat(displayValue) * -1;

    this.setState({
      displayValue: String(newValue)
    });
  }

  inputPercent() {
    const { displayValue } = this.state;
    const currentValue = parseFloat(displayValue);

    if (currentValue === 0) return;

    const fixedDigits = displayValue.replace(/^-?\d*\.?/, "");
    const newValue = parseFloat(displayValue) / 100;

    this.setState({
      displayValue: String(newValue.toFixed(fixedDigits.length + 2))
    });
  }

  inputDot() {
    const { displayValue } = this.state;

    if (!/\./.test(displayValue)) {
      this.setState({
        displayValue: displayValue + ".",
        waitingForOperand: false
      });
    }
  }

  inputDigit(digit) {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false
      });
    } else {
      this.setState({
        displayValue:
          displayValue === "0" ? String(digit) : displayValue + digit
      });
    }
  }

  performOperation(nextOperator) {
    const { value, displayValue, operator } = this.state;
    const inputValue = parseFloat(displayValue);

    if (value == null) {
      this.setState({
        value: inputValue
      });
    } else if (operator) {
      const currentValue = value || 0;
      const newValue = CalculatorOperations[operator](currentValue, inputValue);

      this.setState({
        value: newValue,
        displayValue: String(newValue)
      });
    }

    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    });
  }

  handleKeyDown(event) {
    let { key } = event;

    if (key === "Enter") key = "=";

    if (/\d/.test(key)) {
      event.preventDefault();
      this.inputDigit(parseInt(key, 10));
    } else if (key in CalculatorOperations) {
      event.preventDefault();
      this.performOperation(key);
    } else if (key === ".") {
      event.preventDefault();
      this.inputDot();
    } else if (key === "%") {
      event.preventDefault();
      this.inputPercent();
    } else if (key === "Backspace") {
      event.preventDefault();
      this.clearLastChar();
    } else if (key === "Clear") {
      event.preventDefault();

      if (this.state.displayValue !== "0") {
        this.clearDisplay();
      } else {
        this.clearAll();
      }
    }
  }

  render() {
    const { displayValue } = this.state;

    const clearDisplay = displayValue !== "0";
    const clearText = clearDisplay ? "C" : "AC";

    return (
      <View style={calculatorStyles.root}>
        <KeyboardInput onKeyDown={event => this.handleKeyDown(event)} />
        <CalculatorDisplay value={displayValue} />
        <View style={calculatorStyles.keypad}>
          <View style={calculatorStyles.inputKeys}>
            <View style={calculatorStyles.functionKeys}>
              <FunctionKey
                onPress={() =>
                  clearDisplay ? this.clearDisplay() : this.clearAll()}
              >
                {clearText}
              </FunctionKey>
              <FunctionKey
                onPress={() => this.toggleSign()}
                style={calculatorStyles.keySign}
              >
                ±
              </FunctionKey>
              <FunctionKey
                onPress={() => this.inputPercent()}
                style={calculatorStyles.keyPercent}
              >
                %
              </FunctionKey>
            </View>
            <View style={calculatorStyles.digitKeys}>
              <DigitKey onPress={() => this.inputDigit(7)}>7</DigitKey>
              <DigitKey onPress={() => this.inputDigit(8)}>8</DigitKey>
              <DigitKey onPress={() => this.inputDigit(9)}>9</DigitKey>
              <DigitKey onPress={() => this.inputDigit(4)}>4</DigitKey>
              <DigitKey onPress={() => this.inputDigit(5)}>5</DigitKey>
              <DigitKey onPress={() => this.inputDigit(6)}>6</DigitKey>
              <DigitKey onPress={() => this.inputDigit(1)}>1</DigitKey>
              <DigitKey onPress={() => this.inputDigit(2)}>2</DigitKey>
              <DigitKey onPress={() => this.inputDigit(3)}>3</DigitKey>
              <DigitKey
                onPress={() => this.inputDot()}
                style={calculatorStyles.keyDot}
                textStyle={calculatorStyles.keyDotText}
              >
                .
              </DigitKey>
              <DigitKey
                onPress={() => this.inputDigit(0)}
                style={calculatorStyles.key0}
                textStyle={{ textAlign: "left" }}
              >
                0
              </DigitKey>
            </View>
          </View>
          <View style={calculatorStyles.operatorKeys}>
            <OperatorKey onPress={() => this.performOperation("/")}>
              ÷
            </OperatorKey>
            <OperatorKey onPress={() => this.performOperation("*")}>
              ×
            </OperatorKey>
            <OperatorKey onPress={() => this.performOperation("-")}>
              −
            </OperatorKey>
            <OperatorKey onPress={() => this.performOperation("+")}>
              +
            </OperatorKey>
            <OperatorKey onPress={() => this.performOperation("=")}>
              =
            </OperatorKey>
          </View>
        </View>
      </View>
    );
  }
}

const DigitKey = props => (
  <CalculatorKey
    {...props}
    style={[calculatorStyles.digitKey, props.style]}
    textStyle={[calculatorStyles.digitKeyText, props.textStyle]}
  />
);

const FunctionKey = props => (
  <CalculatorKey
    {...props}
    style={[calculatorStyles.functionKey, props.style]}
    textStyle={[calculatorStyles.functionKeyText, props.textStyle]}
  />
);

const OperatorKey = props => (
  <CalculatorKey
    {...props}
    style={[calculatorStyles.operatorKey, props.style]}
    textStyle={[calculatorStyles.operatorKeyText, props.textStyle]}
  />
);

const calculatorStyles = StyleSheet.create({
  root: {
    width: 320,
    height: 520,
    backgroundColor: "black"
    //boxShadow: "0px 0px 20px 0px #aaa"
  },
  keypad: {
    height: 400,
    flexDirection: "row"
  },
  inputKeys: {
    width: 240
  },
  calculatorKeyText: {
    fontSize: 32
  },
  functionKeys: {
    // backgroundImage:
    //  "linear-gradient(to bottom, rgba(202,202,204,1) 0%, rgba(196,194,204,1) 100%)",
    backgroundColor: "#7D7D81",
    flexDirection: "row"
  },
  functionKey: {
    fontSize: 32
  },
  digitKeys: {
    backgroundColor: "#e0e0e7",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  digitKeyText: {
    fontSize: 36
  },
  operatorKeys: {
    //  backgroundImage:
    //  "linear-gradient(to bottom, rgba(252,156,23,1) 0%, rgba(247,126,27,1) 100%)"
    backgroundColor: "#E48638"
  },
  operatorKey: {
    borderRightWidth: 0
  },
  operatorKeyText: {
    color: "white"
    //fontSize: 48
  },
  keyMultiplyText: {
    lineHeight: 50
  },
  key0: {
    paddingLeft: 32,
    width: 160
  },
  keyDot: {
    overflow: "hidden"
  },
  keyDotText: {
    fontSize: 80,
    marginTop: -10
  },
  keySign: {
    fontSize: 32
  }
});

const CalculatorWrapper = () => (
  <View
    style={{
      alignItems: "center",
      justifyContent: "center",
      flex: 1
    }}
  >
    <Calculator />
  </View>
);

// AppRegistry.registerComponent("Calculator", () => CalculatorWrapper);
// AppRegistry.runApplication("Calculator", {
//   rootTag: document.getElementById("react-root")
// });

export default CalculatorWrapper;
