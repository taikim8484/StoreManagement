import React, { Component } from "react";
import { View, Text, Button, ScrollView } from "react-native";

import {AppHeader} from "../../Header";
import TableDetail from "./TableDetail";
export class Table extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: "Table"
  };
  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          flex: 1
        }}
      >
        <AppHeader title="TABLE" />
        <View
          style={{
            backgroundColor: "#EBEBEB",
            flex: 9
          }}
        >
          <ScrollView>
            <TableDetail
              soban="1"
              mon1="Cafe sữa :1"
              mon2="Sting :1"
              mon3="Redbull :1"
              sotien="75.000 đ"
              navigation={this.props.navigation}
            />
            <TableDetail
              soban="2"
              mon1="Cam vắt :1"
              mon2="Mèo :15"
              mon3="Cafe đen :1"
              sotien="425.000d đ"
              navigation={this.props.navigation}
            />
            <TableDetail soban="3" navigation={this.props.navigation} />
            <TableDetail
              soban="4"
              mon1="Đá chanh :4"
              mon2="Yet: 7"
              sotien="89.000d đ"
              navigation={this.props.navigation}
            />
            <TableDetail soban="5" navigation={this.props.navigation} />
            <TableDetail
              soban="6"
              mon1="Pepsi :2"
              mon2="Khăn lạnh :1"
              mon3="Coca :1"
              sotien="32.000d đ"
              navigation={this.props.navigation}
            />
            <TableDetail soban="7" navigation={this.props.navigation} />
            <TableDetail
              soban="8"
              mon1="Trà sữa :2"
              sotien="35.000 đ"
              navigation={this.props.navigation}
            />
            <TableDetail soban="9" navigation={this.props.navigation} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Table;
