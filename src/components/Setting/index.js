import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "native-base";
export class Setting extends Component {
  static navigationOptions = {
    drawerLabel: "Setting"
  };
  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: 1
        }}
      >
        <Button
          danger
          style={{ width: 100, height: 100, alignSelf: "center" }}
          onPress={() => this.props.navigation.navigate("StackTableSetting")}
        >
          <Text>Table</Text>
        </Button>
        <Button block style={{ width: 100, height: 100, alignSelf: "center" }}>
          <Text>Food</Text>
        </Button>
        <Button
          warning
          style={{ width: 100, height: 100, alignSelf: "center" }}
        >
          <Text>Clear All Data</Text>
        </Button>
      </View>
    );
  }
}

export default Setting;
