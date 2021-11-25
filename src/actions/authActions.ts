import axios from "axios";
import { ILogin, IRegister } from "../interfaces/authInterface";
import {
  USER_REGISTER_FAILURE,
  USER_REGISTER_SUCCESS,
  AUTH_LOADING,
  AUTH_LOADED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  RESET_USER_REGISTER_SUCCESS,
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
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: body,
    });

    console.log("Registration Payload" + JSON.stringify(body));

    if (res.status === 201) {
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

export const reset_register_success = () => (dispatch: any) => {
  dispatch({
    type: RESET_USER_REGISTER_SUCCESS,
  });
};

export const login = (user: ILogin) => async (dispatch: any) => {
  dispatch({
    type: AUTH_LOADING,
  });
  console.log("Login body from actions" + JSON.stringify(user));
  try {
    console.log("Try catch hit");
    let body = JSON.stringify(user);
    let res = await fetch(`/api/account/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });

    console.log("Res from actions" + JSON.stringify(body));

    if (res.status === 200) {
      dispatch({
        type: USER_LOGIN_SUCCESS,
      });
    } else {
      dispatch({
        type: USER_LOGIN_FAILURE,
      });
    }
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
    });
    console.log(error);
  }
  dispatch({
    type: AUTH_LOADED,
  });
};
