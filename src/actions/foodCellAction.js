import { GET_ORDER_LIST } from "./constants";
import database from "../configDatabase/schema";

const isDecreasable = amount => {
  return amount === 0 ? false : true;
};
function changeFoodAmount(isIncrease, idTable, idOrderDetail) {
  try {
    let order = database.objects("Order").filtered(`idTable = ${idTable}`);

    let orderDetail = order[0].orderDetails.filtered(`id = ${idOrderDetail}`);

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
export const increaseFood = (idTable, idOrderDetail) => async dispatch => {
  changeFoodAmount(true, idTable, idOrderDetail);
  let payload = await database.objects("Order");
  dispatch({ type: GET_ORDER_LIST, payload });
};

export const decreaseFood = (idTable, idOrderDetail) => async dispatch => {
  changeFoodAmount(false, idTable, idOrderDetail);
  let payload = await database.objects("Order");
  dispatch({ type: GET_ORDER_LIST, payload });
};
