import * as React from 'react';
import { ImMenu } from 'react-icons/im';

import DropMenu from '@/components/admin/layout/DropMenu';
import UnstyledLink from '@/components/links/UnstyledLink';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-dark py-2 text-light'>
      <div className='flex h-14 items-center justify-between px-5'>
        <div className='flex items-center gap-x-5 text-xl font-bold'>
          <UnstyledLink href='/' className='hover:text-secondary'>
            <h1 className='text-xl'>e-shop</h1>
          </UnstyledLink>
          <ImMenu className='cursor-pointer hover:text-secondary' />
        </div>
        <nav className='flex items-center gap-x-5'>
          <input className='rounded-lg' type='text' placeholder='search here' />
          <DropMenu />
        </nav>
      </div>
    </header>
  );
}
