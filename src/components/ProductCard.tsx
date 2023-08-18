import { Link } from 'react-router-dom';

function ProductCard(options: { name: string; img: string; fixation: string; price: string }) {
  const { name, img, fixation, price } = options;

  return (
    <Link to={name} className=" flex flex-col w-80 h-[370px] cursor-pointer">
      <div className="bg-secondary p-6 w-80 object-cover">
        <img src={`src/assets/${img}`} alt={name} />
      </div>
      <div className="flex flex-row justify-between h-[50px] w-full">
        <div className=" flex flex-col h-[50px] w-full relative justify-between overflow-hidden">
          <h3 className="h-full whitespace-nowrap text-ellipsis w-full overflow-hidden text-xl font-normal">{name}</h3>
          <p className="h-full whitespace-nowrap text-ellipsis w-full overflow-hidden text-sm opacity-60 font-normal">
            {fixation}
          </p>
        </div>
        <div className="flex">
          <p className=" flex w-fit text-2xl font-semibold">{price}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
