import { LockClosedIcon } from '@heroicons/react/outline';
import Image from 'next/image';

import mainLogo from '../../assets/undp-logo.png';

export default function Registration() {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ml-2 justify-center">
        <div className="mb-6">
          <div className="flex justify-center">
            <Image className="object-contain" src={mainLogo} />
          </div>

          <h6 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Register Account
          </h6>
        </div>

        <div className="grid gap-4 grid-cols-2">
          <div className="mt-5 mb-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fristname"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="mt-5 mb-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstname"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
              id="lastname"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="grid gap-4 grid-cols-2">
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border   w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
        </div>
        <div>
          <div className="grid grid-rows-1 grid-flow-row mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              User Role
            </label>
            <input
              className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white"
              id="role"
              type="text"
              placeholder="User Role"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
