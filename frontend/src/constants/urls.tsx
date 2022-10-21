import { HomeIcon } from '@heroicons/react/20/solid';

export const ADMIN_URLS = [
  {
    group: 'Dashboard',
    subUrls: [
      {
        name: 'Dashboard',
        url: '/admin',
        icon: <HomeIcon className='h-6 w-6' />,
      },
    ],
  },
];
