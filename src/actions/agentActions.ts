import axios from "axios";
import { GET_ALL_AGENTS, GET_AGENT_BY_ID } from "../types/actionTypes";

export const getAllAgents = () => (dispatch: any) => {
  axios
    .get("/api/agents")
    .then((res) =>
      dispatch({
        type: GET_ALL_AGENTS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ALL_AGENTS,
        payload: null,
      })
    );
};

export const getAgentById = (id: number) => (dispatch: any) => {
  axios
    .get(`/api/agents/${id}`)
    .then((res) =>
      dispatch({
        type: GET_AGENT_BY_ID,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_AGENT_BY_ID,
        payload: null,
      })
    );
};
