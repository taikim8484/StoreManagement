import { combineReducers } from "redux";

// Reducers
import navReducer from "./navReducer";
import tableListReducer from "./tableLIstReducer";

const appReducer = combineReducers({
  navReducer,
  tableListReducer
});
export default appReducer;
