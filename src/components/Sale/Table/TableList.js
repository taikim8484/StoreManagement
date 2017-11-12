import React, { Component } from "react";
import { View, Text, Button, FlatList } from "react-native";

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
          <FlatList
            data={this.props.tableList}
            renderItem={({ item }) => <NewTableDetail order={item} />}
            keyExtractor={item => item.idTable}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    tableList: state.tableListReducer.tableList
    //tableList: state.tableListReducer.tableList.map(id => state.tableListReducer.tableList[id])
  };
};

export default connect(mapStateToProps, actions)(Table);
