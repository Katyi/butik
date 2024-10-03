'use client';

import { useEffect, useState } from 'react';

import { DataTable } from '@/components/custom ui/DataTable';
import Loader from '@/components/custom ui/Loader';
import { columns } from '@/components/orders/OrderColumns';
import { Separator } from '@/components/ui/separator';

const Orders = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      await fetch(`/api/orders`)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          setOrders(data);
          setLoading(false);
        });
    } catch (err) {
      console.log('[orders_GET', err);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="px-10 py-5">
      <p className="text-heading2-bold">Заказы</p>
      <Separator className="bg-grey-1 my-5" />
      <DataTable columns={columns} data={orders} searchKey="_id" />
    </div>
  );
};

export const dynamic = 'force-dynamic';

export default Orders;
