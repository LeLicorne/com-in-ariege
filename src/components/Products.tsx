import { Product } from '../models/shop';
import ProductCard from './ProductCard';

export default function Products(options: { products: Product[] | undefined }) {
  const { products } = options;

  if (!products) return null;

  return (
    <div className="grid w-full">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
