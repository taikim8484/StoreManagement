import { REFRESH_ORDER } from "./constants";
import database from "../configDatabase/schema";

const isExcistFood = (order, food) => {
  return order[0].orderDetails.filtered(`food.id = ${food.id}`).length != 0;
};
export const addFood = (idTable, food) => async dispatch => {
  //Querry Order With Id Table
  let order = database.objects("Order").filtered(`idTable = ${idTable}`);
  try {
    database.write(() => {
      if (!isExcistFood(order, food)) {
        let orderDetail = database.create("OrderDetail", {
          id: 0,
          food: food,
          amount: 1
        });
        order[0].orderDetails.push(orderDetail);
      } else {
        let orderDetail = order[0].orderDetails.filtered(
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
