import { GET_ORDER_LIST, GETTING_ORDER_LIST } from "../actions/constants";

const initialState = {
  tableList: [],
  isLoading: false
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case GETTING_ORDER_LIST: {
      return {
        ...state,
        isLoading: true
      };
      break;
    }
    case GET_ORDER_LIST: {
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
