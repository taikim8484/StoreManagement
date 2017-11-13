import { GETTING_HOME, GET_HOME } from "./constants";
import database from "../configDatabase/schema";
export const getHome = () => async dispatch => {
  dispatch({ type: GETTING_HOME });
  let payload = await database.objects("Table");
  dispatch({ type: GET_HOME, payload });
};
