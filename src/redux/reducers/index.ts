import { combineReducers } from "redux";
import setReducer from "./setReducer/setReducer";
const rootReducer = combineReducers({
  setReducer,
});

const combReducers = (state: any, action: any) => {
  return rootReducer(state, action);
};

export default combReducers;
