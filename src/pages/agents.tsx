const beneficiaries = [
  {
    agentId: 1,
    fullName: 'Bupe Mulenga',
    dateOfBirth: '13-08-1993',
    gender: 'Female',
    location: 'Lusaka',
  },
  {
    agentId: 2,
    fullName: 'Prince Musole',
    dateOfBirth: '07-08-1985',
    gender: 'Male',
    location: 'Kafue',
  },
  {
    agentId: 3,
    fullName: 'Olipa Tembo',
    dateOfBirth: '03-03-2000',
    gender: 'Female',
    location: 'Ndola',
  },
  {
    agentId: 4,
    fullName: 'Cephas Zulu',
    dateOfBirth: '31-12-1980',
    gender: 'Non-binary',
    location: 'Chipata',
  },
];
export default function Beneficiary() {
  return (
    <div className="main-content flex flex-col flex-grow p-4">
      <h1 className="font-bold text-2xl text-gray-700">Agents</h1>

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
                      Location
                    </th>
                    <th scope="col" className="relative px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {beneficiaries.map((person) => (
                    <tr key={person.agentId}>
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
                          {person.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button>Details</button>
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
