import { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { ChatIcon } from '@heroicons/react/outline';
import { IoMdNotifications } from 'react-icons/io';

const NotificationDropdownMenu = () => {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 rounded-md ">
            <IoMdNotifications
              className="w-6 h-6 ml-1 -mr-1 text-gray-800"
              aria-hidden="true"
            />
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
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-blue-500' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <ChatIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    Hellow Mat, today you...
                  </button>
                )}
              </Menu.Item>
            </div>

            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-blue-500' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <ChatIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    Good morning, you are...
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

export default NotificationDropdownMenu;
