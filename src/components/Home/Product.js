import React, { Component } from "react";
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Animated,
  Dimensions
} from "react-native";
import * as actions from "../../actions";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  SwipeRow,
  View,
  Text,
  Button
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
var { height, width } = Dimensions.get("window");

class Product extends Component {
  state = {};
  static navigationOptions = {
    header: null
  };
  componentDidMount() {
    this.props.getProduct(this.props.navigation.state.params.idTable);
    this.props.getOrderNow(this.props.navigation.state.params.idTable);
  }
  render() {
    const { foodList, navigation, order } = this.props;
    return (
      <View style={{ flexDirection: "column", flex: 1 }}>
        {/*BigCreen*/}
        <View
          style={{ flex: 3, borderBottomWidth: 0.5, borderBottomColor: "grey" }}
        >
          {order.length == 0 ? (
            <Text />
          ) : (
            <FlatList
              data={order[0].orderDetails}
              renderItem={({ item }) => (
                <View>
                  <Text>
                    {item.food.name} -- {item.amount}
                  </Text>
                </View>
              )}
            />
          )}
        </View>
        <View
          style={{
            flex: 6,
            borderTopWidth: 0.5,
            borderTopColor: "grey",
            backgroundColor: "white"
          }}
        >
          <FlatList
            data={foodList}
            renderItem={({ item }) => (
              <SwipeRow
                rightOpenValue={-75}
                body={
                  <TouchableOpacity
                    onPress={() =>
                      this.props.addFood(navigation.state.params.idTable, item)}
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <View
                      style={{
                        flex: 2,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Icon name="coffee" stye />
                    </View>
                    <View
                      style={{
                        flex: 4
                      }}
                    >
                      <Text style={{ fontFamily: "Roboto-Light" }}>
                        {item.name}
                      </Text>
                    </View>
                    <View style={{ flex: 4 }}>
                      <Text style={{ fontFamily: "Roboto-Light" }}>
                        {item.price}
                      </Text>
                    </View>
                  </TouchableOpacity>
                }
                right={
                  <Button
                    danger
                    onPress={() =>
                      this.props.clearFood(
                        navigation.state.params.idTable,
                        item
                      )}
                  >
                    <Icon active name="trash" />
                  </Button>
                }
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button
            danger
            style={{ margin: 5 }}
            onPress={() => {
              navigation.goBack();
              this.props.getTableList();
            }}
          >
            <Text>Confirm Order</Text>
          </Button>
          <Button
            block
            style={{ margin: 5 }}
            onPress={() => {
              this.props.cancelOrder(navigation.state.params.idTable);
              navigation.goBack();
            }}
          >
            <Text>Cancel</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    foodList: state.productReducer.foodList,
    order: state.confirmOrderReducer.order,
    isLoading: state.productReducer.isLoading
  };
};

export default connect(mapStateToProps, actions)(Product);
