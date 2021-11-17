import React from 'react';

import DoughnutChart from '../components/Charts/ DoughnutChart';
import BarChart from '../components/Charts/BarChart';
import LineChart from '../components/Charts/LineChart';

export default function Dashboard() {
  return (
    <div className="main-content flex flex-col flex-grow">
      <h1 className="font-bold text-2xl text-gray-700 p-4">Dashboard</h1>

      <div className="flex bg-white   justify-center mb-80 z-20  ">
        <section className="  rounded-lg shadow-2xl w-6/12 -mb-20">
          <LineChart />{' '}
        </section>
        <section className="bg-white">
          {' '}
          <table>
            <tr>
              <th>Company</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
            </tr>
          </table>
          <table>
            <tr>
              <th>Company</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
            </tr>
          </table>
          <table>
            <tr>
              <th>Company</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
            </tr>
          </table>
          <table>
            <tr>
              <th>Company</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
            </tr>
          </table>
        </section>
      </div>
      <div className="-mt-96  w-full bg-white flex items-center justify-evenly py-60">
        <section className="w-4/12  ">
          <BarChart />
        </section>
        <section className="w-4/12">
          {' '}
          <DoughnutChart />
        </section>
      </div>
    </div>
  );
}
