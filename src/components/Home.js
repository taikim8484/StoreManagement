import React, { Component } from "react";
import { View, Text, Button, FlatList, ActivityIndicator } from "react-native";

import { AppHeader } from "./Header";
import Details from "./Details";
import { connect } from "react-redux";
import * as actions from "../actions";
export class Home extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };
  componentDidMount() {
    this.props.getHome();
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
              renderItem={({ item }) => <Details table={item} />}
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
    tableList: state.homeReducer.tableList,
    isLoading: state.homeReducer.isLoading
  };
};
export default connect(mapStateToProps, actions)(Home);
