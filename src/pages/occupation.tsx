import { NextPage } from "next";
import useSWR from "swr";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";
import WorkDetailTable from "../components/Beneficiary/WorkDetailTable";
import { API_URL } from "../config";
import { Main } from "../templates/Main";
import { Meta } from "../layout/Meta";

const dataFetcher = (url: string) => fetch(url).then((res) => res.json());

function fetchWorkDetailData() {
  const BASE_URL = API_URL;
  const { data, error } = useSWR(`${BASE_URL}/work_detail`, dataFetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

const WorkDetails: NextPage = () => {
  const { data, isLoading } = fetchWorkDetailData();

  return (
    <>
      <Main meta={Meta}>
        <div className="flex pt-4 pl-4 justify-between">
          <div className="flex">
            <h1 className="font-bold text-2xl text-gray-700">Occupation</h1>
          </div>

          <div className="flex space-x-4 text-gray-400 mr-3">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-8 rounded">
              Add Details
            </button>
          </div>
        </div>
        <div className="main-content flex flex-col flex-grow p-4">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  {isLoading ? (
                    <Spinner />
                  ) : data ? (
                    <WorkDetailTable data={data} />
                  ) : (
                    <h2 className="font-bold">
                      An Error occured while fetching data.
                    </h2>
                  )}
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default WorkDetails;
