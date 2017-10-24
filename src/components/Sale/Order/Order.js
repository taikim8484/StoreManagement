import React, { Component } from "react";
import { Container, Header,  Title ,Body,Left,Right} from 'native-base';
import {AppHeader} from "../../Header";
export class Order extends Component {
  static navigationOptions = {
    tabBarLabel: "Order"
  };
  render() {
    return (
      <AppHeader title= "ORDER"/>
    );
  }
}

export default Order;
