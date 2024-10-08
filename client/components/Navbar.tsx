'use client';

import { useState } from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import { CircleUserRound, Menu, Search, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import useCart from '@/lib/hooks/useCart';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <div className="sticky top-0 z-50 h-16 py-2 px-10 flex gap-2 justify-between items-center bg-white max-sm:px-2 shadow-lg">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ height: 'auto', width: 130 }}
        />
      </Link>

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

      <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
        <input
          className="outline-none max-sm:max-w-[120px]"
          placeholder="Поиск..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.currentTarget.value !== '')
              router.push(`/search/${query}`);
          }}
        />
        <button
          disabled={query === ''}
          onClick={() => router.push(`/search/${query}`)}
        >
          <Search className="cursor-pointer h-4 w-4 hover:text-blue-1" />
        </button>
      </div>

      <div className="relative flex gap-3 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-lg:hidden"
        >
          <ShoppingCart />
          <p className="text-base-bold">Корзина ({cart.cartItems.length})</p>
        </Link>

        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="w-[180px] absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
            <Link
              href="/"
              className="hover:text-blue-1"
              onClick={() => setDropdownMenu(!dropdownMenu)}
            >
              Главная
            </Link>
            <Link
              href={user ? '/wishlist' : '/sign-in'}
              className="hover:text-blue-1"
              onClick={() => setDropdownMenu(!dropdownMenu)}
            >
              Избранное
            </Link>
            <Link
              href={user ? '/orders' : '/sign-in'}
              className="hover:text-blue-1"
              onClick={() => setDropdownMenu(!dropdownMenu)}
            >
              Заказы
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
              onClick={() => setDropdownMenu(!dropdownMenu)}
            >
              <ShoppingCart />
              <p className="text-base-bold">
                Корзина ({cart.cartItems.length})
              </p>
            </Link>
          </div>
        )}

        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href={'/sign-in'}>
            <CircleUserRound />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
