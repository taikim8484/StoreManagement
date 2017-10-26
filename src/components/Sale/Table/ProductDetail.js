import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";

var { height, width } = Dimensions.get("window");

export class ProductDetails extends Component {
  IncreaeSL(iSL) {
    this.setState.iSl.value++;
  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.IncreaeSL()}>
        <View
          style={{
            flexDirection: "row",
            flex: 1
          }}
        >
          <Image source={this.props.imglink} />
          <Text>{this.props.name}</Text>
          <Text>{this.props.price} </Text>
          <Text>{this.props.SL}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ProductDetails;
