import * as TYPES from '../types/places';
const initialState = {
totalPlaces : 0,
pageNumber : 0 ,
places : []

}
export default (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TYPES.GET_PLACES:
      return {
        ...state,
        totalPlaces: action.payload.totalPlaces,
        pageNumber : action.payload.pageNumber,
        places:[...action.payload.places]
        
      };
    
    default:
      return state;
  }
};
