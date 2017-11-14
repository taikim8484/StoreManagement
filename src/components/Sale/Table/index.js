import React, { Component } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import { AppHeader } from "../../header.js";
import TableCell from "./TableCell";
import TableService from "./TableService";

import * as actions from "../../../actions";
import { connect } from "react-redux";
import database from "../../../configDatabase/schema";
import { initDatabase, isDatabaseEmpty } from "../../../configDatabase/service";

export class TableHavingCustomer extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: "Table"
  };

  componentDidMount() {
    if (isDatabaseEmpty()) {
      initDatabase();
    } else {
      this.props.getOrderList();
    }
  }
  render() {
    return (
      <View style={{ flexDirection: "column", flex: 1 }}>
        <AppHeader title="TABLE" navigation={this.props.navigation} />
        <View style={{ backgroundColor: "#EBEBEB", flex: 9 }}>
          {this.props.isLoading ? (
            <ActivityIndicator
              animating
              color={"blue"}
              size={"small"}
              style={{ justifyContent: "center" }}
            />
          ) : (
            <FlatList
              data={this.props.tableList}
              renderItem={({ item }) => <TableService order={item} />}
              keyExtractor={item => item.idTable}
            />
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    tableList: state.orderListReducer.tableList,
    isLoading: state.orderListReducer.isLoading
  };
};

export default connect(mapStateToProps, actions)(TableHavingCustomer);
