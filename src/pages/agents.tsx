import { useState } from "react";

import useSWR from "swr";

import { API_URL } from "../config";
import Spinner from "../components/Spinner";
import AgentsTable from "../components/Tables/AgentsTable";
import CreateAgentForm from "../components/CreateAgentForm/CreateAgentForm";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const AgentsPage = () => {
  const [buttonPopup, SetButtonPopup] = useState(false);

  const BASE_URL = API_URL;
  const { data, error } = useSWR(`${BASE_URL}/agents`, fetcher);

  if (error)
    return (
      <div>
        <h2 className="font-bold text-center">
          Error has accured while fetching data!!
        </h2>
      </div>
    );

  return (
    <>
      <Main meta={Meta}>
        <div className="flex justify-end">
          <button
            onClick={() => SetButtonPopup(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 mr-8 rounded"
          >
            Add Agents
          </button>
        </div>
        <div className="main-content flex flex-col flex-grow p-4">
          <h1 className="font-bold text-2xl text-gray-700 mb-3">
            Agents Details
          </h1>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  {data ? <AgentsTable data={data} /> : <Spinner />}
                  <CreateAgentForm
                    trigger={buttonPopup}
                    setTrigger={SetButtonPopup}
                  ></CreateAgentForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default AgentsPage;
