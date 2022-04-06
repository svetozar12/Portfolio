import { ActionType } from "../../types";
import { AnyAction } from "redux";
import { IInitialSet } from "./state";
export const initialState: IInitialSet = {
  isBottom: false,
  toggleNav: false,
};
const setReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionType.SET_BOTTOM:
      return { ...state, isBottom: !state.isBottom };
    case ActionType.SET_NAV:
      return { ...state, toggleNav: !state.toggleNav };
    default:
      return state;
  }
};

export default setReducer;
