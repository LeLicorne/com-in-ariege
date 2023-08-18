import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ProductImages from '../components/ProductImages';
import Title from '../components/Title';

function Product() {
  const imgs = [
    { img: 'panneau.png', name: 'panneau' },
    { img: 'panneau.png', name: 'panneau' },
    { img: 'panneau.png', name: 'panneau' },
    { img: 'panneau.png', name: 'panneau' },
    { img: 'panneau.png', name: 'panneau' },
  ];

  return (
    <div className="flex flex-col w-full h-auto">
      <NavBar />
      <div className="flex flex-col gap-20 lg:gap-32 px-[7%]">
        <Title
          title="Catalogue"
          desc="Dans le cadre de valeurs environnementales et sociales fortes, nous offrons une gamme complète et sur-mesure, des services innovants et un véritable sens du service client. Com In Ariège c’est une solution de distribution à forte valeur ajoutée pour votre structure, portée par une équipe de passionnés de montagne qui s’engage à 100% pour offrir un service de qualité à ses clients."
        />
        <div className="flex flex-row gap-[50px] h-[1000px] w-full">
          <ProductImages imgs={imgs} />
          <div className="full bg-red-200 h-full w-full">Fiche du prod</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
