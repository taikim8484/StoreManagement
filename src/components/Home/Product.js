import React, { Component } from "react";
import {
  ActivityIndicator,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import * as actions from "../../actions";
import { connect } from "react-redux";

class Product extends Component {
  state = {};
  static navigationOptions = {};
  componentDidMount() {
    this.props.getProduct(this.props.navigation.state.params.idTable);
  }
  render() {
    const { foodList, navigation } = this.props;
    return (
      <View style={{ flexDirection: "column", flex: 1 }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          {this.props.isLoading ? (
            <ActivityIndicator
              animating
              color={"green"}
              size={"small"}
              style={{ justifyContent: "center" }}
            />
          ) : (
            <FlatList
              data={foodList}
              renderItem={({ item }) => (
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "red" }}>
                    Name: {item.name} Price: {item.price}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.addFood(navigation.state.params.idTable, item)}
                  >
                    <Text>Add</Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          )}
        </View>
        <TouchableOpacity
          style={{ flexDirection: "column", flex: 1 }}
          onPress={() => {
            navigation.goBack();
            this.props.getTableList();
          }}
        >
          <Text>Confirm Order</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "column", flex: 1 }}
          onPress={() => {
            this.props.cancelOrder(navigation.state.params.idTable);
            navigation.goBack();
          }}
        >
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    foodList: state.productReducer.foodList,
    order: state.confirmOrderReducer.order,
    isLoading: state.productReducer.isLoading
  };
};

export default connect(mapStateToProps, actions)(Product);
