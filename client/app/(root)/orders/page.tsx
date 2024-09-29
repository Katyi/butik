import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';

import { getOrders } from '@/lib/actions/actions';

const Orders = async () => {
  const { userId } = auth();
  const orders = await getOrders(userId as string);

  return (
    <div className="px-10 py-5 max-sm:px-3 min-h-[calc(100vh-46px-96px-32px)]">
      <p className="text-heading3-bold my-10">Ваши заказы</p>
      {!orders ||
        (orders.length === 0 && (
          <p className="text-body-bold my-5">У вас пока нет заказов.</p>
        ))}

      <div className="flex flex-col items-center gap-10">
        {orders?.map((order: OrderType) => (
          <div className="flex flex-col items-center w-[100%] lg:w-[80%] gap-8 p-4 hover:bg-grey-1 shadow-md">
            <div className="flex gap-20 max-md:flex-col max-md:gap-3">
              <p className="text-base-bold">Заказ №: {order._id}</p>
              <p className="text-base-bold">Итого: {order.totalAmount} ₽</p>
            </div>

            <div className="flex flex-col gap-5">
              {order.products.map((orderItem: OrderItemType) => (
                <div className="flex gap-4">
                  <Image
                    src={orderItem.product.media[0]}
                    alt={orderItem.product.title}
                    width={100}
                    height={100}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-small-medium">
                      Наименование:{' '}
                      <span className="text-small-bold">
                        {orderItem.product.title}
                      </span>
                    </p>
                    {orderItem.color && (
                      <p className="text-small-medium">
                        Цвет:{' '}
                        <span className="text-small-bold">
                          {orderItem.color}
                        </span>
                      </p>
                    )}
                    {orderItem.size && (
                      <p className="text-small-medium">
                        Размер:{' '}
                        <span className="text-small-bold">
                          {orderItem.size}
                        </span>
                      </p>
                    )}
                    <p className="text-small-medium">
                      Цена за ед.:{' '}
                      <span className="text-small-bold">
                        {orderItem.product.price}
                      </span>
                    </p>
                    <p className="text-small-medium">
                      Количество:{' '}
                      <span className="text-small-bold">
                        {orderItem.quantity}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

export const dynamic = 'force-dynamic';
