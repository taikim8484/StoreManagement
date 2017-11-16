import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import * as actions from "../../../actions";
import { connect } from "react-redux";

class FoodCell extends Component {
  increaseFood() {
    this.props.increaseFood(this.props.idTable, this.props.orderDetail.food);
  }
  decreaseFood() {
    this.props.decreaseFood(this.props.idTable, this.props.orderDetail.food);
  }
  render() {
    const { orderDetail } = this.props;
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
            {orderDetail.food.name} -- {orderDetail.amount}
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
