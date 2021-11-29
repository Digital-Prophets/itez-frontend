import { NextPage } from "next";
import useSWR from "swr";

import Spinner from "../../components/Spinner";
import Pagination from "../../components/Pagination";
import BeneficiaryTable from "../../components/Beneficiary/BeneficiaryTable";
import { ITEZ_API_URI } from "../../config/index";
import { Main } from "../../templates/Main";
import { Meta } from "../../layout/Meta";

const dataFetcher = (url: string) =>
  fetch(url, {
    headers: {
      // add bearer token to the header
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM3OTI4NTU0LCJpYXQiOjE2Mzc5MjQ5NTQsImp0aSI6IjMzYTRlMjk1ZDg5MjRkN2E4YzljNTdkNjU1ZjA4NDJhIiwidXNlcl9pZCI6MX0.EuBuW5M-tddOJgXnbyzWi9IY26JH4jyrEn5XRlHB2y4`,
    },
  }).then((res) => res.json());

function fetchBeneficiaryData() {
  const BASE_URL = ITEZ_API_URI;
  const { data, error } = useSWR(
    `http://localhost:8000/api/beneficiarie/`,
    dataFetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

const BeneficiaryList: NextPage = () => {
  const { data, isLoading } = fetchBeneficiaryData();
  console.log(JSON.stringify(data));

  return (
    <>
      <Main meta={<Meta title="ITEZ" description="" />}>
        <div className="flex pt-4 pl-4 justify-between">
          <div className="flex">
            <h1 className="font-bold text-2xl text-gray-700">Beneficiaries</h1>
          </div>

          <div className="flex space-x-4 text-gray-400 mr-3">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-8 rounded">
              Add Beneficiary
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
                    <BeneficiaryTable data={data} />
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

export default BeneficiaryList;
