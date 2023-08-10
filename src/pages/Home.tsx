import NavBar from '../components/NavBar';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className=" flex flex-col h-screen font-[Poppins]">
      <NavBar />
      <Hero />
    </div>
  );
}
