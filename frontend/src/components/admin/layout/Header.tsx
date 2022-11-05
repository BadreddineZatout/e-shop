import * as React from 'react';
import { ImCart } from 'react-icons/im';

import DropMenu from '@/components/admin/layout/DropMenu';
import UnstyledLink from '@/components/links/UnstyledLink';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-dark py-1 text-light'>
      <div className='flex h-14 items-center justify-between px-5'>
        <UnstyledLink
          href='/admin'
          className='flex items-center gap-x-5 text-xl font-bold hover:text-secondary'
        >
          <ImCart className='h-10 w-10' />
          <h1 className='text-2xl'>e-shop</h1>
        </UnstyledLink>
        <nav className='flex items-center gap-x-5'>
          <input className='rounded-lg' type='text' placeholder='search here' />
          <DropMenu />
        </nav>
      </div>
    </header>
  );
}
