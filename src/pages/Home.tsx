import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Service from '../components/Services';
import OurTeam from '../components/OurTeam';
import OurPartners from '../components/OurPartners';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className=" flex flex-col w-full h-auto font-[Poppins] mb-5">
      <div className=" flex flex-col h-screen w-full">
        <NavBar />
        <Hero />
      </div>
      <div className=" flex flex-col gap-28">
        <Service />
        <OurTeam />
        <OurPartners />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
}
