import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Service from '../components/Services';
import OurTeam from '../components/OurTeam';
import OurPartners from '../components/OurPartners';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className=" flex flex-col w-full h-auto font-[Poppins] mb-5 sm:bg-blue-400 md:bg-orange-300 lg:bg-green-200 xl:bg-red-300">
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
