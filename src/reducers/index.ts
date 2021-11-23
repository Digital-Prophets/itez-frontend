import { combineReducers } from "redux";
import authReducer from "./authReducer";

export const combinedReducers = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof combinedReducers>;
