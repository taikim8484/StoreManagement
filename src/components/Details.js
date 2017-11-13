import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";

var { height, width } = Dimensions.get("window");

export class Details extends Component {
  render() {
    return (
      <View style={{ marginTop: 15 }}>
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
      </View>
    );
  }
}

export default Details;
