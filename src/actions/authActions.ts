import axios from "axios";
import { ITEZ_API_URI } from "../config";
import { ICreateUser, ILogin } from "../interfaces/authInterface";
import {
  USER_REGISTER_FAILURE,
  USER_REGISTER_SUCCESS,
  AUTH_LOADING,
  AUTH_LOADED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  RESET_USER_REGISTER_SUCCESS,
} from "../types/actionTypes";
import makeToast from "../utils/Toaster";
import router from "next/router";

export const register = (user: ICreateUser) => async (dispatch: any) => {
  dispatch({
    type: AUTH_LOADING,
  });

  try {
    const body = JSON.stringify(user);
    const res = await axios.post(`${ITEZ_API_URI}/register/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: body,
    });

    if (res.status === 201) {
      dispatch({
        type: USER_REGISTER_SUCCESS,
      });
      makeToast("success", "Registeration Success");
      router.push("/user/login");
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
  const body = JSON.stringify(user);
  dispatch({
    type: AUTH_LOADING,
  });

  try {
    const res = await fetch(`${ITEZ_API_URI}/login/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: body,
    });
    console.log("Res status" + res.status);

    if (res.status === 200) {
      console.log("Login Success");
      dispatch({
        type: USER_LOGIN_SUCCESS,
      });
      makeToast("success", "Login Success");
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
