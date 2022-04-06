import { ActionType } from "../../types";
import { AnyAction } from "redux";
import { IInitialSet } from "./state";
export const initialState: IInitialSet = {
  isBottom: false,
};
const setReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionType.SET_BOTTOM:
      return { ...state, isBottom: !state.isBottom };
    default:
      return state;
  }
};

export default setReducer;
