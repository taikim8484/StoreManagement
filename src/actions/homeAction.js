import {
  GETTING_HOME,
  GET_HOME,
  GETTING_PRODUCT,
  GET_PRODUCT
} from "./constants";
import database from "../configDatabase/schema";

export const getHome = () => async dispatch => {
  dispatch({ type: GETTING_HOME });
  let payload = await database.objects("Table");
  dispatch({ type: GET_HOME, payload });
};

export const getProduct = () => async dispatch => {
  dispatch({ type: GETTING_PRODUCT });
  let payload = await database.objects("Food");
  dispatch({ type: GET_PRODUCT, payload });
};
