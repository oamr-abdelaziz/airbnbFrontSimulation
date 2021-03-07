import * as TYPES from '../types/language';

export const setCurrntLanguage = (payload) => ({
  type: TYPES.SET_CURRENT_LANGUAGE,
  payload,
});
