import { HomeIcon } from '@heroicons/react/20/solid';

export const AXIOS_CONFIG = {
  headers: {
    Accept: 'application/json',
  },
};

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
