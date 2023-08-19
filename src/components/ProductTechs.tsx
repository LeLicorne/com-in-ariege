import { Product } from '../models/shop';

const Tech = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="odd:bg-white flex text-xl p-2">
      <div className="w-full">{name}</div>
      <div className="w-full">{value}</div>
    </div>
  );
};

export default function ProductTechs(options: { product: Product }) {
  const { product } = options;

  return (
    <div className="flex flex-col md:flex-row w-full md:gap-[2%] gap-6">
      <div className=" bg-secondary p-6 flex flex-col gap-6 w-full md:w-[49%]">
        <h4 className="text-3xl font-semibold">Général</h4>
        <div>
          <Tech name="Catégorie" value={!product.category ? 'Aucune' : product.category.name} />
          <Tech name="Produit" value={product.name} />
          <Tech name="Prix" value={`${product.price} HT`} />
          <Tech name="Démarche écologique" value="Oui" />
          <Tech name="Garantie" value="1 an" />
        </div>
      </div>
    </div>
  );
}
