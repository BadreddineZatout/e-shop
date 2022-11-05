import Link from 'next/link';
import * as React from 'react';
import { ImCart } from 'react-icons/im';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/lib/hooks';

import UnstyledLink from '@/components/links/UnstyledLink';

import { toggleLoginModal, toggleRegisterModal } from '@/features/modals';

export default function Header() {
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const dispatch = useDispatch();
  return (
    <header className='sticky top-0 z-50 bg-dark py-1'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink
          href='/'
          className='flex items-center gap-x-5 text-2xl font-bold text-white hover:text-light'
        >
          <ImCart className='h-10 w-10' />
          e-shop
        </UnstyledLink>
        {isLogged ? (
          <nav>
            <ul className='flex items-center justify-between space-x-4'>
              <li>
                <Link href='/'>
                  <a className='text-white hover:text-light'>Home</a>
                </Link>
              </li>
            </ul>
          </nav>
        ) : (
          <nav>
            <ul className='flex items-center justify-between space-x-4'>
              <li>
                <button
                  className='text-white hover:text-light'
                  onClick={() => dispatch(toggleRegisterModal())}
                >
                  Register
                </button>
              </li>
              <li>
                <button
                  className='text-white hover:text-light'
                  onClick={() => dispatch(toggleLoginModal())}
                >
                  Login
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
