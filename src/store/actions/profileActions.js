import * as TYPES from "../types/profile";
import { userAxiosInstance } from "../../axiosInstance";

export const getAuthUser =  (token) => async (dispatch) => {
  try{
    const userData = await userAxiosInstance.get(`/me`,{headers:{token}}) ;
    console.log(userData.data);
    dispatch({
            type : TYPES.LOGIN,
            payload : {data :userData.data, token : token ,isAutheticated: true}
          });
  }
  catch(e){
    console.log(e);
  }
};
export const refreshAuth = (token) => async (dispatch) => {

  try{

    const newToken = await userAxiosInstance.get(`/token`,{headers:{token}});
    console.log(newToken.data);
    dispatch({
      type: TYPES.REFRESH,
      payload : {token : newToken.data}
    });
  }
  catch(e){
    console.log(e);
  }
};

export const updateAuthuser =  () => async (dispatch) => {
  try{
    const places = await userAxiosInstance.get(`/me`) ;
    //console.log(places);
    dispatch({
            type : TYPES.UPDATE_USER,
            payload : places.data
          });
  }
  catch(e){
    console.log(e);
  }
};
