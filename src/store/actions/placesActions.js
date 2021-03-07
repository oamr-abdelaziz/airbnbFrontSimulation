import * as TYPES from "../types/places";
import { PlacesAxiosInstance } from "../../axiosInstance";

export const getPlaces =  (i) => async (dispatch) => {
  try{
    let pageNumber = i;
    let limit = 10;
    let skip = 10*pageNumber;
    const result = await PlacesAxiosInstance.get(`/?limit=${limit}?skip=${skip}`);
    const {places} = result.data;
    const {totalPlaces} = result.data;
    dispatch({
            type : TYPES.GET_PLACES,
            payload : {places,totalPlaces,pageNumber}
          });
  }
  catch(e){
    console.log(e);
  }
};