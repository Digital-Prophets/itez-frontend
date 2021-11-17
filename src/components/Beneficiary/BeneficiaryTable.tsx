import { NextPage } from 'next';

import { Props } from '../../types/beneficiary';


const BeneficiaryTable: NextPage<Props> = ({ data }) => {
  const { results } = data;
  return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
            <tr>
                <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                Full Name
                </th>
                <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                Birthdate
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
                        <div className="text-sm font-medium text-gray-900">
                        {person.first_name} {person.last_name}
                        </div>
                        <div className="text-sm text-gray-500">
                        {person.email}
                        </div>
                    </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                    {person.date_of_birth}
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                    {person.gender}
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {person.marital_status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {person.phone_number}
                </td>
                </tr>
            ))}
            </tbody>
        </table>
  );
};


export default BeneficiaryTable;
