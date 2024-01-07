import { Link } from 'react-router-dom';
import { Product } from '../../models/shop';
import { getPrice } from '../../utils/shop';

function ProductCard(options: { product: Product }) {
  const { product } = options;
  return (
    <Link to={`produit/${product.id}`} className="flex flex-col w-full cursor-pointer gap-1 md:gap-2">
      <div className="bg-secondary p-2 w-full aspect-square">
        <img
          className="w-full h-full object-cover"
          src={product.images?.length ? product.images[0].url : '/assets/placeholder.jpg'}
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
        {false && <p className="flex w-fit text-xl sm:text-2xl font-semibold">{getPrice(product.price)}€</p>}
      </div>
    </Link>
  );
}

export default ProductCard;
