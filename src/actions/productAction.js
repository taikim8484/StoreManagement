import { GETTING_PRODUCT, GET_PRODUCT, REFRESH_ORDER } from "./constants";
import database from "../configDatabase/schema";

export const getProduct = idTable => async dispatch => {
  dispatch({ type: GETTING_PRODUCT });
  let payload = await database.objects("Food");
  dispatch({ type: GET_PRODUCT, payload });
};

const check = (order, food) => {
  return order[0].orderDetails.filtered(`food.id = ${food.id}`).length == 0;
};
export const plus = (idTable, food) => async dispatch => {
  const order = database.objects("Order").filtered(`idTable = ${idTable}`);
  try {
    database.write(() => {
      if (check(order, food)) {
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
