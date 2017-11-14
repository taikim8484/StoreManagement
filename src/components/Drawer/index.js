import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./style";

const SIZE_ICON = 20;
//Local variables
const homeIcon = (
  <Icon
    name="md-home"
    size={SIZE_ICON}
    color="white"
    style={styles.iconTouch}
  />
);
const saleIcon = (
  <Icon
    name="md-basket"
    size={SIZE_ICON}
    color="white"
    style={styles.iconTouch}
  />
);
const reportIcon = (
  <Icon
    name="md-bookmarks"
    size={SIZE_ICON}
    color="white"
    style={styles.iconTouch}
  />
);
const settingIcon = (
  <Icon name="md-cog" size={SIZE_ICON} color="white" style={styles.iconTouch} />
);

class Drawer extends Component {
  state = {};
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View
          style={{
            flex: 3,
            backgroundColor: "#35B768",
            elevation: 2,
            justifyContent: "center",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.5,
            shadowColor: "gray",
            elevation: 30
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              fontFamily: "Roboto-Light",
              color: "white"
            }}
          >
            CAFE HIMLAM
          </Text>
        </View>
        <View
          style={{
            //marginTop: 200
            flex: 17,
            backgroundColor: "#5D6360"
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AppHome")}
          >
            <View
              style={{ flexDirection: "row", marginTop: 30, marginLeft: 30 }}
            >
              {homeIcon}
              <Text style={styles.textTouch}>TRANG CHỦ</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AppSale")}
          >
            <View style={{ flexDirection: "row", marginLeft: 30 }}>
              {saleIcon}
              <Text style={styles.textTouch}>BÁN HÀNG</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AppReport")}
          >
            <View style={{ flexDirection: "row", marginLeft: 30 }}>
              {reportIcon}
              <Text style={styles.textTouch}>BÁO CÁO</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AppSetting")}
          >
            <View style={{ flexDirection: "row", marginLeft: 30 }}>
              {settingIcon}
              <Text style={styles.textTouch}>CÀI ĐẶT</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Drawer;
