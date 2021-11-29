import { IUserState } from "../interfaces/authInterface";
import {
  USER_REGISTER_FAILURE,
  USER_REGISTER_SUCCESS,
  AUTH_LOADING,
  AUTH_LOADED,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  RESET_USER_REGISTER_SUCCESS,
} from "../types/actionTypes";

const initialState: IUserState = {
  user: null,
  isAuthenticated: false,
  authLoading: false,
  register_success: false,
};

const authReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        register_success: true,
      };
    case USER_REGISTER_FAILURE:
      return {
        ...state,
        register_success: false,
      };
    case RESET_USER_REGISTER_SUCCESS:
      return {
        ...state,
        register_success: false,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case AUTH_LOADING:
      return {
        ...state,
        authLoading: true,
      };
    case AUTH_LOADED:
      return {
        ...state,
        authLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
