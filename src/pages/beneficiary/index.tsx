import { NextPage } from 'next';
import useSWR from 'swr';

import Spinner from '../../components/Spinner';
import Pagination from '../../components/Pagination';
import { config } from '../../config';
import BeneficiaryTable from '../../components/Beneficiary/BeneficiaryTable';


const dataFetcher = (url: string) => fetch(url).then(res => res.json())


function fetchBeneficiaryData () {
  const BASE_URL = config.ITEZ_API_URI;
  const { data, error } = useSWR(`${BASE_URL}/beneficiaries`, dataFetcher)

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

const BeneficiaryList: NextPage = () => {
  const {data, isLoading} = fetchBeneficiaryData();

  return (
    <>
      <div className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 mr-8 rounded">
          Add Beneficiary
        </button>
      </div>
      <div className="main-content flex flex-col flex-grow p-4">
        <h1 className="font-bold text-2xl text-gray-700 mb-3">Beneficiaries</h1>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              {isLoading ? <Spinner /> : data ? <BeneficiaryTable data={data}/> : <h2 className="font-bold">An Error occured while fetching data.</h2>}
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeneficiaryList;
