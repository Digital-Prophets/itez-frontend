import { IUserState } from "../interfaces/authInterface";
import {
  USER_REGISTER_FAILURE,
  USER_REGISTER_SUCCESS,
  AUTH_LOADING,
  AUTH_LOADED,
} from "../types/authTypes";

const initialState: IUserState = {
  user: null,
  isAuthenticated: false,
  authLoading: false,
  token: null,
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
