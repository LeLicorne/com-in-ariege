import ContentLoader from 'react-content-loader';
import { Product } from '../models/shop';
import ProductCard from './ProductCard';
import { useGetProductsQuery } from '../redux/api';

export default function Products(options: { products: Product[] | undefined }) {
  const hardPage = '1';
  const { products } = options;
  const { data: allProducts, isLoading } = useGetProductsQuery({
    page: parseInt(hardPage, 10),
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 min-[530px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <ContentLoader
          speed={2}
          width={100}
          height={100}
          viewBox="0 0 932 350"
          backgroundColor="#f3f3f3"
          foregroundColor="#EAEDED"
        >
          <rect x="0" y="0" rx="24" ry="24" width="100%" height="100%" />
          <rect x="277" y="0" rx="24" ry="24" width="100%" height="100%" />
          <rect x="554" y="0" rx="24" ry="24" width="100%" height="100%" />
        </ContentLoader>
      </div>
    );
  }

  if (!products)
    return (
      <div className="grid grid-cols-2 min-[530px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {allProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    );

  return (
    <div className="grid grid-cols-2 min-[530px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
