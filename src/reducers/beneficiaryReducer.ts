import { GET_ALL_BENEFICIARIES } from "../types/actionTypes";

import { IBeneficiaryState } from "../interfaces/beneficiary";

const initialState: IBeneficiaryState = {
  beneficiaries: null,
  beneficiaryLoading: false,
};

const beneficiaryReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case GET_ALL_BENEFICIARIES:
      return {
        ...state,
        beneficiaries: action.payload,
        beneficiaryLoading: false,
      };
    default:
      return state;
  }
};

export default beneficiaryReducer;
