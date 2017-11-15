import {
  GETTING_TABLE_LIST,
  GET_TABLE_LIST,
  GETTING_PRODUCT,
  GET_PRODUCT
} from "../actions/constants";

const initialState = {
  tableList: [],
  foodList: [],
  isLoading: false,
  isLoadingFood: false
};

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
