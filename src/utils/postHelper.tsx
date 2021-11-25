import { API_URL } from "../config";
import useSWR from "swr";

const fetcher = (url: string, formData: any) =>
  fetch(url, formData).then((res) => res.json());

function postData(endPoint: string, formData: any) {
  const BASE_URL = API_URL;
  const { data, error } = useSWR(
    [`${BASE_URL}/${endPoint}`, formData],
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default postData;
