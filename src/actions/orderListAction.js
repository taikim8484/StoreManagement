import { GET_ORDER_LIST, GETTING_ORDER_LIST } from "./constants";
import database from "../configDatabase/schema";

export const getOrderList = () => async dispatch => {
  dispatch({ type: GETTING_ORDER_LIST });
  let payload = await database.objects("Order");
  dispatch({ type: GET_ORDER_LIST, payload });
};
