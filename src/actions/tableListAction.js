import { GETTING_TABLE_LIST, GET_TABLE_LIST } from "./constants";
import database from "../configDatabase/schema";

export const getTableList = () => async dispatch => {
  dispatch({ type: GETTING_TABLE_LIST });
  let payload = await database.objects("Table");
  dispatch({ type: GET_TABLE_LIST, payload });
};
