import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const TableFood = () => {
  return <Text>This is TableFood</Text>;
};

class TableDetail extends Component {
  state = {};
  render() {
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
            <Text>idTable: 1</Text>
          </View>
          <View style={{ flex: 8 }}>
            <Text>Total: 75.000</Text>
          </View>
        </View>
        <TableFood />
      </View>
    );
  }
}

export default TableDetail;
