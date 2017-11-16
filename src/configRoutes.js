import React, { Component } from "react";
import {} from "react-native";
import {
  DrawerNavigator,
  TabNavigator,
  StackNavigator
} from "react-navigation";

//Drawer
import Drawer from "./components/Drawer";
//Components
import TableList from "./components/Home/";
import Report from "./components/Report";
import Setting from "./components/Setting";
//-------------import for Tab Sale---------------
import TableHavingCustomer from "./components/Sale/Table";
import Order from "./components/Sale/Order/Order";
import Calculator from "./components/Sale/Calculator";
//-----------------------------------------------
//-------------import for Stack Home---------------
import ProductList from "./components/Home/Product";
//---import for Stack Setting------
import TableSetting from "./components/Setting/configTable";
//import FoodSetting from "./components/Setting/configFood";
const SaleTab = TabNavigator(
  {
    TabTable: {
      screen: TableHavingCustomer
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
const TableStack = StackNavigator(
  {
    StackTableList: {
      screen: TableList
    },
    StackProductList: {
      screen: ProductList,
      navigationOptions: ({ navigation }) => ({
        idTable: `${navigation.state.params.idTable}'s StackProductList'`
      })
    }
  },
  {
    headerMode: "screen"
  }
);
const SettingStack = StackNavigator({
  StackSetting: {
    screen: Setting
  },
  StackTableSetting: {
    screen: TableSetting
  }
  // StackFoodSetting: {
  //   screen: FoodSetting
  // }
});
export default (AppDrawer = DrawerNavigator(
  {
    AppHome: {
      screen: TableStack
    },
    AppReport: {
      screen: Report
    },
    AppSale: {
      screen: SaleTab
    },
    AppSetting: {
      screen: SettingStack
    }
  },
  {
    contentComponent: props => <Drawer {...props} />,
    drawerWidth: 200,
    drawerPosition: "left"
  }
));
