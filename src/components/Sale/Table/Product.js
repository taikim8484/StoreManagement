import React, { Component } from "react";
import { View, Image, ScrollView, Alert } from "react-native";
import { Container, Text, Button, Icon, Content } from "native-base";
import { AppHeader } from "../../Header";
import ProductDetail from "./ProductDetail";
export class Product extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      SL: [0, 0, 5, 0, 0]
    };
  }
  IncreaeSL(i) {
    let newSL = this.state.SL;
    newSL[i]++;
    this.setState({SL: newSL});
  }
  ShowProductDetail() {
    // productlist=this.state.SL.map((iSL) => (     <ProductDetail     imglink
    // ={require('../../../Media/img_product.jpg')}     name="Mon 1  "
    // price={20}     IncreaeSL = {this.IncreaeSL(iSL)}     SL={iSL}/> )); return
    // productlist;
    return this.state.SL.map((ele) => {
      return (
        <ProductDetail
          imglink={require("../../../Media/img_product.jpg")}
          name="Mon 1  "
          price={20}
          IncreaeSL={(value) => this.IncreaeSL(value)}
          SL={ele}
        />
      );
    });
    // var productlist = [];
    // for (var i = 0; i < this.state.SL.length; i++) {
    //   productlist.push(
    //     <ProductDetail
    //       imglink={require("../../../Media/img_product.jpg")}
    //       name="Mon 1  "
    //       price={20}
    //       IncreaeSL={this.IncreaeSL(i)}
    //       SL={this.state.SL[i]}
    //     />
    //   );
    }
  }
  confirm() {
    Alert.alert(
      "Confirm Order",
      "Do you want to confirm this order?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => this.updateOrder()
        }
      ],
      { cancelable: false }
    );
  }
  updateOrder() {
    this.setState({ SL: 0 });
    this.forceUpdate();
  }
  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          flex: 1
        }}
      >
        <AppHeader title="TABLE X" />
        <View
          style={{
            backgroundColor: "#EBEBEB",
            flexDirection: "row",
            flex: 2
          }}
        >
          <Button
            info
            style={{
              flex: 1,
              margin: 20,
              backgroundColor: "#35B768"
            }}
            onPress={() => this.confirm()}
          >
            <Text
              style={{
                textAlign: "center"
              }}
            >
              Confirm Order
            </Text>
          </Button>
          <Button
            info
            style={{
              flex: 1,
              margin: 20,
              backgroundColor: "#35B768"
            }}
          >
            <Text
              style={{
                textAlign: "center"
              }}
            >
              Check Out
            </Text>
          </Button>
        </View>
        <View
          style={{
            flex: 7,
            backgroundColor: "yellow"
          }}
        >
          <ScrollView>{this.ShowProductDetail()}</ScrollView>
        </View>
      </View>
    );
  }
}

export default Product;
