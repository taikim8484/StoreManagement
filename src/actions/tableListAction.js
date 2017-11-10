import { GET_TABLE_LIST } from "./constants";

export const getTableList = () => async dispatch => {
  dispatch({ type: GET_TABLE_LIST });
};
