'use client';

import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<CustomerType>[] = [
  {
    accessorKey: 'clerkId',
    header: 'ID пользователя',
  },
  {
    accessorKey: 'name',
    header: 'Имя',
  },
  {
    accessorKey: 'email',
    header: 'Электронная почта',
  },
];
