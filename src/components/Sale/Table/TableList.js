import React, { Component } from "react";
import { View, Text, Button, FlatList } from "react-native";

import { AppHeader } from "../../Header";
import TableCell from "./TableCell";
import NewTableDetail from "./NewTableDetail";

import * as actions from "../../../actions";
import { connect } from "react-redux";

export class Table extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: "Table"
  };

  componentWillMount() {
    this.props.getTableList();
  }

  componentWillReceiveProps(nextProps) {
    console.log("AloALo", nextProps);
  }

  render() {
    return (
      <View style={{ flexDirection: "column", flex: 1 }}>
        <AppHeader title="TABLE" />
        <View style={{ backgroundColor: "#EBEBEB", flex: 9 }}>
          <FlatList
            data={this.props.tableList}
            renderItem={({ item }) => <NewTableDetail item={item} />}
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
  };
};

export default connect(mapStateToProps, actions)(Table);
