'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

import { getProductDetails } from '@/lib/actions/actions';
import Loader from '@/components/Loader';
import ProductCard from '@/components/ProductCard';

const Wishlist = () => {
  const { user } = useUser();

  const [loading, setLoading] = useState(true);
  const [signedInUser, setSignedInUser] = useState<UserType | null>(null);
  const [wishlist, setWishlist] = useState<ProductType[]>([]);

  const getUser = async () => {
    try {
      const res = await fetch(`/api/users/${user?.id}`);
      const data = await res.json();
      setSignedInUser(data);
      setLoading(false);
    } catch (err) {
      console.log('[users_GET', err);
    }
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  const getWishlistProducts = async () => {
    setLoading(true);

    if (!signedInUser) return;

    const wishlistProducts = await Promise.all(
      signedInUser.wishlist.map(async (productId) => {
        const res = await getProductDetails(productId);
        return res;
      })
    );

    setWishlist(wishlistProducts);
    setLoading(false);
  };

  useEffect(() => {
    if (signedInUser) {
      getWishlistProducts();
    }
  }, [signedInUser]);

  const updateSignedInUser = (updatedUser: UserType) => {
    setSignedInUser(updatedUser);
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="px-10 py-5 min-h-[calc(100vh-46px-96px-32px)]">
      <p className="text-heading3-bold my-10">Избранное</p>
      {wishlist.length === 0 && <p>В вашем списке нет товаров</p>}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:8 xl:gap-16">
          {wishlist.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              updateSignedInUser={updateSignedInUser}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

export const dynamic = 'force-dynamic';
