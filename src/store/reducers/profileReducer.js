import * as TYPES from "../types/profile";

const initialState = {
  profile: {},
  token:"",
  isAutheticated : false

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return {
        ...state,
        profile: action.payload.data,
        token: action.payload.token,
        isAutheticated : action.payload.isAutheticated
        
      }
    case TYPES.REFRESH:
      return{
        ...state,
        token: action.payload.token
      }
    case TYPES.UPDATE_USER:
      return {
        ...state,
        profile: action.payload.user,
        formSubmitted: false // after update user formsubmition reset
      }
    case TYPES.LOGOUT:
      return{
        ...state,
        profile: {},
        token: ""
      }
    default:
      return state;
  }
}

export default reducer;