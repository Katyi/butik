'use client';

import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/lib/constants';

const LeftSideBar = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen left-0 top-0 sticky p-10 flex flex-col gap-16 bg-sky-100 shadow-xl max-lg:hidden">
      <Image
        src="/logo.png"
        alt="logo"
        width={0}
        height={0}
        sizes="100vw"
        priority={true}
        style={{ height: 'auto', width: 150 }}
      />

      <div className="flex flex-col gap-12">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex items-center gap-4 text-body-medium ${
              pathname === link.url ? 'text-blue-1' : 'text-grey-1'
            }`}
          >
            {link.icon} <p>{link.label}</p>
          </Link>
        ))}
      </div>

      <div className="flex gap-4 text-body-medium items-center">
        <UserButton />
        <p>Профиль</p>
      </div>
    </div>
  );
};

export default LeftSideBar;
