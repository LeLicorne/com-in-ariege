import { Link } from 'react-router-dom';
import { Product } from '../models/shop';

function ProductCard(options: { product: Product }) {
  const { product } = options;

  return (
    <Link to={product.name} className=" flex flex-col w-80 h-[370px] cursor-pointer">
      <div className="bg-secondary p-6 w-80 object-cover">
        <img
          src={`src/assets/products/${product.images?.length ? product.images[0].url : 'placeholder.jpg'}`}
          alt={product.name}
        />
      </div>
      <div className="flex flex-row justify-between h-[50px] w-full">
        <div className=" flex flex-col h-[50px] w-full relative justify-between overflow-hidden">
          <h3 className="h-full whitespace-nowrap text-ellipsis w-full overflow-hidden text-xl font-normal">
            {product.name}
          </h3>
          <p className="h-full whitespace-nowrap text-ellipsis w-full overflow-hidden text-sm opacity-60 font-normal">
            {product.description}
          </p>
        </div>
        <div className="flex">
          <p className="flex w-fit text-2xl font-semibold">{product.price}€</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
