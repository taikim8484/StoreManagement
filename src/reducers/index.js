import { combineReducers } from "redux";

// Reducers
import navReducer from "./navReducer";
import tableListReducer from "./tableLIstReducer";
import homeReducer from "./homeReducer";
const appReducer = combineReducers({
  navReducer,
  tableListReducer,
  homeReducer
});
export default appReducer;
