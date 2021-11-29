import axios from "axios";
import {
  GET_ALL_WORK_DETAILS,
  GET_WORK_DETAILS_BY_ID,
} from "../types/actionTypes";

export const getAllWorkDetails = () => (dispatch: any) => {
  axios
    .get("/api/occupations")
    .then((res) =>
      dispatch({
        type: GET_ALL_WORK_DETAILS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ALL_WORK_DETAILS,
        payload: null,
      })
    );
};

export const getWorkDetailsById = (id: number) => (dispatch: any) => {
  axios
    .get(`/api/occupations/${id}`)
    .then((res) =>
      dispatch({
        type: GET_WORK_DETAILS_BY_ID,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_WORK_DETAILS_BY_ID,
        payload: null,
      })
    );
};
