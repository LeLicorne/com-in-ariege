import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import InfoBox from '../components/InfoBox';
import NavBar from '../components/NavBar';
import Title from '../components/Title';

export default function Contact() {
  return (
    <div className="flex flex-col w-full h-auto font-[Poppins]">
      <NavBar />
      <div className="flex flex-col gap-20 lg:gap-32 px-[7%]">
        <Title
          title="Contactez-nous"
          desc={
            "C'est avec plaisir que nous répondrons à votre demande dans les plus brefs délais."
          }
        />
        <div className="flex flex-col lg:flex-row w-full gap-24">
          <ContactForm />
          <InfoBox />
        </div>
      </div>
      <Footer />
    </div>
  );
}