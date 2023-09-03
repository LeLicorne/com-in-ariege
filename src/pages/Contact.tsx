import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import InfoBox from '../components/InfoBox';
import SimpleMap from '../components/Map';
import NavBar from '../components/NavBar';
import Title from '../components/Title';

export default function Contact() {
  return (
    <div className="flex flex-col w-full h-auto">
      <NavBar />
      <div className="flex flex-col gap-20 lg:gap-32 px-[7%]">
        <Title
          title="Contactez-nous"
          desc={"C'est avec plaisir que nous répondrons à votre demande dans les plus brefs délais."}
        />
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-12 xl:gap-24 w-full">
          <ContactForm />
          <InfoBox />
        </div>
        <SimpleMap />
      </div>
      <Footer />
    </div>
  );
}
