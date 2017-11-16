import { GET_ORDER_LIST } from "./constants";
import database from "../configDatabase/schema";

const isDecreasable = amount => {
  return amount === 0 ? false : true;
};
function changeFoodAmount(isIncrease, idTable, food) {
  try {
    let order = database.objects("Order").filtered(`idTable = ${idTable}`);

    let orderDetail = order[0].orderDetails.filtered(`food.id = ${food.id}`);

    database.write(() => {
      if (isIncrease) {
        orderDetail[0].amount++;
      } else {
        if (isDecreasable(orderDetail[0].amount)) orderDetail[0].amount--;
      }
    });
  } catch (error) {
    console.log(error);
  }
}
export const increaseFood = (idTable, food) => async dispatch => {
  changeFoodAmount(true, idTable, food);
  let payload = await database.objects("Order");
  dispatch({ type: GET_ORDER_LIST, payload });
};

export const decreaseFood = (idTable, food) => async dispatch => {
  changeFoodAmount(false, idTable, food);
  let payload = await database.objects("Order");
  dispatch({ type: GET_ORDER_LIST, payload });
};
