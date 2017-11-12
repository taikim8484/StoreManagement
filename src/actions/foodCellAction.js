import { GET_TABLE_LIST } from "./constants";
import database from "../configDatabase/schema";
// const info = [
//   {
//     idTable: 1,
//     foods: [
//       { name: "Cafe sữa", amount: 1 },
//       { name: "Sting", amount: 1 },
//       { name: "Redbull", amount: 2 }
//     ],
//     money: 75000
//   },
//   {
//     idTable: 2,
//     foods: [
//       { name: "Cam vat", amount: 4 },
//       { name: "Meo den", amount: 1 },
//       { name: "Cafe den", amount: 2 }
//     ],
//     money: 425000
//   },
//   {
//     idTable: 3,
//     foods: [{ name: "Tra sữa", amount: 90 }, { name: "Khan lanh", amount: 1 }],
//     money: 89000
//   }
// ];

function changeFoodAmount(isIncrease, idTable, idOrderDetail) {
  try {
    let order = database.objects("Order").filtered(`idTable = ${idTable}`);

    let orderDetail = order[0].orderDetails.filtered(`id = ${idOrderDetail}`);

    database.write(() => {
      if (isIncrease) {
        orderDetail[0].amount++;
      } else {
        orderDetail[0].amount--;
      }
    });
  } catch (error) {
    console.log(error);
  }
}
export const increaseFood = (idTable, idOrderDetail) => async dispatch => {
  changeFoodAmount(true, idTable, idOrderDetail);
  let payload = await database.objects("Order");
  dispatch({ type: GET_TABLE_LIST, payload });
};

export const decreaseFood = (idTable, idOrderDetail) => async dispatch => {
  changeFoodAmount(false, idTable, idOrderDetail);
  let payload = await database.objects("Order");
  dispatch({ type: GET_TABLE_LIST, payload });
};
