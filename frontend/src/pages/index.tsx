import * as React from 'react';

import Layout from '@/components/layout/Layout';

export default function HomePage() {
  return (
    <Layout>
      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <footer className='absolute bottom-2 text-gray-700'></footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
