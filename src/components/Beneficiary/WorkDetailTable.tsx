import { NextPage } from "next";
import Link from "next/link";

import { Props } from "../../interfaces/workDetail";

const WorkDetailTable: NextPage<Props> = ({ data }) => {
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
            Beneficiary ID
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Gross Pay
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Company
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Company Address
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Is company insured?
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.results?.map((work_detail) => (
          <tr key={work_detail.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <Link href="#">
                <a>
                  <div className="text-sm">
                    {work_detail.beneficiary.first_name}{" "}
                    {work_detail.beneficiary.last_name}
                  </div>
                </a>
              </Link>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm">
                {work_detail.beneficiary.beneficiary_ID}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm">{work_detail.gross_pay}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm ">{work_detail.company}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm ">{work_detail.work_address}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm ">
                {work_detail.insured ? <p>Yes</p> : <p>No</p>}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WorkDetailTable;
