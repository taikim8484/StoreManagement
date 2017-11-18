import { REFRESH_ORDER } from "../actions/constants";
const initialState = {
  order: []
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case REFRESH_ORDER: {
      return {
        ...state,
        order: actions.payload
      };
    }
    default:
      return state;
      break;
  }
};
