'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import useCart from '@/lib/hooks/useCart';

const SuccessfulPayment = () => {
  const cart = useCart();

  useEffect(() => {
    cart.clearCart();
  }, []);

  return (
    <div className="min-h-[calc(100vh-46px-96px-32px)] flex flex-col justify-center items-center gap-5">
      <p className="text-heading4-bold text-red-1">Оплата прошла успешно! </p>
      <p className="text-blue-1">Спасибо за покупку!</p>
      <Link
        href="/"
        className="p-4 border text-blue-1 text-body-bold hover:bg-blue-1 hover:text-white"
      >
        ПРОДОЛЖИТЬ ПОКУПКИ
      </Link>
    </div>
  );
};

export default SuccessfulPayment;

export const dynamic = 'force-dynamic';
