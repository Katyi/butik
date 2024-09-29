'use client';

import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Footer = () => {
  const pathname = usePathname();
  const { user } = useUser();

  return (
    <div
      className="z-10 h-28 bg-grey-1 
    py-2 px-10 flex flex-col md:flex-row justify-center md:justify-between items-center max-sm:px-2"
    >
      <div className="flex items-center gap-2">
        <p className="font-[300] text-small-bold">
          Copyright © A.Egorova {new Date().getFullYear()}
        </p>
        <Link href="https://github.com/Katyi" target="_blank" tabIndex={-1}>
          <Image src="/github.png" alt="githubIcon" width={40} height={40} />
        </Link>
      </div>

      <div className="flex gap-4 text-base-bold max-lg:hidden">
        <Link
          href="/"
          className={`hover:text-blue-1 ${pathname === '/' && 'text-blue-1'}`}
        >
          Главная
        </Link>
        <Link
          href={user ? '/wishlist' : '/sign-in'}
          className={`hover:text-blue-1 ${
            pathname === '/wishlist' && 'text-blue-1'
          }`}
        >
          Избранное
        </Link>
        <Link
          href={user ? '/orders' : '/sign-in'}
          className={`hover:text-blue-1 ${
            pathname === '/orders' && 'text-blue-1'
          }`}
        >
          Заказы
        </Link>
      </div>

      <p className="font-[300] text-small-bold">alex.frontender@gmail.com</p>
    </div>
  );
};

export default Footer;
