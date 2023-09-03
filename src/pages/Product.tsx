import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Title from '../components/Title';
import ProductImages from '../components/product/ProductImages';
import ProductInfo from '../components/product/ProductInfo';
import ProductTechs from '../components/product/ProductTechs';
import { useGetProductByIdQuery } from '../redux/api';

export default function Product() {
  const { productId } = useParams<{ productId: string }>();
  const { data: product, isLoading } = useGetProductByIdQuery({ productId });

  if (isLoading || !product) return <div>Loading...</div>;

  return (
    <div className="flex flex-col w-full">
      <NavBar />
      <div className="flex flex-col gap-20 lg:gap-32 px-[7%]">
        <Title
          title="Catalogue"
          desc="Dans le cadre de valeurs environnementales et sociales fortes, nous offrons une gamme complète et sur-mesure, des services innovants et un véritable sens du service client. Com In Ariège c’est une solution de distribution à forte valeur ajoutée pour votre structure, portée par une équipe de passionnés de montagne qui s’engage à 100% pour offrir un service de qualité à ses clients."
        />
        <div className="flex flex-col md:flex-row gap-12 w-full">
          <ProductImages img={product?.images} />
          <ProductInfo product={product} />
        </div>
        <div className="flex flex-col gap-10">
          <h3 className="font-semibold text-4xl">Fiche technique</h3>
          <ProductTechs product={product} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
