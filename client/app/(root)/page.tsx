import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import Collections from '@/components/Collections';
import ProductList from '@/components/ProductList';
import { getUsers } from '@/lib/actions/actions';

export default async function Home() {
  const { userId } = auth();

  if (!userId) {
    return redirect('/sign-in');
  }

  const user = await getUsers(userId);

  return (
    <div>
      <Image
        src="/banner.png"
        alt="banner"
        width={2000}
        height={1000}
        className="w-screen"
        priority={true}
      />
      <Collections />
      <ProductList />
    </div>
  );
}

export const dynamic = 'force-dynamic';
