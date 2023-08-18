import CategoryCard from '../components/CategoryCard';
import Filter from '../components/Filter';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import Title from '../components/Title';

function Shop() {
  function sortAvailabe() {
    console.log('sortAvailable');
  }
  function sortUnavailable() {
    console.log('sortUnavailable');
  }
  function unsortAvailable() {
    console.log('unsortAvailable');
  }

  const availableOptions = [
    { name: 'Tous', f: unsortAvailable },
    { name: 'Disponible', f: sortAvailabe },
    { name: 'Indisponible', f: sortUnavailable },
  ];

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
      <div className="flex flex-row w-full px-[7%] py-8 gap-8 overflow-x-scroll scrollbar-hide">
        <CategoryCard name="Aménagements" bg="telesiege.jpg" selected={false} />
        <CategoryCard name="Aménagements" bg="telesiege.jpg" selected={false} />
        <CategoryCard name="Aménagements" bg="telesiege.jpg" selected={false} />
      </div>
      <div className="flex flex-col gap-8 px-[7%] mt-8">
        <h2 className="text-black text-4xl font-semibold">Signalétique</h2>
        <div className="flex flex-col sm:flex-row w-full gap-6 sm:justify-between">
          <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-6">
            <Filter name="Sous-catégorie" options={[]} />
            <Filter name="Disponibilité" options={availableOptions} />
          </div>
          <Filter name="Trier par" options={[]} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
