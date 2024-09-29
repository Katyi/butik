'use client';

import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

export const columns: ColumnDef<OrderItemType>[] = [
  {
    accessorKey: 'product',
    header: 'Товар',
    cell: ({ row }) => {
      return (
        <Link
          href={`/products/${row.original.product._id}`}
          className="hover:text-blue-1"
        >
          {row.original.product.title}
        </Link>
      );
    },
  },
  {
    accessorKey: 'color',
    header: 'Цвет',
  },
  {
    accessorKey: 'size',
    header: 'Размер',
  },
  {
    accessorKey: 'quantity',
    header: 'Количество',
  },
];
