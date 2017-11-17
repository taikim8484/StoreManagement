import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { AppHeader } from "../header.js";
import Details from "./Details";
import { connect } from "react-redux";
import * as actions from "../../actions";
import database from "../../configDatabase/schema";
export class Home extends Component {
  static navigationOptions = {
    header: null,
    drawerLabel: "Home"
  };

  isEmpty(idTable) {
    return (
      database.objects("Order").filtered(`idTable = ${idTable}`).length == 0
    );
  }
  // _renderCardTable(tableList) {
  //   tableList.map(table => {
  //     return (
  //       <CardItem>
  //         <Text>Bàn: {table.name}</Text>
  //       </CardItem>
  //     );
  //   });
  // }
  componentDidMount() {
    this.props.getTableList();
  }
  render() {
    const { tableList, navigation } = this.props;
    console.log("NAME", tableList.name);
    return (
      <View style={{ flexDirection: "column", flex: 1 }}>
        <AppHeader title="DANH SÁCH BÀN" navigation={this.props.navigation} />
        <View style={{ flex: 9, backgroundColor: "#EBEBEB" }}>
          {this.props.isLoading ? (
            <ActivityIndicator
              animating
              color={"green"}
              size={"small"}
              style={{ justifyContent: "center" }}
            />
          ) : (
            <FlatList
              data={this.props.tableList}
              numColumns={3}
              renderItem={({ item }) => (
                <Details
                  table={item}
                  navigation={this.props.navigation}
                  isEmpty={this.isEmpty(item.id)}
                />
              )}
              keyExtractor={item => item.id}
            />
          )}
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    tableList: state.tableListReducer.tableList,
    isLoading: state.tableListReducer.isLoading
  };
};
export default connect(mapStateToProps, actions)(Home);
