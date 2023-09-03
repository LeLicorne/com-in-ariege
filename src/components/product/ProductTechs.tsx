import { Product } from '../../models/shop';
import { getPrice } from '../../utils/shop';

const Tech = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="odd:bg-white flex text-base sm:text-xl p-2">
      <div className="w-full font-medium">{name}</div>
      <div className="w-full">{value}</div>
    </div>
  );
};

export default function ProductTechs(options: { product: Product }) {
  const { product } = options;

  return (
    <div id="techs" className="flex flex-col md:flex-row w-full gap-6 md:gap-12">
      <div className=" bg-secondary p-4 sm:p-6 flex flex-col gap-6 w-full md:w-1/2">
        <h4 className="text-2xl sm:text-3xl font-semibold">Général</h4>
        <div>
          <Tech name="Catégorie" value={!product.category ? 'Aucune' : product.category.name} />
          <Tech name="Produit" value={product.name} />
          <Tech name="Référence" value={product.reference} />
          <Tech name="Prix" value={`${getPrice(product.price)} HT`} />
          <Tech name="Démarche écologique" value={product.ecologic ? 'Oui' : 'Non'} />
          <Tech name="Garantie" value={product.warranty || 'Non'} />
        </div>
      </div>
    </div>
  );
}
