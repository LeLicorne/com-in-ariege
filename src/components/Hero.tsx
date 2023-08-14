import { BiSearch } from 'react-icons/bi';

function Hero() {
  return (
    <>
      <div
        id="mountainBackground"
        className="absolute h-screen w-full top-16 left-0 bg-[url('/src\assets\mountains.png')] bg-cover bg-center opacity-50"
      />
      <div className="h-screen w-full flex flex-col items-center justify-center z-10 gap-10">
        <div className="flex flex-col">
          <div className="flex flex-col font-semibold text-[7vw] leading-none lg:text-7xl justify-center">
            <h1 className="flex justify-center">VOS ÉQUIPEMENTS</h1>
            <h1 className="flex justify-center">AUX MEILLEURS PRIX</h1>
          </div>
          <h3 className="font-medium text-[3vw] lg:text-3xl flex justify-center text-black/60">
            équipements et communication
          </h3>
        </div>
        <form className="flex w-[80%] sm:h-[8vw] lg:h-auto lg:w-[800px] mt-12 md:mt-24 bg-white sm:p-4 shadow-md items-center justify-center">
          <input
            type="text"
            name="research"
            id="research"
            placeholder="Recherche"
            className="flex w-full text-[2vw] lg:text-xl focus:outline-none pl-4 sm:pl-2 md:pl-5"
          />
          <button type="submit" className="greenBtn">
            <BiSearch size={20} />
            Rechercher
          </button>
        </form>
      </div>
      <div className="w-full flex items-center justify-center py-6 z-10">
        <h2 className="font-semibold text-[3vw] lg:text-4xl">Nos services</h2>
      </div>
    </>
  );
}

export default Hero;
