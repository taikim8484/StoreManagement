import { combineReducers } from "redux";

// Reducers
import navReducer from "./navReducer";
import tableListReducer from "./tableListReducer";
import orderListReducer from "./orderListReducer";
const appReducer = combineReducers({
  navReducer,
  tableListReducer,
  orderListReducer
});
export default appReducer;
