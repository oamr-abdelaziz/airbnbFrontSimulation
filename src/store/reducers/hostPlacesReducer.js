import { SET_PLACE } from "../types/hostPlacesType";

export default (
  state = {},
  action
) => {
  switch (action.type) {
    case SET_PLACE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
