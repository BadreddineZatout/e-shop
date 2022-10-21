import Link from 'next/link';
import React from 'react';

import { ADMIN_URLS } from '@/constants';

function Sidebar() {
  return (
    <div className='bg-dark px-5 py-8 text-light'>
      {ADMIN_URLS &&
        ADMIN_URLS.map((item) => (
          <div key={item.group}>
            <h3 className='mb-5'>{item.group}</h3>
            <ul className='pl-5'>
              {item.subUrls &&
                item.subUrls.map((url) => (
                  <li key={url.name}>
                    <Link href={url.url}>
                      <a className='flex items-center gap-x-2 hover:font-semibold'>
                        {url.icon}
                        <p>{url.name}</p>
                      </a>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default Sidebar;
