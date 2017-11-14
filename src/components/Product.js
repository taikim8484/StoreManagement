import React, { Component } from "react";
import { ActivityIndicator, Text, View, FlatList } from "react-native";
import * as actions from "../actions";
import { connect } from "react-redux";

class Product extends Component {
  state = {};
  //Fetch food data.
  componentDidMount() {
    this.props.getProduct();
  }
  render() {
    const { foodList } = this.props;
    return (
      <View>
        {this.props.isLoadingFood ? (
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
              <View>
                <Text>
                  Name: {item.name} Price: {item.price}
                </Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    foodList: state.homeReducer.foodList,
    isLoadingFood: state.homeReducer.isLoadingFood
  };
};

export default connect(mapStateToProps, actions)(Product);
