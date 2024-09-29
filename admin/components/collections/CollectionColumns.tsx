'use client';

import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

import Delete from '../custom ui/Delete';

export const columns: ColumnDef<CollectionType>[] = [
  {
    accessorKey: 'title',
    header: 'Наименование',
    cell: ({ row }) => (
      <Link
        href={`/collections/${row.original._id}`}
        className="hover:text-blue-1"
      >
        {row.original.title}
      </Link>
    ),
  },
  {
    accessorKey: 'products',
    header: 'Товары',
    cell: ({ row }) => <p>{row.original.products.length}</p>,
  },
  {
    id: 'actions',
    cell: ({ row }) => <Delete item="collection" id={row.original._id} />,
  },
];
