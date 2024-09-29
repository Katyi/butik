import { auth } from '@clerk/nextjs/server';
import { RussianRuble, ShoppingBag, UserRound } from 'lucide-react';
import { redirect } from 'next/navigation';

import SalesChart from '@/components/custom ui/SalesChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  getSalesPerMonth,
  getTotalCustomers,
  getTotalSales,
} from '@/lib/actions/actions';
import { formatPrice } from '@/lib/formatPrice';

export default async function Home() {
  const { userId } = auth();

  if (!userId) {
    return redirect('/sign-in');
  }

  const totalRevenue = await getTotalSales().then((data) => data.totalRevenue);
  const totalOrders = await getTotalSales().then((data) => data.totalOrders);
  const totalCustomers = await getTotalCustomers();

  const graphData = await getSalesPerMonth();

  return (
    <div className="px-8 py-10">
      <p className="text-heading2-bold">Рабочая панель</p>
      <Separator className="bg-grey-1 my-5" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Общая выручка</CardTitle>
            <RussianRuble className="max-sm:hidden" />
          </CardHeader>
          <CardContent>
            <p className="text-body-bold">{formatPrice(totalRevenue)}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Всего заказов</CardTitle>
            <ShoppingBag className="max-sm:hidden" />
          </CardHeader>
          <CardContent>
            <p className="text-body-bold">{totalOrders}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Всего Покупателей</CardTitle>
            <UserRound className="max-sm:hidden" />
          </CardHeader>
          <CardContent>
            <p className="text-body-bold">{totalCustomers}</p>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-10">
        <CardHeader>
          <CardTitle>График продаж (₽)</CardTitle>
        </CardHeader>
        <CardContent>
          <SalesChart data={graphData} />
        </CardContent>
      </Card>
    </div>
  );
}
