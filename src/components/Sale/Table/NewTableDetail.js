import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import FoodCell from "./FoodCell";
const TableFood = props => {
  return (
    <FlatList
      data={props.orderDetails}
      renderItem={({ item, index }) => (
        <FoodCell orderDetail={item} idTable={props.idTable} index={index} />
      )}
    />
  );
};

class TableDetail extends Component {
  state = {};
  getTotal() {
    const { orderDetails } = this.props.order;
    return orderDetails.reduce((total, orderDetail) => {
      return (total += orderDetail.food.price * orderDetail.amount);
    }, 0);
  }
  render() {
    const { order } = this.props;
    console.log("Total", this.getTotal());
    return (
      <View
        style={{
          flex: 1,
          borderColor: "black",
          borderWidth: 1,
          marginBottom: 2
        }}
      >
        <View style={{ flexDirection: "row", height: 60 }}>
          <View style={{ flex: 2 }}>
            <Text>Table: {order.idTable}</Text>
          </View>
          <View style={{ flex: 8 }}>
            <Text>Total:{this.getTotal()} </Text>
          </View>
        </View>
        <TableFood orderDetails={order.orderDetails} idTable={order.idTable} />
      </View>
    );
  }
}

export default TableDetail;
