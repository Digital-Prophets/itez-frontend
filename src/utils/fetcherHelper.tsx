import { API_URL } from "../config";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function fetchData(endPoint: string) {
  const BASE_URL = API_URL;
  const { data, error } = useSWR(`${BASE_URL}/${endPoint}`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default fetchData;
