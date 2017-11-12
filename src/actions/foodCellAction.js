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

function changeFoodAmount(isIncrease) {
  if (isIncrease) {
    return info.map(table => {
      if (table.idTable == 1) {
        return {
          ...table,
          foods: table.foods.map((food, index) => {
            if (index == 0) {
              return { ...food, amount: food.amount + 1 };
            } else {
              return food;
            }
          })
        };
      } else {
        return table;
      }
    });
  } else {
    return info.map(table => {
      if (table.idTable == 1) {
        return {
          ...table,
          foods: table.foods.map((food, index) => {
            if (index == 0) {
              return { ...food, amount: food.amount - 1 };
            } else {
              return food;
            }
          })
        };
      } else {
        return table;
      }
    });
  }
}
export const increaseFood = (idTable, indexFood) => async dispatch => {
  const payload = changeFoodAmount(true);
  dispatch({ type: INCREASE_FOOD, payload });
};

export const decreaseFood = (idTable, indexFood) => async dispatch => {
  const payload = changeFoodAmount(false);
  dispatch({ type: DECREASE_FOOD, payload });
};
