import axios from "axios";
import {
  GET_ALL_BENEFICIARIES,
  GET_BENEFICIARY_BY_ID,
} from "../types/actionTypes";

export const getAllBeneficiaries = () => (dispatch: any) => {
  axios
    .get("/api/beneficiaries")
    .then((res) =>
      dispatch({
        type: GET_ALL_BENEFICIARIES,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const getBeneficiaryById = (id: number) => (dispatch: any) => {
  axios
    .get(`/api/beneficiaries/${id}`)
    .then((res) =>
      dispatch({
        type: GET_BENEFICIARY_BY_ID,
        payload: res.data,
      })
    )
    .catch((err) =>
      // log error
      console.log(err)
    );
};
