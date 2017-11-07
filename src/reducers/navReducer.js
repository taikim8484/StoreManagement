import { NavigationActions } from "react-navigation";
import Navigator from "../configRoutes";

export default (state, action) => {
  const nextState = Navigator.router.getStateForAction(action, state);
  return nextState || state;
};
