import React, { Component } from "react";
import { FlatList, View, Text, Modal } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Button } from "native-base";
import Form from "./form";
class TableSetting extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  componentDidMount() {
    this.props.getTableList();
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
          <Form />
        </Modal>
        <FlatList
          data={this.props.tableList}
          renderItem={({ item }) => (
            <View style={{ flex: 1 }}>
              <Text>
                {item.id} ---- {item.name}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <Button danger onPress={() => this.setModalVisible(true)}>
          <Text>Add Table</Text>
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    tableList: state.tableListReducer.tableList
  };
};
export default connect(mapStateToProps, actions)(TableSetting);
