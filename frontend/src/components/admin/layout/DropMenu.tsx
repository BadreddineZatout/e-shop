import { Menu, Transition } from '@headlessui/react';
import {
  BookOpenIcon,
  ChevronDownIcon,
  CogIcon,
  UserIcon,
} from '@heroicons/react/20/solid';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { RiLogoutBoxLine } from 'react-icons/ri';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';

import { AXIOS_CONFIG } from '@/constants';
import { API_URL } from '@/constants/env';
import { logout } from '@/features/user';

export default function DropMenu() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user_id = useAppSelector((state) => state.user.user.id);
  const handleLogout = async () => {
    try {
      await axios.post(API_URL + 'api/logout', { id: user_id }, AXIOS_CONFIG);
      dispatch(logout());
      router.push('/');
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      return message;
    }
  };
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex w-full justify-center rounded-md bg-inherit bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
          <UserIcon className='h-6 w-6 text-light' />
          <ChevronDownIcon
            className='ml-2 -mr-1 h-5 w-5 text-light hover:text-secondary'
            aria-hidden='true'
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='px-1 py-1 '>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-secondary text-white' : 'text-primary'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <CogIcon className='mr-2 h-5 w-5' aria-hidden='true' />
                  Settings
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-secondary text-white' : 'text-primary'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <BookOpenIcon className='mr-2 h-5 w-5' aria-hidden='true' />
                  Activity Log
                </button>
              )}
            </Menu.Item>
          </div>
          <div className='px-1 py-1'>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleLogout}
                  className={`${
                    active ? 'bg-secondary text-white' : 'text-primary'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <RiLogoutBoxLine
                      className='mr-2 h-5 w-5'
                      aria-hidden='true'
                    />
                  ) : (
                    <RiLogoutBoxLine
                      className='mr-2 h-5 w-5'
                      aria-hidden='true'
                    />
                  )}
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
