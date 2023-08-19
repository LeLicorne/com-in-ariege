import { Link } from 'react-router-dom';
import { Product } from '../models/shop';

function ProductCard(options: { product: Product }) {
  const { product } = options;

  return (
    <Link to={product.name} className="flex flex-col w-full cursor-pointer">
      <div className="bg-secondary p-6 w-full object-cover">
        <img
          src={`src/assets/products/${product.images?.length ? product.images[0].url : 'placeholder.jpg'}`}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between w-full">
        <div className="flex flex-col w-full overflow-hidden">
          <h3 className="whitespace-nowrap text-ellipsis overflow-hidden text-xl font-normal">{product.name}</h3>
          <p className="whitespace-nowrap text-ellipsis overflow-hidden text-sm opacity-60 font-normal">
            {product.description}
          </p>
        </div>
        <p className="flex w-fit text-xl sm:text-2xl font-semibold">{product.price}€</p>
      </div>
    </Link>
  );
}

export default ProductCard;
