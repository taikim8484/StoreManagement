import React, { Component } from "react";
import { View, Text, Button, FlatList, ActivityIndicator } from "react-native";

import { AppHeader } from "../../Header";
import TableCell from "./TableCell";
import NewTableDetail from "./NewTableDetail";

import * as actions from "../../../actions";
import { connect } from "react-redux";
import database from "../../../configDatabase/schema";
import { initDatabase, isDatabaseEmpty } from "../../../configDatabase/service";

export class Table extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: "Table"
  };

  componentDidMount() {
    if (isDatabaseEmpty()) {
      initDatabase();
    } else {
      this.props.getTableList();
    }
  }
  render() {
    return (
      <View style={{ flexDirection: "column", flex: 1 }}>
        <AppHeader title="TABLE" />
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
              renderItem={({ item }) => <NewTableDetail order={item} />}
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
    tableList: state.tableListReducer.tableList,
    isLoading: state.tableListReducer.isLoading
  };
};

export default connect(mapStateToProps, actions)(Table);
