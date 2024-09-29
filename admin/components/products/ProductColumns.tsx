'use client';

import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

import Delete from '../custom ui/Delete';

export const columns: ColumnDef<ProductType>[] = [
  {
    accessorKey: 'title',
    header: 'Наименование',
    cell: ({ row }) => (
      <Link
        href={`/products/${row.original._id}`}
        className="hover:text-blue-1"
      >
        {row.original.title}
      </Link>
    ),
  },
  {
    accessorKey: 'category',
    header: 'Категория',
  },
  {
    accessorKey: 'collections',
    header: 'Коллекции',
    cell: ({ row }) =>
      row.original.collections.map((collection) => collection.title).join(', '),
  },
  {
    accessorKey: 'price',
    header: 'Цена (₽)',
  },
  {
    accessorKey: 'expense',
    header: 'Расходы (₽)',
  },
  {
    id: 'actions',
    cell: ({ row }) => <Delete item="product" id={row.original._id} />,
  },
];
