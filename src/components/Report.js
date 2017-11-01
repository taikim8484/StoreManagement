import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export class Report extends Component {
  static navigationOptions = {
    drawerLabel: "Report"
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#00CDCD",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ justifyContent: "center" }}>This is Report Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
          title="Open Drawer"
          color="#841584"
        />
      </View>
    );
  }
}

export default Report;
