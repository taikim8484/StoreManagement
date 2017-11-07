import { combineReducers } from "redux";

// Reducers
import navReducer from "./navReducer";

const appReducer = combineReducers({
  navReducer
});

export default appReducer;
