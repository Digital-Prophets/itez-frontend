import Image from 'next/image';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import { GrPieChart } from 'react-icons/gr';
import {
  IoMdPerson,
  IoIosPeople,
  IoMdLaptop,
  IoMdConstruct,
  IoMdBook,
  IoMdBookmarks,
} from 'react-icons/io';
import { MdLocationPin, MdHomeWork, MdSettings } from 'react-icons/md';

import sidebarlogo from '../../assets/undp-logo-side.png';

const Sidebar = () => {
  return (
    <IconContext.Provider
      value={{
        size: '20',
        style: { verticalAlign: 'middle', marginRight: '0.5rem' },
      }}
    >
      <div className=" top-0 left-0 sticky w-80 m-0 h-screen inline-flex flex-col bg-primary text-black shadow-lg ">
        <i>
          {' '}
          <Image className="" src={sidebarlogo} />
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
          <Link href="/registration/">
            <li className="cursor-pointer my-6  flex items-center">
              {' '}
              <IoMdPerson /> Registration
            </li>
          </Link>
        </ul>

        <h2 className="mx-5 font-bold flex items-center">
          <IoMdLaptop />
          Data Admin
        </h2>
        <ul className=" text-base text-black px-10">
          <a
            target="_blank"
            href="http://localhost:8000/admin"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <li className="cursor-pointer my-6  flex items-center">
              {' '}
              <IoMdConstruct /> Admin UI
            </li>
          </a>
          <a
            target="_blank"
            href="http://localhost:8000/swagger"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <li className="cursor-pointer my-6  flex items-center">
              {' '}
              <IoMdBook /> API Interactive UI
            </li>
          </a>
          <a
            target="_blank"
            href="http://localhost:8000"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <li className="cursor-pointer my-6  flex items-center">
              {' '}
              <IoMdBookmarks /> API Documentation
            </li>
          </a>
        </ul>
      </div>{' '}
    </IconContext.Provider>
  );
};
export default Sidebar;
