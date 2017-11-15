import {
  GETTING_PRODUCT,
  GET_PRODUCT,
  REFRESH_ORDER
} from "../actions/constants";
import database from "../configDatabase/schema";
const initialState = {
  foodList: [],
  order: {},
  isLoading: false
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case GETTING_PRODUCT: {
      return {
        ...state,
        isLoading: true
      };
      break;
    }
    case GET_PRODUCT: {
      return {
        ...state,
        foodList: actions.payload,
        isLoading: false
      };
      break;
    }
    default:
      return state;
      break;
  }
};
