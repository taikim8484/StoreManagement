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
      <View style={styles.viewDrawer}>
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>CAFE HIMLAM</Text>
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
            <View style={styles.viewRoute}>
              {homeIcon}
              <Text style={styles.textTouch}>TRANG CHỦ</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AppSale")}
          >
            <View style={styles.viewRoute}>
              {saleIcon}
              <Text style={styles.textTouch}>BÁN HÀNG</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AppReport")}
          >
            <View style={styles.viewRoute}>
              {reportIcon}
              <Text style={styles.textTouch}>BÁO CÁO</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AppSetting")}
          >
            <View style={styles.viewRoute}>
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
