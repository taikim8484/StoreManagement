import React, { Component } from "react";
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import {
  DrawerNavigator,
  TabNavigator,
  StackNavigator
} from "react-navigation";

import Home from "./Home";
import Sale from "./Sale/Sale";
import Report from "./Report";
import Setting from "./Setting/Setting";
//-------------import for Tab Sale---------------
import Table from "./Sale/Table/Table";
import Order from "./Sale/Order/Order";
import Calculator from "./Sale/Calculator";
//-----------------------------------------------
//-------------import for Stack Table---------------
import ConfirmOrder from "./Sale/Order/ConfirmOrder";
import Product from "./Sale/Table/Product";
import Checkout from "./Sale/Table/Checkout";

const Menu = props => (
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
      <TouchableOpacity onPress={() => props.navigation.navigate("AppHome")}>
        <View style={{ flexDirection: "row", marginTop: 30, marginLeft: 30 }}>
          <Image
            style={styles.iconTouch}
            source={require("../Media/ic_home_white_48dp/android/drawable-hdpi/ic_home_white_48dp.png")}
          />
          <Text style={styles.textTouch}>TRANG CHỦ</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("AppSale")}>
        <View style={{ flexDirection: "row", marginLeft: 30 }}>
          <Image
            style={styles.iconTouch}
            source={require("../Media/ic_view_module_white_48dp/android/drawable-hdpi/ic_view_module_white_48dp.png")}
          />
          <Text style={styles.textTouch}>BÁN HÀNG</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("AppReport")}>
        <View style={{ flexDirection: "row", marginLeft: 30 }}>
          <Image
            style={styles.iconTouch}
            source={require("../Media/ic_insert_chart_white_48dp/android/drawable-hdpi/ic_insert_chart_white_48dp.png")}
          />
          <Text style={styles.textTouch}>BÁO CÁO</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("AppSetting")}>
        <View style={{ flexDirection: "row", marginLeft: 30 }}>
          <Image
            style={styles.iconTouch}
            source={require("../Media/ic_settings_white_48dp/android/drawable-hdpi/ic_settings_white_48dp.png")}
          />
          <Text style={styles.textTouch}>CÀI ĐẶT</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const StackTable = StackNavigator(
  {
    StackTableList: {
      screen: Table
    },
    StackProduct: {
      screen: Product
    },
    StackCheckout: {
      screen: Checkout
    },
    StackConfirmOrder:{
      screen: ConfirmOrder
    }
  },
  {
    headerMode: 'screen'
  }
);

const SaleTab = TabNavigator(
  {
    TabTable: {
      screen: StackTable
    },
    TabCalculator: {
      screen: Calculator
    },
    TabOrder: {
      screen: Order
    }
  },
  {
    tabBarPosition: "bottom",
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "#FFFFFF",
      activeBackgroundColor: "#35B768",
      inactiveBackgroundColor: "#35B768"
    }
  }
);

export default (AppDrawer = DrawerNavigator(
  {
    AppHome: {
      screen: Home
    },
    AppReport: {
      screen: Report
    },
    AppSale: {
      screen: SaleTab
    },
    AppSetting: {
      screen: Setting
    },
    DrawerList: {
      screen: Menu
    }
  },
  {
    contentComponent: Menu,
    drawerWidth: 200,
    drawerPosition: "left"
  }
));

/*
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate("AppHome")}
      />
      <Button
        title="Go to Sale"
        onPress={() => props.navigation.navigate("AppSale")}
      />
      <Button
        title="Go to Report"
        onPress={() => props.navigation.navigate("AppReport")}
      />
      <Button
        title="Go to Setting"
        onPress={() => props.navigation.navigate("AppSetting")}
      />
      */
var styles = StyleSheet.create({
  textTouch: {
    fontSize: 15,
    fontFamily: "Roboto-Light",
    color: "white",
    marginTop: 30,
    marginLeft: 10
  },
  iconTouch: {
    width: 20,
    height: 20,
    marginTop: 30
  }
});
