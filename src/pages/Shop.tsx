import { useState } from 'react';
import Categories from '../components/Categories';
import Filters from '../components/Filters';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Products from '../components/Products';
import SearchBar from '../components/SearchBar';
import Title from '../components/Title';
import { Category, Subcategory } from '../models/shop';

function Shop() {
  const [selectedCat, setSelectedCat] = useState<Category | undefined>(undefined);
  const [selectedSubCat, setSelectedSubCat] = useState<Subcategory | undefined>(undefined);
  const [availability, setAvailability] = useState<'unsort' | 'available' | 'unavailable'>('unsort');

  console.log(availability);

  return (
    <div className="flex flex-col w-full h-auto">
      <NavBar />
      <div className="flex flex-col gap-20 lg:gap-32 px-[7%]">
        <Title
          title="Catalogue"
          desc="Dans le cadre de valeurs environnementales et sociales fortes, nous offrons une gamme complète et sur-mesure, des services innovants et un véritable sens du service client. Com In Ariège c’est une solution de distribution à forte valeur ajoutée pour votre structure, portée par une équipe de passionnés de montagne qui s’engage à 100% pour offrir un service de qualité à ses clients."
        />
        <SearchBar />
      </div>
      <Categories selectedCat={selectedCat} setSelectedCat={setSelectedCat} setSelectedSubCat={setSelectedSubCat} />
      <div className="flex flex-col gap-8 px-[7%] mt-8">
        <h2 className="text-black text-4xl font-semibold">{selectedCat ? selectedCat.name : 'Tous'}</h2>
        <Filters
          subCat={selectedSubCat}
          subCats={selectedCat?.subcategories}
          setSubcategory={setSelectedSubCat}
          setAvailability={setAvailability}
        />
        <Products products={selectedCat?.products} />
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
