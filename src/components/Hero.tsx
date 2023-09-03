import SearchBar from './SearchBar';

function Hero() {
  return (
    <>
      <div
        id="mountainBackground"
        className="absolute h-screen w-full top-16 left-0 bg-[url('assets/mountains.png')] bg-cover bg-center opacity-50"
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
        <div className="mt-12 md:mt-24">
          <SearchBar />
        </div>
      </div>
      <div className="w-full flex items-center justify-center py-6 z-10">
        <h2 className="content-title">Nos services</h2>
      </div>
    </>
  );
}

export default Hero;
