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
      keyExtractor={item => item.id}
    />
  );
};

class TableDetail extends Component {
  state = {};
  getTotal() {
    var total = 0;
    const table = this.props.item;
    for (var i = 0; i < table.length; i++) {
      total += table[i].amount;
    }
    return total;
  }
  render() {
    const { order } = this.props;
    console.log("Order", order.orderDetails[0].id);
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
            <Text>Total:000 </Text>
          </View>
        </View>
        <TableFood orderDetails={order.orderDetails} idTable={order.idTable} />
      </View>
    );
  }
}

export default TableDetail;
