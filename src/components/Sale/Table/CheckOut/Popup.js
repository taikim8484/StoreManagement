import { View, Text } from "react-native";
import React, { Component } from "react";
import { Button } from "native-base";
import { connect } from "react-redux";
import * as actions from "../../../../actions";

const Popup = props => {
  console.log("Props", props);
  return (
    <View>
      <BillDetail idTable={props.idTable} />
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

export default (CheckOutPopup = connect(mapStatetoProps, actions)(Popup));
