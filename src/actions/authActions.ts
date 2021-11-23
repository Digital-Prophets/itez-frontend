import axios from "axios";
import { IRegister } from "../interfaces/authInterface";
import {
  USER_REGISTER_FAILURE,
  USER_REGISTER_SUCCESS,
  AUTH_LOADING,
  AUTH_LOADED,
} from "../types/authTypes";

export const register = (user: IRegister) => async (dispatch: any) => {
  dispatch({
    type: AUTH_LOADING,
  });

  try {
    let body = JSON.stringify(user);
    let res = await axios.post(`/api/account/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });

    console.log("Registration Payload" + JSON.stringify(body));

    if (res.status === 200) {
      dispatch({
        type: USER_REGISTER_SUCCESS,
      });
    } else {
      dispatch({
        type: USER_REGISTER_FAILURE,
      });
    }
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILURE,
    });
    console.log(error);
  }
  dispatch({
    type: AUTH_LOADED,
  });
};
