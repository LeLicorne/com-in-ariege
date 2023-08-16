import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import AboutCard from '../components/aboutCard';

function About() {
  const historyParagraphe = [
    "MBS est l'acteur majeur mondial de l'équipement des domaines skiables.",
    "Installée à Tours en Savoie depuis 2007, au pied de nombreuses stations de ski de renommée internationale, notre société dispose d'une gamme de produits très étendue, mais spécialement conçue pour la montagne.",
    "MBS offre aux professionnels du sport, de la montagne et des loisirs une vaste gamme de d'équipements de sécurité, signalétique, loisirs, aménagement et de compétition.",
  ];

  const valueParagraphe = [
    "Appro Mountain s'engage à mener une activité économique la plus respectueuse possible des personnes et de l'environnement.",
    "Cet engagement, capital aux yeux de toute l'équipe Appro Mountain, s'inscrit dans  une véritable  volonté  commune  de s'impliquer  dans des  projets vecteurs  de sens pour  notre société afin  de générer un impact positif autour de nous.",
  ];

  const mapping = (paragraphes: string[]) => {
    // eslint-disable-next-line react/jsx-key
    return paragraphes.map((paragraphe) => <span>{paragraphe}</span>);
  };

  return (
    <div className=" flex w-full flex-col relative h-auto">
      <NavBar />
      <AboutCard
        title="Notre histoire"
        paragraphe={mapping(historyParagraphe)}
        image="/src/assets/abouthistoryimage.png"
        leftImage={false}
        valueCards={false}
      />
      <AboutCard
        title="Nos valeurs"
        paragraphe={mapping(valueParagraphe)}
        image="/src/assets/ariege.jpg"
        leftImage
        valueCards
      />
      <Footer />
    </div>
  );
}

export default About;
