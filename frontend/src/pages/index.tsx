import * as React from 'react';

import Login from '@/components/auth/Login';
import Register from '@/components/auth/Register';
import Layout from '@/components/layout/Layout';

export default function HomePage() {
  return (
    <Layout>
      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <Login />
            <Register />
            <footer className='absolute bottom-2 text-gray-700'></footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
