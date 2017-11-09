import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import * as actions from "../../../actions";
import { connect } from "react-redux";

class FoodCell extends Component {
  state = {};
  increaseFood() {
    this.props.increaseFood(this.props.idTable, this.props.index);
  }
  decreaseFood() {
    this.props.decreaseFood(this.props.idTable, this.props.index);
  }
  render() {
    const { food } = this.props;
    return (
      <View style={{ flexDirection: "row", height: 30 }}>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
          onPress={() => this.decreaseFood()}
        >
          <Text>Minus</Text>
        </TouchableOpacity>
        <View
          style={{ flex: 3, justifyContent: "center", alignContent: "center" }}
        >
          <Text>
            {food.name} -- {food.amount}
          </Text>
        </View>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
          onPress={() => this.increaseFood()}
        >
          <Text>Plus</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStatetoProps = state => {
  return {};
};

export default connect(mapStatetoProps, actions)(FoodCell);
