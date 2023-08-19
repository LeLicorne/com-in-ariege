import ContentLoader from 'react-content-loader';
import { Product } from '../models/shop';
import ProductCard from './ProductCard';

export default function Products(options: { products: Product[] | undefined; isLoading: boolean }) {
  const { products, isLoading } = options;
  const placeholders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (isLoading)
    return (
      <div className="grid grid-cols-2 min-[530px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {placeholders.map((id) => {
          return (
            <ContentLoader
              key={id}
              speed={2}
              backgroundColor="#f3f3f3"
              foregroundColor="#EAEDED"
              className="w-full h-[200px] xl:h-[300px]"
            >
              <rect className="w-full h-[200px] xl:h-[300px]" />
            </ContentLoader>
          );
        })}
      </div>
    );

  if (!products) return <div>Aucun produit</div>;

  return (
    <div className="grid grid-cols-2 min-[530px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
