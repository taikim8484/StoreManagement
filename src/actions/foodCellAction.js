import { INCREASE_FOOD, DECREASE_FOOD } from "./constants";

const info = [
  {
    idTable: 1,
    foods: [
      { name: "Cafe sữa", amount: 1 },
      { name: "Sting", amount: 1 },
      { name: "Redbull", amount: 2 }
    ],
    money: 75000
  },
  {
    idTable: 2,
    foods: [
      { name: "Cam vat", amount: 4 },
      { name: "Meo den", amount: 1 },
      { name: "Cafe den", amount: 2 }
    ],
    money: 425000
  },
  {
    idTable: 3,
    foods: [{ name: "Tra sữa", amount: 90 }, { name: "Khan lanh", amount: 1 }],
    money: 89000
  }
];

function mapping(table, index, change) {
  change == "Minus" ? table.foods[index].amount-- : table.foods[index].amount++;
  return table;
}

export const increaseFood = (idTable, indexFood) => dispatch => {
  var payload = info.map(
    table =>
      table.idTable === idTable ? mapping(table, indexFood, "Plus") : table
  );
  dispatch({ type: INCREASE_FOOD, payload });
};

export const decreaseFood = (idTable, indexFood) => dispatch => {
  var payload = info.map(
    table =>
      table.idTable === idTable ? mapping(table, indexFood, "Minus") : table
  );
  dispatch({ type: DECREASE_FOOD, payload });
};
