import {
  LayoutDashboard,
  Shapes,
  ShoppingBag,
  Tag,
  UsersRound,
} from 'lucide-react';

export const navLinks = [
  {
    url: '/',
    icon: <LayoutDashboard />,
    label: 'Рабочая панель',
  },
  {
    url: '/collections',
    icon: <Shapes />,
    label: 'Коллекции',
  },
  {
    url: '/products',
    icon: <Tag />,
    label: 'Товары',
  },
  {
    url: '/orders',
    icon: <ShoppingBag />,
    label: 'Заказы',
  },
  {
    url: '/customers',
    icon: <UsersRound />,
    label: 'Покупатели',
  },
];
