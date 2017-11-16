import React, { Component } from "react";
import { FlatList, View, Text, Modal } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Button } from "native-base";
import { FoodForm } from "./form";
class FoodSetting extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  componentDidMount() {
    this.props.getProduct(1);
  }
  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <FoodForm />
        </Modal>
        <FlatList
          data={this.props.foodList}
          renderItem={({ item }) => (
            <View style={{ flex: 1 }}>
              <Text>
                {item.name} ---- {item.price}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <Button danger onPress={() => this.setModalVisible(true)}>
          <Text>Add Food</Text>
        </Button>
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
export default connect(mapStateToProps, actions)(FoodSetting);
