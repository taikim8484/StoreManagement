import React, { Component } from "react";
import { View, Text, Button, FlatList, ActivityIndicator } from "react-native";

import { AppHeader } from "../header.js";
import Details from "./Details";
import { connect } from "react-redux";
import * as actions from "../../actions";

export class Home extends Component {
  static navigationOptions = {
    header: null,
    drawerLabel: "Home"
  };
  componentDidMount() {
    this.props.getTableList();
  }
  render() {
    const { tableList } = this.props;
    console.log("NAME", tableList.name);
    return (
      <View style={{ flexDirection: "column", flex: 1 }}>
        <AppHeader title="HOME" navigation={this.props.navigation} />
        <View
          style={{ flex: 9, backgroundColor: "#EBEBEB", alignItems: "center" }}
        >
          {this.props.isLoading ? (
            <ActivityIndicator
              animating
              color={"green"}
              size={"small"}
              style={{ justifyContent: "center" }}
            />
          ) : (
            <FlatList
              data={this.props.tableList}
              renderItem={({ item }) => (
                <Details table={item} navigation={this.props.navigation} />
              )}
              keyExtractor={item => item.id}
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
export default connect(mapStateToProps, actions)(Home);
