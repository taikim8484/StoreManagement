import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import styles from "./style";
//Local variables
const homeIcon = require("../../Media/ic_home_white_48dp/android/drawable-hdpi/ic_home_white_48dp.png");
const saleIcon = require("../../Media/ic_view_module_white_48dp/android/drawable-hdpi/ic_view_module_white_48dp.png");
const reportIcon = require("../../Media/ic_insert_chart_white_48dp/android/drawable-hdpi/ic_insert_chart_white_48dp.png");
const settingIcon = require("../../Media/ic_settings_white_48dp/android/drawable-hdpi/ic_settings_white_48dp.png");

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
              <Image style={styles.iconTouch} source={homeIcon} />
              <Text style={styles.textTouch}>TRANG CHỦ</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AppSale")}
          >
            <View style={{ flexDirection: "row", marginLeft: 30 }}>
              <Image style={styles.iconTouch} source={saleIcon} />
              <Text style={styles.textTouch}>BÁN HÀNG</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AppReport")}
          >
            <View style={{ flexDirection: "row", marginLeft: 30 }}>
              <Image style={styles.iconTouch} source={reportIcon} />
              <Text style={styles.textTouch}>BÁO CÁO</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AppSetting")}
          >
            <View style={{ flexDirection: "row", marginLeft: 30 }}>
              <Image style={styles.iconTouch} source={settingIcon} />
              <Text style={styles.textTouch}>CÀI ĐẶT</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Drawer;
