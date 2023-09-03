import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Categories from '../components/Categories';
import Filters from '../components/Filters';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Pagination from '../components/Pagination';
import Products from '../components/Products';
import SearchBar from '../components/SearchBar';
import Title from '../components/Title';
import { Category, Subcategory } from '../models/shop';
import { useGetProductsQuery } from '../redux/api';
import ScrollToAnchor from '../utils/scrollToAnchor';

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCat, setSelectedCat] = useState<Category | undefined>(undefined);
  const [selectedSubCat, setSelectedSubCat] = useState<Subcategory | undefined>(undefined);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [availability, setAvailability] = useState<'unsort' | 'available' | 'unavailable'>('unsort');

  const page = searchParams.get('page') || '1';
  const [search, setSearch] = useState(searchParams.get('search') || undefined);

  const { data, isLoading } = useGetProductsQuery({
    text: search,
    categoryId: selectedCat?.id,
    subcategoryId: selectedSubCat?.id,
    page,
  });

  if (data?.count) {
    const nbPage = data.count % 25 === 0 ? data.count / 25 : Math.floor(data.count / 25) + 1;
    if (nbPage < parseInt(page, 10)) {
      window.location.href = '?page=1';
    }
  }

  const handleChangePage = (next: boolean) => {
    const pageNum = parseInt(page, 10);
    setSearchParams(`page=${(pageNum + (next ? 1 : -1)).toString()}`);
    document.getElementById('productContainer')?.scrollIntoView();
  };

  useEffect(() => {
    if (selectedCat) setSearch(undefined);
  }, [selectedCat]);

  return (
    <div className="flex flex-col w-full h-auto">
      <ScrollToAnchor />
      <NavBar />
      <div className="flex flex-col gap-20 lg:gap-32 px-[7%]">
        <Title
          title="Catalogue"
          desc="Dans le cadre de valeurs environnementales et sociales fortes, nous offrons une gamme complète et sur-mesure, des services innovants et un véritable sens du service client. Com In Ariège c’est une solution de distribution à forte valeur ajoutée pour votre structure, portée par une équipe de passionnés de montagne qui s’engage à 100% pour offrir un service de qualité à ses clients."
        />
        <SearchBar />
      </div>
      <Categories selectedCat={selectedCat} setSelectedCat={setSelectedCat} setSelectedSubCat={setSelectedSubCat} />
      <div id="produits" className="flex flex-col gap-8 px-[7%] pt-8">
        <h2 className="text-black text-4xl font-semibold">
          {search ? `Résultats pour : ${search}` : selectedCat ? selectedCat.name : 'Tous'}
        </h2>
        <Filters
          subCat={selectedSubCat}
          subCats={selectedCat?.subcategories}
          setSubcategory={setSelectedSubCat}
          setAvailability={setAvailability}
        />
        <Products products={data?.products} isLoading={isLoading} />
        <Pagination page={page} handleChangePage={handleChangePage} nbProducts={data?.count} />
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
