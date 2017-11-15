import { combineReducers } from "redux";

// Reducers
import navReducer from "./navReducer";
import tableListReducer from "./tableListReducer";
import orderListReducer from "./orderListReducer";
import productReducer from "./productReducer";
import confirmOrderReducer from "./confirmOrderReducer";
const appReducer = combineReducers({
  navReducer,
  tableListReducer,
  orderListReducer,
  productReducer,
  confirmOrderReducer
});
export default appReducer;
