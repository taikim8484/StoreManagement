import { GET_TABLE_LIST } from "./constants";
import database from "../configDatabase/schema";

export const checkOut = idTable => async dispatch => {
  let order = database.objects("Order").filtered(`idTable = ${idTable}`);
  try {
    database.write(() => {
      database.delete(order);
    });
  } catch (error) {
    console.log("Error: ", error);
  }
  let payload = await database.objects("Order");
  dispatch({ type: GET_TABLE_LIST, payload });
};
