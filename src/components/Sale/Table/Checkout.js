import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View
} from "react-native";
import { Button } from "native-base";
import { connect } from "react-redux";
import * as actions from "../../../actions";

const Popup = props => {
  console.log("Props", props);
  return (
    <View>
      <Button
        block
        success
        onPress={() => {
          props.checkOut(props.idTable);
        }}
      >
        <Text>Check Out</Text>
      </Button>
      <Button block danger>
        <Text>Cancel</Text>
      </Button>
    </View>
  );
};
const mapStatetoProps = state => {
  return {};
};

const CheckOutPopup = connect(mapStatetoProps, actions)(Popup);

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
