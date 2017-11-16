import React, { Component } from "react";
import { View, Text } from "react-native";
import { Form, Input, Item, Label, Button } from "native-base";
import database from "../../configDatabase/schema";
export default class MyForm extends Component {
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
export default class MyForm extends Component {
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
