import { Subcategory } from '../models/shop';
import Filter from './Filter';

export default function Filters(options: {
  subCat: Subcategory | undefined;
  subCats: Subcategory[] | undefined;
  setSubcategory: React.Dispatch<React.SetStateAction<Subcategory | undefined>>;
  setAvailability: React.Dispatch<React.SetStateAction<'unsort' | 'available' | 'unavailable'>>;
}) {
  const { subCat, subCats, setSubcategory, setAvailability } = options;

  const availableOptions = [
    { name: 'Tous', f: () => setAvailability('unsort') },
    { name: 'Disponible', f: () => setAvailability('available') },
    { name: 'Indisponible', f: () => setAvailability('unavailable') },
  ];

  const subcategoriesOptions = [];
  if (subCats) {
    for (let i = 0; i < subCats.length; i += 1) {
      subcategoriesOptions.push({
        name: subCats[i].name,
        f: () => setSubcategory(subCats[i]),
      });
    }
  }

  return (
    <div className="flex flex-col sm:flex-row w-full gap-6 sm:justify-between">
      <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-6">
        <Filter name="Sous-catégorie" options={subcategoriesOptions} subCat={subCat} />
        <Filter name="Disponibilité" options={availableOptions} subCat={null} />
      </div>
      <Filter name="Trier par" options={[]} subCat={null} />
    </div>
  );
}
