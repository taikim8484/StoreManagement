import React, { Component } from "react";
import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
var { height, width } = Dimensions.get("window");
const tableImage = require("../../Media/table.png");
const emptytableImage = require("../../Media/table-empty.png");
export class Details extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          marginTop: 5,
          marginLeft: 5,
          borderRadius: 10,
          borderWidth: 0.5,
          borderColor: "grey",
          width: width / 3.2,
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={() =>
          this.props.navigation.navigate("StackProductList", {
            idTable: this.props.table.id
          })}
        disabled={!this.props.isEmpty}
      >
        <View>
          <Text
            style={{
              color: "grey",
              marginLeft: 10,
              fontSize: 20,
              fontFamily: "Roboto-Light"
            }}
          >
            {this.props.table.name}
          </Text>
        </View>
        <Image
          style={{
            flex: 1,
            aspectRatio: 1.2,
            resizeMode: "contain"
          }}
          source={this.props.isEmpty ? emptytableImage : tableImage}
        />
      </TouchableOpacity>
    );
  }
}

export default Details;
