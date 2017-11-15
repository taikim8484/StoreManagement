import { GETTING_PRODUCT, GET_PRODUCT } from "./constants";
import database from "../configDatabase/schema";

export const getProduct = idTable => async dispatch => {
  dispatch({ type: GETTING_PRODUCT });
  let payload = await database.objects("Food");
  database.write(() => {
    database.create("Order", {
      idTable: idTable,
      orderDetails: []
    });
  });
  dispatch({ type: GET_PRODUCT, payload });
};
