import { combineReducers } from "redux";
import authReducer from "./authReducer";
import beneficiaryReducer from "./beneficiaryReducer";
export const combinedReducers = combineReducers({
  auth: authReducer,
  beneficiary: beneficiaryReducer,
});

export type RootState = ReturnType<typeof combinedReducers>;
