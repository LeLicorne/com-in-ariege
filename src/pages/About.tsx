import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Title from '../components/Title';
import AboutCard from '../components/AboutCard';

function About() {
  const historyParagraphe = `MBS est l'acteur majeur mondial de l'équipement des domaines skiables.\n\nInstallée à Tours en Savoie depuis 2007, au pied de nombreuses stations de ski de renommée internationale, notre société dispose d'une gamme de produits très étendue, mais spécialement conçue pour la montagne.\n\nMBS offre aux professionnels du sport, de la montagne et des loisirs une vaste gamme de d'équipements de sécurité, signalétique, loisirs, aménagement et de compétition.`;
  const valueParagraphe = `Appro Mountain s'engage à mener une activité économique la plus respectueuse possible des personnes et de l'environnement.\n\nCet engagement, capital aux yeux de toute l'équipe Appro Mountain, s'inscrit dans  une véritable  volonté  commune  de s'impliquer  dans des  projets vecteurs  de sens pour  notre société afin  de générer un impact positif autour de nous.`;
  return (
    <div className=" flex w-full flex-col h-auto">
      <NavBar />
      <div className="flex flex-col gap-20 lg:gap-32 px-[7%]">
        <Title
          title="À propos"
          desc="Dans le cadre de valeurs environnementales et sociales fortes, nous offrons une gamme complète et sur-mesure, des services innovants et un véritable sens du service client. Com In Ariège c’est une solution de distribution à forte valeur ajoutée pour votre structure, portée par une équipe de passionnés de montagne qui s’engage à 100% pour offrir un service de qualité à ses clients."
        />
        <AboutCard
          title="Notre histoire"
          paragraphe={historyParagraphe}
          image="/src/assets/abouthistoryimage.png"
        />
        <AboutCard
          title="Nos valeurs"
          paragraphe={valueParagraphe}
          image="/src/assets/ariege.jpg"
          leftImage
          valueCards
        />
      </div>

      <Footer />
    </div>
  );
}

export default About;
