import { FaLeaf, FaShieldAlt, FaEnvelope } from 'react-icons/fa';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ProductImages from '../components/ProductImages';
import Title from '../components/Title';
import ProductAttributesSheat from '../components/ProductAttributesSheat';

function Product() {
  const imgs = [
    { img: 'panneau.png', name: 'panneau' },
    { img: 'panneau.png', name: 'panneau' },
    { img: 'panneau.png', name: 'panneau' },
    { img: 'panneau.png', name: 'panneau' },
    { img: 'panneau.png', name: 'panneau' },
  ];

  const productAttr = (name: string, attr: string) => {
    return (
      <div className="w-full h-fit flex text-2xl font-normal leading-normal items-center gap-2">
        <p className=" opacity-60">{name}</p>
        <p className=" border-2 py-[2px] px-[4px]">{attr}</p>
      </div>
    );
  };

  const productAttributes = [
    {
      title: 'Général',
      attrib: [
        { attribTitle: 'Catégorie', attr: 'Signalétique' },
        { attribTitle: 'Produit', attr: "Panneau d'information" },
        { attribTitle: 'Prix', attr: '19,99 HT' },
        { attribTitle: 'Référence', attr: 'ALOU123' },
        { attribTitle: 'Variation', attr: 'Picotie' },
        { attribTitle: 'Matière', attr: 'Alluminium' },
        { attribTitle: 'Garentie', attr: '1 an' },
      ],
    },
    {
      title: 'Détails du produit',
      attrib: [
        { attribTitle: 'Visuel', attr: 'Picto' },
        { attribTitle: 'Matière', attr: "Panneau d'information" },
        { attribTitle: 'Diamètre', attr: '460mm' },
      ],
    },
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
          <div className=" h-full w-full flex flex-col ">
            <div>
              <h3 className=" text-5xl font-semibold leading-[64px]">Panneau information</h3>
              <p className=" opacity-70 text-xl font-medium leading-normal">
                Panneau d&lsquo;information avec rails pour colliers de fixation, Conçu en aluminium elle est plus
                résistante et esthétique et s&lsquo;adapte à tous les diamètre de piquets supports.
              </p>
            </div>
            <div className=" flex flex-col justify-between h-full py-[30px]">
              <div className=" flex flex-col gap-6">
                {productAttr('Référence', 'ALOU123')}
                {productAttr('Diamètre', '460mm')}
                {productAttr('Matière', 'Aluminium')}
              </div>
              <div className="flex text-2xl font-normal leading-normal gap-2 items-center">
                <p className=" opacity-60">Variations</p>
                <select name="variations" id="variationSelect" className=" py-[2px] px-[4px] bg-transparent border-2">
                  <option value="">None</option>
                  <option value="">Longer variation</option>
                </select>
              </div>
            </div>
            <div className=" flex flex-col items-start text-2xl font-normal leading-normal">
              <p className=" flex items-center gap-2">
                <span className=" text-primary">
                  <FaLeaf />
                </span>
                Produit issu du développement durable
              </p>
              <p className="flex items-center gap-2">
                <span className=" text-primary">
                  <FaShieldAlt />
                </span>
                Garantie <span className=" opacity-60 underline underline-offset-[3px]">Com In Ariège</span> :{' '}
                <span className=" font-semibold">1 an</span>
              </p>
              <p className=" self-end flex py-[2px] px-[4px] border-2">Fiche technique</p>
            </div>
            <div className=" flex flex-col gap-[15px]">
              <p className=" text-2xl font-normal leading-normal flex gap-1">
                <span className=" text-5xl font-semibold leading-[48px]">19,99€</span>
                <span className=" flex items-start opacity-60">HT</span>
                <span className=" flex items-end opacity-60 ml-1">(0 en stock)</span>
              </p>
              <p className=" flex font-semibold text-2xl leading-normal items-center gap-4">
                <span className="text-primary opacity-100">
                  <FaEnvelope />
                </span>
                On vous préviens lorsque ce produit est disponible ?
              </p>
              <form action="" className=" bg-secondary flex gap-2 w-2/3 p-2">
                <input
                  type="text"
                  name=""
                  id=""
                  className=" bg-transparent focus:outline-none pl-2 w-full text-xl"
                  placeholder="votreadresse@mail.fr"
                />
                <button type="submit" className=" bg-primary p-2 whitespace-nowrap text-xl">
                  Prévenez-moi !
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-10">
          <h3 className=" font-semibold text-5xl">Fiche technique</h3>
          <ProductAttributesSheat productAttrib={productAttributes} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
