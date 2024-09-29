import ProductCard from '@/components/ProductCard';
import { getSearchedProducts } from '@/lib/actions/actions';

const SearchPage = async ({ params }: { params: { query: string } }) => {
  const searchedProducts = await getSearchedProducts(params.query);

  const decodedQuery = decodeURIComponent(params.query);

  return (
    <div className="px-10 py-5 min-h-[calc(100vh-46px-96px-32px)]">
      <p className="text-heading3-bold my-10">
        Результаты поиска по запросу {decodedQuery}
      </p>
      {!searchedProducts ||
        (searchedProducts.length === 0 && (
          <p className="text-body-bold my-5">Результат не найден</p>
        ))}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:8 xl:gap-16">
        {searchedProducts?.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

export const dynamic = 'force-dynamic';
