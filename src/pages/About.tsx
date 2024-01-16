import AboutCard from '../components/AboutCard';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Title from '../components/Title';

function About() {
  const story = `MBS est l'acteur majeur mondial de l'équipement des domaines skiables.\n\nInstallée à Tours en Savoie depuis 2007, au pied de nombreuses stations de ski de renommée internationale, notre société dispose d'une gamme de produits très étendue, mais spécialement conçue pour la montagne.\n\nMBS offre aux professionnels du sport, de la montagne et des loisirs une vaste gamme de d'équipements de sécurité, signalétique, loisirs, aménagement et de compétition.`;
  const values = `Appro Mountain s'engage à mener une activité économique la plus respectueuse possible des personnes et de l'environnement.\n\nCet engagement, capital aux yeux de toute l'équipe Appro Mountain, s'inscrit dans  une véritable  volonté  commune  de s'impliquer  dans des  projets vecteurs  de sens pour  notre société afin  de générer un impact positif autour de nous.`;
  return (
    <div className="flex flex-col w-full h-auto">
      <NavBar />
      <div className="flex flex-col gap-20 lg:gap-32 px-[7%]">
        <Title
          title="À propos"
          desc="Chez Com In Ariège, notre passion pour la montagne est au cœur de tout ce que nous faisons. Fondée sur des valeurs environnementales et sociales solides, notre entreprise s'engage à offrir une expérience unique à nos clients."
        />
        <AboutCard title="Notre histoire" paragraphe={story} image="/assets/abouthistoryimage.png" />
        <AboutCard title="Nos valeurs" paragraphe={values} image="/assets/ariege.jpg" leftImage valueCards />
      </div>
      <Footer />
    </div>
  );
}

export default About;
