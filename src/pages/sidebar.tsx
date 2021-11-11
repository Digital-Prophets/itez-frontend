import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

// import { Meta } from "../layout/Meta";
// import { Main } from "../templates/Main";

// import styles from "../styles/sidebar.module";
// import "../../public/un";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 m-0 inline-flex flex-col bg-primary text-black shadow-lg ">
      <i className="-ml-16 ">
        {' '}
        <Image
          className=" z-10 "
          src="/undp-logo.svg"
          width={300}
          height={100}
        />
      </i>
      <ul className="px-16 pt-4 text-base text-black">
        <Link href="dashboard">
          <li className="cursor-pointer my-6 hover:bg-opacity-25 ">
            Dashboard{' '}
          </li>
        </Link>

        <Link href="/beneficiary/">
          <li className="cursor-pointer my-6">Beneficiary</li>
        </Link>

        <Link href="/location/">
          <li className="cursor-pointer my-6 "> Location </li>
        </Link>

        <li className="cursor-pointer my-6 ">Occupation </li>
        <li className="cursor-pointer my-6 ">Agents</li>
      </ul>
      <h2 className="mx-5 font-bold">System</h2>
      <ul className=" text-base text-black px-16">
        <li className="cursor-pointer my-6 ">Settings </li>
        <li className="cursor-pointer my-6">Users</li>
      </ul>
    </div>
  );
};
export default Sidebar;
