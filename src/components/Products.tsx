import { Product } from '../models/shop';
import ProductCard from './ProductCard';

export default function Products(options: { products: Product[] | undefined }) {
  const { products } = options;

  if (!products) return null;

  return (
    <div className="grid grid-cols-2 min-[530px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
