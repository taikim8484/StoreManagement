import React, { Component } from "react";
import { AppRegistry } from "react-native";
import App from "./src/index";
export default class StoreManager extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent("StoreManager", () => StoreManager);
