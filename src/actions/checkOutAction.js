import { GET_ORDER_LIST } from "./constants";
import database from "../configDatabase/schema";

export const checkOut = idTable => async dispatch => {
  const order = database.objects("Order").filtered(`idTable = ${idTable}`);
  try {
    database.write(() => {
      database.create("Bill", { id: 0, order: order[0], date: new Date() });
      database.delete(order);
    });
  } catch (error) {
    console.log("Error: ", error);
  }
  let payload = await database.objects("Order");
  dispatch({ type: GET_ORDER_LIST, payload });
};
