import { GET_TABLE_LIST } from "./constants";
import database from "../configDatabase/schema";
export const getTableList = () => async dispatch => {
  let payload = database.objects("Order");
  dispatch({ type: GET_TABLE_LIST, payload });
};
