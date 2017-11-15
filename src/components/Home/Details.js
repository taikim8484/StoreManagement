import React, { Component } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";

var { height, width } = Dimensions.get("window");

export class Details extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("StackProductList", {
            idTable: this.props.table.id
          })}
        disabled={!this.props.isEmpty}
      >
        <View
          style={{
            borderBottomColor: "#CECFCA",
            borderBottomWidth: 0.5,
            width: width,
            height: height / 20,
            backgroundColor: "#FAFAFB",
            justifyContent: "center"
          }}
        >
          <Text style={{ color: "#68D0FE", marginLeft: 10 }}>
            Ban: {this.props.table.name}
          </Text>
        </View>
        <View
          style={{
            height: height / 12,
            width: width,
            backgroundColor: "#FAFAFB",
            borderBottomColor: "#CECFCA",
            borderBottomWidth: 0.3,
            justifyContent: "center"
          }}
        >
          <Text style={{ textAlign: "center" }}>Total: </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Details;
