import {
  GET_TABLE_LIST,
  GETTING_TABLE_LIST,
  INCREASE_FOOD,
  DECREASE_FOOD
} from "../actions/constants";

const initialState = {
  tableList: [],
  isLoading: false
};

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

export default (state = initialState, actions) => {
  switch (actions.type) {
    case GETTING_TABLE_LIST: {
      return {
        ...state,
        isLoading: true
      };
      break;
    }
    case GET_TABLE_LIST: {
      return {
        ...state,
        tableList: actions.payload,
        isLoading: false
      };
      break;
    }
    default:
      return state;
      break;
  }
};
