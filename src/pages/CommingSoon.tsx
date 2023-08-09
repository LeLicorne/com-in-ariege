function CommingSoon() {
  return (
    <main className="h-screen w-full flex flex-col">
      <div
        id="brandname"
        className="w-full h-20 font-[Poppins] font-bold flex items-center"
      >
        <h2 className="text-3xl ml-10">COMIN ARIEGE</h2>
      </div>
      <div
        id="commingsoon"
        className="h-full w-full flex flex-col pt-64 items-center font-[Poppins] bg-[url('/src/assets/mountains.png')] bg-center bg-cover"
      >
        <h1 className="font-semibold text-4xl md:text-6xl lg:text-8xl">
          COMMING SOON
        </h1>
        <h3 className="font-medium text-1xl md:text-2xl lg:text-3xl text-gray-600">
          notre site est en construction
        </h3>
      </div>
    </main>
  );
}

export default CommingSoon;
