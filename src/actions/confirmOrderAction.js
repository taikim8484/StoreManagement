import { REFRESH_ORDER, GETTING_TABLE_LIST, GET_TABLE_LIST } from "./constants";
import database from "../configDatabase/schema";

const isExcistFood = (order, food) => {
  return order[0].orderDetails.filtered(`food.id = ${food.id}`).length != 0;
};
export const addFood = (idTable, food) => async dispatch => {
  //Querry Order With Id Table
  const order = database.objects("Order").filtered(`idTable = ${idTable}`);
  try {
    database.write(() => {
      if (!isExcistFood(order, food)) {
        const orderDetail = database.create("OrderDetail", {
          food: food,
          amount: 1
        });
        order[0].orderDetails.push(orderDetail);
      } else {
        const orderDetail = order[0].orderDetails.filtered(
          `food.id = ${food.id}`
        );
        orderDetail[0].amount++;
      }
    });
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: REFRESH_ORDER, payload: order });
};
export const clearFood = (idTable, food) => async dispatch => {
  //Querry Order With Id Table
  const order = database.objects("Order").filtered(`idTable = ${idTable}`);
  try {
    database.write(() => {
      if (!isExcistFood(order, food)) {
      } else {
        const orderDetail = order[0].orderDetails.filtered(
          `food.id = ${food.id}`
        );
        database.delete(orderDetail);
      }
    });
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: REFRESH_ORDER, payload: order });
};
export const cancelOrder = idTable => async dispatch => {
  let order = await database.objects("Order").filtered(`idTable = ${idTable}`);
  try {
    database.write(() => {
      database.delete(order);
    });
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: GETTING_TABLE_LIST });
  let payload = await database.objects("Table");
  dispatch({ type: GET_TABLE_LIST, payload });
};
export const getOrderNow = idTable => async dispatch => {
  let payload = await database
    .objects("Order")
    .filtered(`idTable = ${idTable}`);
  dispatch({ type: REFRESH_ORDER, payload });
};
