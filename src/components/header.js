import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Container, Header, Title, Left, Body, Right } from "native-base";
export class AppHeader extends Component {
  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Header
          style={{
            backgroundColor: "#006064"
          }}
        >
          <Left>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Image
                style={{
                  flex: 1,
                  width: 30,
                  height: 20,
                  marginLeft: 10,
                  marginTop: 10,
                  marginBottom: 10
                }}
                source={require("../Media/list.png")}
              />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title
              style={{
                textAlign: "center",
                fontFamily: "Roboto-Light"
              }}
            >
              {this.props.title}
            </Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}

export default Header;
