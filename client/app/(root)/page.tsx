import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

import Collections from '@/components/Collections';
import ProductList from '@/components/ProductList';
import { getUsers } from '@/lib/actions/actions';
import Banner from '@/components/Banner';

export default async function Home() {
  const { userId } = auth();

  if (!userId) {
    return redirect('/sign-in');
  }

  const user = await getUsers(userId);

  return (
    <div>
      <Banner />
      <Collections />
      <ProductList />
    </div>
  );
}

export const dynamic = 'force-dynamic';
