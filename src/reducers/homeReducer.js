import {
  GETTING_HOME,
  GET_HOME,
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
    case GETTING_HOME: {
      return {
        ...state,
        isLoading: true
      };
      break;
    }
    case GET_HOME: {
      return {
        ...state,
        tableList: actions.payload,
        isLoading: false
      };
      break;
    }
    case GETTING_PRODUCT: {
      return {
        ...state,
        isLoadingFood: true
      };
      break;
    }
    case GET_PRODUCT: {
      return {
        ...state,
        foodList: actions.payload,
        isLoadingFood: false
      };
      break;
    }
    default:
      return state;
      break;
  }
};
