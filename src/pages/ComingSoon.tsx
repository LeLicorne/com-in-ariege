function ComingSoon() {
  return (
    <main className="h-screen w-full flex flex-col bg-[url('/assets/mountains.png')] bg-center bg-cover">
      <div id="brandname" className="h-20 font-[Poppins] font-bold flex items-center">
        <h2 className="text-3xl ml-10">COM IN ARIÈGE</h2>
      </div>
      <div id="comingsoon" className="h-full flex flex-col justify-center items-center font-[Poppins]">
        <h1 className="font-semibold text-4xl md:text-6xl lg:text-8xl">COMING SOON</h1>
        <h3 className="font-medium text-1xl md:text-2xl lg:text-3xl text-black text-opacity-60">
          notre site est en construction
        </h3>
      </div>
    </main>
  );
}

export default ComingSoon;
