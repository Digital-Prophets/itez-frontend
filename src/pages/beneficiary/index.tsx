import React from 'react';
import {NextPage} from "next";
import Pagination from "../../components/Pagination";
import {Props} from "../../types";



const BeneficiaryTable: NextPage<Props> = ({data}) => {
  const {results, count} = data;
    return (
      <div className="main-content flex flex-col flex-grow p-4">
        <h1 className="font-bold text-2xl text-gray-700">Beneficiaries</h1>
        <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      D.O.B
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Gender
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Marital Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone Number
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {results.map((person) => (
                    <tr key={person.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{person.first_name} {person.last_name}</div>
                            <div className="text-sm text-gray-500">{person.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{person.date_of_birth}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{person.gender}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.marital_status}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.phone_number}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </div>
    )
}

export async function getStaticProps() {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URI
  const res = await fetch(`${BASE_URL}/beneficiaries`)
  const data = await res.json()

  return {
    props: {
      data
    },
  }
}

export default BeneficiaryTable;