import React, { Component } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";

var { height, width } = Dimensions.get("window");

export class TableDetail extends Component {
  render() {
    return (
      <View
        style={{
          width: width,
          height: height / 7,
          backgroundColor: "#FAFAFB",
          marginTop: 15,
          flexDirection: "row"
        }}
      >
        <View
          style={{
            flex: 1,
            borderRightWidth: 0.5,
            borderRightColor: "gray",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("StackProduct")}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 30
              }}
            >
              {this.props.soban}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 2,
            borderRightWidth: 0.5,
            borderRightColor: "gray",
            justifyContent: "center",
            alignContent: "center",
            marginLeft: 50
          }}
        >
          <Text>{this.props.mon1}</Text>
          <Text>{this.props.mon2}</Text>
          <Text>{this.props.mon3}</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <Text style={{ textAlign: "center", color: "red" }}>
            {this.props.sotien}
          </Text>
        </View>
      </View>
    );
  }
}

export default TableDetail;
