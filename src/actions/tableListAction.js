import { GET_TABLE_LIST, GETTING_TABLE_LIST } from "./constants";
import database from "../configDatabase/schema";

export const getTableList = () => async dispatch => {
  dispatch({ type: GETTING_TABLE_LIST });
  let payload = await database.objects("Order");
  dispatch({ type: GET_TABLE_LIST, payload });
};
