import { FaEnvelope, FaLeaf, FaShieldAlt } from 'react-icons/fa';
import { Product } from '../models/shop';
import { getPrice } from '../utils/shop';

const Spec = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="flex w-full text-xl font-normal items-center gap-2">
      <p className="opacity-60">{name}</p>
      <p className="border-2 py-[2px] px-[4px]">{value}</p>
    </div>
  );
};

const EcoFriendly = () => {
  return (
    <p className="flex items-center gap-2">
      <span className="text-primary">
        <FaLeaf />
      </span>
      Produit issu du développement durable
    </p>
  );
};

const Warranty = ({ value }: { value: string }) => {
  return (
    <p className="flex items-center gap-2">
      <span className="text-primary">
        <FaShieldAlt />
      </span>
      Garantie
      <span className="opacity-60 underline underline-offset-[3px]">Com In Ariège</span>
      {' : '}
      <span className="font-semibold">{value}</span>
    </p>
  );
};

const Unavailable = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="flex font-semibold text-black/70 text-lg items-center gap-4 lg:whitespace-nowrap">
        <span className="text-primary/100">
          <FaEnvelope />
        </span>
        On vous préviens lorsque ce produit est disponible ?
      </p>
      <form action="" className="bg-secondary flex text-base gap-2 w-full sm:w-4/5 md:w-full lg:w-4/5 p-2">
        <input
          type="text"
          name=""
          id=""
          className="bg-transparent focus:outline-none pl-2 w-full"
          placeholder="votreadresse@mail.fr"
        />
        <button type="submit" className="bg-primary p-2 px-4 whitespace-nowrap font-semibold">
          Prévenez-moi !
        </button>
      </form>
    </div>
  );
};

const Price = ({ price, stock }: { price: number; stock: number }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="flex flex-row text-xl gap-1">
        <span className="text-4xl font-semibold">{getPrice(price)}€</span>
        <span className="flex items-start opacity-60">HT</span>
        <span className="flex items-end opacity-60 ml-1">({stock} en stock)</span>
      </p>
      {stock === 0 && <Unavailable />}
    </div>
  );
};

export default function ProductInfo(options: { product: Product }) {
  const { product } = options;

  return (
    <div className="w-full flex flex-col justify-between">
      <div>
        <h3 className="text-4xl font-semibold">{product.name}</h3>
        <p className="opacity-70 text-xl font-medium">{product.description}</p>
        <div className="flex flex-col gap-2 mt-6 mb-20">
          <Spec name="Référence" value="À faire" />
          <Spec name="Référence" value="À faire" />
          <Spec name="Référence" value="À faire" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col text-base">
          <EcoFriendly />
          <Warranty value="1 an" />
          <p className="self-end py-[2px] px-[4px] border-2 mt-4">Fiche technique</p>
        </div>
        <Price price={product.price} stock={product.stock} />
      </div>
    </div>
  );
}
