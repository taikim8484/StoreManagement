import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export class Setting extends Component {
  static navigationOptions = {
    drawerLabel: "Setting"
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: "#FF9900",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ justifyContent: "center" }}>This is Setting Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
          title="Open Drawer"
          color="#841584"
        />
      </View>
    );
  }
}

export default Setting;
