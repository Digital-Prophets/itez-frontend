import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import { GrPieChart } from 'react-icons/gr';
import { IoMdPerson, IoIosPeople } from 'react-icons/io';
import { MdLocationPin, MdHomeWork, MdSettings } from 'react-icons/md';

import sideBarlogo from '../assets/undp-logo-side.svg';

const Sidebar = () => {
  return (
    <IconContext.Provider
      value={{
        size: '20',
        style: { verticalAlign: 'middle', marginRight: '0.5rem' },
      }}
    >
      <div className=" top-0 left-0  w-80 m-0 h-screen inline-flex flex-col bg-primary text-black shadow-lg ">
        <i>
          <Image src={sideBarlogo} />
        </i>

        <ul className="px-10 pt-4 text-base text-black">
          <Link href="dashboard">
            <li className="cursor-pointer my-6  flex items-center">
              <GrPieChart />
              Dashboards
            </li>
          </Link>

          <Link href="/beneficiary/">
            <li className="cursor-pointer my-6 flex items-center">
              <IoIosPeople />
              Beneficiary
            </li>
          </Link>

          <Link href="/location/">
            <li className="cursor-pointer my-6  flex items-center">
              {' '}
              <MdLocationPin /> Location{' '}
            </li>
          </Link>

          <Link href="/occupation/">
            <li className="cursor-pointer my-6 flex items-center">
              {' '}
              <MdHomeWork />
              Occupation
            </li>
          </Link>

          <Link href="/agents/">
            <li className="cursor-pointer my-6 flex items-center ">
              {' '}
              <IoMdPerson />
              Agents
            </li>
          </Link>
        </ul>

        <h2 className="mx-5 font-bold flex items-center">
          <MdSettings />
          System Settings
        </h2>
        <ul className=" text-base text-black px-10">
          <Link href="/users/">
            <li className="cursor-pointer my-6  flex items-center">
              {' '}
              <IoMdPerson /> User Management
            </li>
          </Link>
        </ul>
      </div>{' '}
    </IconContext.Provider>
  );
};
export default Sidebar;
