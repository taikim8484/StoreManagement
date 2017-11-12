import React, { Component } from "react";
import { View, Text, Button, FlatList, ActivityIndicator } from "react-native";

import { AppHeader } from "../../Header";
import TableCell from "./TableCell";
import NewTableDetail from "./NewTableDetail";

import * as actions from "../../../actions";
import { connect } from "react-redux";

import { initDatabase } from "../../../configDatabase/service";
import realm from "../../../configDatabase/schema";

export class Table extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: "Table"
  };

  componentDidMount() {
    //initDatabase();
    this.props.getTableList();
  }
  render() {
    return (
      <View style={{ flexDirection: "column", flex: 1 }}>
        <AppHeader title="TABLE" />
        <View style={{ backgroundColor: "#EBEBEB", flex: 9 }}>
          {this.props.isLoading ? (
            <ActivityIndicator animating color={"blue"} size={"small"} />
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
    //tableList: state.tableListReducer.tableList.map(id => state.tableListReducer.tableList[id])
  };
};

export default connect(mapStateToProps, actions)(Table);
