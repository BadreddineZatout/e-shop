import * as React from 'react';

import Header from '@/components/admin/layout/Header';
import Sidebar from '@/components/admin/layout/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className='grid h-[41.7rem] grid-cols-5'>
        <Sidebar />
        <div className='col-span-4'>{children}</div>
      </div>
    </>
  );
}
