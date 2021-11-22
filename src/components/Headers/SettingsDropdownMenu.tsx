import { Fragment } from "react";

import Link from "next/link";

import { Menu, Transition } from "@headlessui/react";
import { LogoutIcon, UserIcon } from "@heroicons/react/outline";

const SettingsDropdownMenu = () => {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 rounded-md ">
            <span className="flex flex-col ml-2 h-full">
              <span className="truncate w-30 text-black font-semibold tracking-wide leading-none">
                Hello!.. Bupe Mulenga
              </span>
            </span>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Link href="/userprofile/">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-blue-500" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      <UserIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                      Profile
                    </button>
                  )}
                </Menu.Item>
              </Link>
            </div>

            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-blue-500" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <LogoutIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default SettingsDropdownMenu;
