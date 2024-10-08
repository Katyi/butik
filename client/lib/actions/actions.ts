// export const getCollections = async () => {
//   const collections = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/collections`
//   );
//   return await collections.json();
// };

export const getCollections = async () => {
  const timestamp = new Date().getTime();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/collections?_=${timestamp}`
  );
  const collections = await response.json();
  return collections;
};

export const getUsers = async (userId: string) => {
  await fetch(`${process.env.ECOMMERCE_STORE_URL}/api/users`, {
    method: 'POST',
    body: JSON.stringify({
      userId: userId,
    }),
  }).then(function (response) {
    return response.json();
  });
};

export const getCollectionDetails = async (collectionId: string) => {
  const timestamp = new Date().getTime();
  const collection = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}?_=${timestamp}`,
    {
      method: 'GET',
    }
  );
  return await collection.json();
};

export const getProducts = async () => {
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  return await products.json();
};

export const getProductDetails = async (productId: string) => {
  const product = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`
  );
  return await product.json();
};

export const getSearchedProducts = async (query: string) => {
  const searchedProducts = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/search/${query}`
  );
  return await searchedProducts.json();
};

export const getOrders = async (customerId: string) => {
  const orders = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`
  );
  return await orders.json();
};

export const getRelatedProducts = async (productId: string) => {
  const relatedProducts = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`
  );
  return await relatedProducts.json();
};
