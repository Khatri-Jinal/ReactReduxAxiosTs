import { Dispatch } from "redux";
import { USER_FAIL, USER_LOADING, USER_SUCCESS, UserDispatchTypes } from "./UserActionTypes";
import axios from "axios";

export const GetUser = (pn: number) => {
  return function (dispatch: Dispatch<UserDispatchTypes>) {
    dispatch({
      type: USER_LOADING,
      payload: []

    })
    axios
      .get(`https://reqres.in/api/users?page=${pn}`)
      .then((response) => {
        dispatch({
          type: USER_SUCCESS,
          payload: response.data.data
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_FAIL,
          payload: error.message
        })
      });
  };
};
