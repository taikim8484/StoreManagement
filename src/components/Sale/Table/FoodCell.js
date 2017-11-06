import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

class FoodCell extends Component {
  state = {};
  render() {
    const { food } = this.props;
    return (
      <View style={{ flexDirection: "row", height: 30 }}>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
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
        >
          <Text>Plus</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default FoodCell;
