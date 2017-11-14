import { GET_TABLE_LIST, GETTING_TABLE_LIST } from "../actions/constants";

const initialState = {
  tableList: [],
  isLoading: false
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
