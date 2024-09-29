'use client';

import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

export const columns: ColumnDef<OrderColumnType>[] = [
  {
    accessorKey: '_id',
    header: 'ID заказа',
    cell: ({ row }) => {
      return (
        <Link
          href={`/orders/${row.original._id}`}
          className="hover:text-blue-1"
        >
          {row.original._id}
        </Link>
      );
    },
  },
  {
    accessorKey: 'customer',
    header: 'Покупатель',
  },
  {
    accessorKey: 'products',
    header: 'Товары',
  },
  {
    accessorKey: 'totalAmount',
    header: 'Итого (₽)',
  },
  {
    accessorKey: 'createdAt',
    header: 'Дата заказа',
  },
];
