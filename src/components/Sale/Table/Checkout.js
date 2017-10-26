import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export class Table extends Component {
  static navigationOptions = {};
  render() {
    return (
      <View
        style={{
          backgroundColor: "#313203",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>This is Table Screen</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Back to Product"
          color="#841584"
        />
      </View>
    );
  }
}

export default Table;
