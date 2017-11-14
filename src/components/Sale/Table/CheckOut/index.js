import React, { Component } from "react";
import { Modal, Text, TouchableOpacity, View, FlatList } from "react-native";
import BillDetail from "./BillDetail";
import CheckOutPopup from "./Popup";

export default class ModalCheckOut extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { idTable } = this.props;
    return (
      <View style={{ flex: 4, flexDirection: "row" }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <CheckOutPopup idTable={idTable} />
        </Modal>

        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Check Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
