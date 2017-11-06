import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import FoodCell from "./FoodCell";
const TableFood = props => {
  return (
    <FlatList
      data={props.foods}
      renderItem={({ item }) => <FoodCell food={item} />}
    />
  );
};

class TableDetail extends Component {
  state = {};
  render() {
    const table = this.props.item;
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
            <Text>idTable: {table.idTable}</Text>
          </View>
          <View style={{ flex: 8 }}>
            <Text>Total: {table.money}</Text>
          </View>
        </View>
        <TableFood foods={table.foods} />
      </View>
    );
  }
}

export default TableDetail;
