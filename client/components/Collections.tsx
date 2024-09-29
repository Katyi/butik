import Image from 'next/image';
import Link from 'next/link';

import { getCollections } from '@/lib/actions/actions';

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Коллекции</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">Коллекций не найдено</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection: CollectionType) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
              <Image
                key={collection._id}
                src={collection.image}
                alt={collection.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ height: 'auto', width: 350 }}
                className="rounded-lg cursor-pointer shadow-md"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
