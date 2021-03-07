import * as TYPES from '../types/language';

const INITIAL_STATE = {
  language: "en",
}

export default (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case TYPES.SET_CURRENT_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};
