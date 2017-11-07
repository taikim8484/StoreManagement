import React, { Component } from "react";
import { View, Button } from "react-native";

// Navigation
import Navigator from "./configRoutes";

import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";

// Reducers
import Reducer from "./reducers";

// Redux Midlewares
import thunk from "redux-thunk";
import logger from "redux-logger";

class AppNavigator extends Component {
  render() {
    return (
      <Navigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navReducer
        })}
      />
    );
  }
}

// Map state to props
const AppNavigation = connect(state => {
  var navReducer = state.navReducer;
  return { navReducer };
})(AppNavigator);

// Create store
const store = createStore(Reducer, applyMiddleware(thunk, logger));

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

export default App;
