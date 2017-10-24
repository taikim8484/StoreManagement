import React, { Component } from "react";
import { View, Text, Button, ScrollView } from "react-native";

import {AppHeader} from "./Header";
import Details from "./Details";
export class Home extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };
  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          flex: 1
        }}
      >
        <AppHeader title="HOME" navigation={this.props.navigation}/>
        <View
          style={{
            flex: 9,
            backgroundColor: "#EBEBEB",
            alignItems: "center"
          }}
        >
          <ScrollView>
            <Details textDetails="DOANH THU" numberDetails="19.425.000 đ" />
            <Details textDetails="ORDER" numberDetails="254.000 đ" />
            <Details textDetails="TIỀN MẶT" numberDetails="200.000 đ" />
            <Details textDetails="DOANH THU" numberDetails="19.425.000 đ" />
            <Details textDetails="ORDER" numberDetails="254.000 đ" />
            <Details textDetails="TIỀN MẶT" numberDetails="200.000 đ" />
            <Details textDetails="DOANH THU" numberDetails="19.425.000 đ" />
            <Details textDetails="ORDER" numberDetails="254.000 đ" />
            <Details textDetails="TIỀN MẶT" numberDetails="200.000 đ" />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Home;

{
  /*  */
}
