import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  viewDrawer: {
    flex: 1,
    flexDirection: "column"
  },
  viewTitle: {
    flex: 3,
    backgroundColor: "#006064",
    elevation: 2,
    justifyContent: "center",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowColor: "gray",
    elevation: 30
  },
  textTitle: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Roboto-Light",
    color: "white"
  },
  viewRoute: {
    flexDirection: "row",
    marginLeft: 30
  },
  textTouch: {
    fontSize: 13,
    fontFamily: "Roboto-Light",
    color: "white",
    marginTop: 30,
    marginLeft: 10
  },
  iconTouch: {
    marginTop: 30
  }
}));
