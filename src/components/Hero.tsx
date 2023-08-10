import { BiSearch } from 'react-icons/bi';

function Hero() {
  return (
    <>
      <div className=" absolute h-screen w-full top-16 left-0 bg-[url('/src\assets\mountains.png')] bg-cover bg-center opacity-50" />
      <div className=" h-screen w-full flex flex-col items-center justify-center z-10 gap-10">
        <div className=" flex flex-col gap-2">
          <div className=" flex flex-col gap-5">
            <h1 className=" font-semibold text-7xl flex justify-center">
              VOS ÉQUIPEMENTS
            </h1>
            <h1 className=" font-semibold text-7xl flex justify-center">
              AUX MEILLEURS PRIX
            </h1>
          </div>
          <h3 className=" font-medium text-3xl flex justify-center text-black/60">
            équipements et communication
          </h3>
        </div>
        <form className=" flex w-2/5 bg-white p-4 shadow-md gap-4">
          <input
            type="text"
            name="research"
            id="research"
            placeholder=" Recherche"
            className="flex w-full text-xl focus:outline-none"
          />
          <button
            type="submit"
            className=" flex items-center p-3 gap-4 font-semibold bg-[#80CA7A]"
          >
            <BiSearch size={20} />
            Rechercher
          </button>
        </form>
      </div>
      <div className=" w-full flex items-center justify-center py-6 z-10">
        <h3 className=" font-semibold text-2xl">Nos services</h3>
      </div>
    </>
  );
}

export default Hero;
