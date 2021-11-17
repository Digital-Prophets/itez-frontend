import React from 'react';

const beneficiaries = [
  {
    beneficiaryId: 1,
    fullName: 'Bupe Mulenga',
    dateOfBirth: '13-08-1993',
    gender: 'Female',
    maritalStatus: 'Married',
    phoneNumber: '+260-976-282433',
    email: 'bupe@billionaire.org',
  },
  {
    beneficiaryId: 2,
    fullName: 'Prince Musole',
    dateOfBirth: '07-08-1985',
    gender: 'Male',
    maritalStatus: 'Divorced',
    phoneNumber: '+260-976-737221',
    email: 'prince@typescript.com',
  },
  {
    beneficiaryId: 3,
    fullName: 'Olipa Tembo',
    dateOfBirth: '03-03-2000',
    gender: 'Female',
    maritalStatus: 'Single',
    phoneNumber: '+260-966-242490',
    email: 'olipa@uiux.zm',
  },
  {
    beneficiaryId: 4,
    fullName: 'Cephas Zulu',
    dateOfBirth: '31-12-1980',
    gender: 'Non-binary',
    maritalStatus: 'Separated',
    phoneNumber: '+260-956-453678',
    email: 'cephas@pyhton.com',
  },
];
export default function Beneficiary() {
  return (
    <div className="main-content flex flex-col flex-grow p-4">
      <h1 className="font-bold text-2xl text-gray-700">Beneficiaries</h1>

      {/* <div>
        <h6>Beneficiaries</h6>
      </div>
      <div>
        <button>Add</button>
      </div> */}
      <div className="flex flex-col justify-center  rounded mt-4">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
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
                      DOB
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
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>

                    <th scope="col" className="relative px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {beneficiaries.map((person) => (
                    <tr key={person.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              src="https://pbs.twimg.com/profile_images/378800000298815220/b567757616f720812125bfbac395ff54_normal.png"
                              alt="profile-picrure"
                              className="h-10 w-10 bg-gray-200 border rounded-full"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm ml-1 text-gray-900">
                          {person.fullName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.dateOfBirth}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.gender}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.maritalStatus}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.phoneNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button>Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
