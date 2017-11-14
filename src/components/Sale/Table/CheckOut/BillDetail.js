import { View, Text, FlatList } from "react-native";
import React, { Component } from "react";
import database from "../../../../configDatabase/schema";

export default (BillDetail = props => {
  const order = database
    .objects("Order")
    .filtered(`idTable = ${props.idTable}`);
  return (
    <FlatList
      data={order[0].orderDetails}
      renderItem={({ item }) => (
        <View>
          <Text>{item.food.name}</Text>
          <Text>{item.amount}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
});
