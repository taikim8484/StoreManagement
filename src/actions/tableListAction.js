import { GET_TABLE_LIST } from "./constants";

export const getTableList = () => dispatch => {
  dispatch({ type: GET_TABLE_LIST });
};
