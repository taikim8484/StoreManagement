import { GETTING_HOME, GET_HOME } from "../actions/constants";

const initialState = {
  tableList: [],
  isLoading: false
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
    default:
      return state;
      break;
  }
};
