import React, { Component } from "react";
import { View, Text, Button, FlatList } from "react-native";

import { AppHeader } from "./Header";
import Details from "./Details";

const info = [
  { key: 1, title: "DOANH THU", value: "19.425.000 " },
  { key: 2, title: "ORDER", value: "19.425.000 " },
  { key: 3, title: "TIEN MAT", value: "19.425.000 " },
  { key: 4, title: "ORDER", value: "19.425.000 " }
];
export class Home extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };
  render() {
    return (
      <View style={{ flexDirection: "column", flex: 1 }}>
        <AppHeader title="HOME" navigation={this.props.navigation} />
        <View
          style={{ flex: 9, backgroundColor: "#EBEBEB", alignItems: "center" }}
        >
          <FlatList
            data={info}
            renderItem={({ item }) => (
              <Details
                key={item.key}
                textDetails={item.title}
                numberDetails={item.value}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

export default Home;

{
  /*  */
}
