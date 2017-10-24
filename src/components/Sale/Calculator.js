import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export class Calculator extends Component {
  static navigationOptions = {
    tabBarLabel: "Calculator"
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: "#FFFF32",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>This is Calculator Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
          title="Open Drawer"
          color="#841584"
        />
      </View>
    );
  }
}

export default Calculator;
