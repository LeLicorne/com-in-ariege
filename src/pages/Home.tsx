import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Service from '../components/Services';

export default function Home() {
  return (
    <div className=" flex flex-col h-auto font-[Poppins]">
      <div className=" flex flex-col h-screen w-full">
        <NavBar />
        <Hero />
      </div>
      <Service />
    </div>
  );
}
