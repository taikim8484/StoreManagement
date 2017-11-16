import React, { Component } from "react";
import { View, Text } from "react-native";
import { Form, Input, Item, Label, Button } from "native-base";
import database from "../../configDatabase/schema";
import { getNewID } from "../../configDatabase/service";

export class TableForm extends Component {
  state = {
    id: "",
    name: ""
  };
  addTable = (id, name) => {
    try {
      database.write(() => {
        database.create("Table", { id, name });
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <View>
        <Form>
          <Item fixedLabel>
            <Label>ID</Label>
            <Input
              onChangeText={text => this.setState({ id: text })}
              value={this.state.id}
            />
          </Item>
          <Item fixedLabel last>
            <Label>Name</Label>
            <Input
              onChangeText={text => this.setState({ name: text })}
              value={this.state.name}
            />
          </Item>
        </Form>
        <Button
          danger
          onPress={() =>
            this.addTable(parseInt(this.state.id), this.state.name)}
        >
          <Text>Add</Text>
        </Button>
      </View>
    );
  }
}

export class FoodForm extends Component {
  state = {
    name: "",
    price: ""
  };
  addFood = (name, price) => {
    let id = getNewID();
    try {
      database.write(() => {
        database.create("Food", { id, name, price });
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <View>
        <Form>
          <Item fixedLabel>
            <Label>Name</Label>
            <Input
              onChangeText={text => this.setState({ name: text })}
              value={this.state.name}
            />
          </Item>
          <Item fixedLabel last>
            <Label>Price</Label>
            <Input
              onChangeText={text => this.setState({ price: text })}
              value={this.state.price}
            />
          </Item>
        </Form>
        <Button
          danger
          onPress={() =>
            this.addFood(this.state.name, parseInt(this.state.price))}
        >
          <Text>Add</Text>
        </Button>
      </View>
    );
  }
}
