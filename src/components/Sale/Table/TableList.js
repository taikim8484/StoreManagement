import React, { Component } from "react";
import { View, Text, Button, FlatList } from "react-native";

import { AppHeader } from "../../Header";
import TableCell from "./TableCell";
import NewTableDetail from "./NewTableDetail";

const info = [
  {
    idTable: 1,
    foods: [
      { name: "Cafe sữa", amount: 1 },
      { name: "Sting", amount: 1 },
      { name: "Redbull", amount: 2 }
    ],
    money: 75000
  },
  {
    idTable: 2,
    foods: [
      { name: "Cam vat", amount: 4 },
      { name: "Meo den", amount: 1 },
      { name: "Cafe den", amount: 2 }
    ],
    money: 425000
  },
  {
    idTable: 3,
    foods: [{ name: "Tra sữa", amount: 90 }, { name: "Khan lanh", amount: 1 }],
    money: 89000
  }
];

export class Table extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: "Table"
  };
  render() {
    return (
      <View style={{ flexDirection: "column", flex: 1 }}>
        <AppHeader title="TABLE" />
        <View style={{ backgroundColor: "#EBEBEB", flex: 9 }}>
          <FlatList
            data={info}
            renderItem={({ item }) => (
              <NewTableDetail item={item} key={item.idTable} />
            )}
          />
        </View>
      </View>
    );
  }
}

export default Table;
