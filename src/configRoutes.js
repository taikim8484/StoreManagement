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

//Drawer
import Drawer from "./components/Drawer";
//Components
import Home from "./components/Home";
import Sale from "./components/Sale/Sale";
import Report from "./components/Report";
import Setting from "./components/Setting/Setting";
//-------------import for Tab Sale---------------
import Table from "./components/Sale/Table/TableList";
import Order from "./components/Sale/Order/Order";
import Calculator from "./components/Sale/Calculator";
//-----------------------------------------------
//-------------import for Stack Table---------------
import ConfirmOrder from "./components/Sale/Order/ConfirmOrder";
import Product from "./components/Sale/Table/Product";
import Checkout from "./components/Sale/Table/Checkout";

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
    StackConfirmOrder: {
      screen: ConfirmOrder
    }
  },
  {
    headerMode: "screen"
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
    }
  },
  {
    contentComponent: props => <Drawer {...props} />,
    drawerWidth: 200,
    drawerPosition: "left"
  }
));
