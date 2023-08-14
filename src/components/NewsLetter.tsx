function NewsLetter() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="w-full h-[30vh] sm:h-[50vh] flex flex-col relative items-center justify-center text-white overflow-hidden">
        <img
          src="src/assets/sunsetmountain.jpg"
          alt=""
          className="absolute object-cover brightness-75 z-0 xl:pt-[25%]"
        />
        <div className="flex flex-col justify-center items-center z-10 text-[6vw] sm:text-[5vw] leading-none lg:text-6xl font-semibold">
          <h2>Inscrivez vous à notre</h2>
          <h2>newsletter</h2>
        </div>
        <div className="flex flex-col justify-center items-center z-10 text-[3vw] sm:text-[2vw] lg:text-xl text-slate-200/60">
          <p>recevez des offres promotionnelles personalisées</p>
          <p>et restez à l&lsquo;actualité</p>
        </div>
      </div>
      <form
        action=""
        className="w-[80vw] sm:w-[70vw] xl:w-[70%] flex flex-row items-center justify-center z-10 shadow-md bg-white p-1 sm:p-3 gap-4 mt-[-35px] sm:mt-[-40px] md:mt-[-30px]"
      >
        <input
          type="text"
          name="visitorName"
          id=""
          placeholder="Entrer votre nom"
          className="w-full flex pl-1 text-[2.5vw] sm:text-[2vw] lg:text-[1.7vw] xl:text-xl focus:outline-none"
        />
        <input
          type="text"
          name="visitorMail"
          id=""
          placeholder="Entrer votre mail"
          className="w-full flex pl-1 text-[2.5vw] sm:text-[2vw] lg:text-[1.7vw] xl:text-xl focus:outline-none"
        />
        <button type="submit" className=" greenBtn">
          S&lsquo;inscrire
        </button>
      </form>
    </div>
  );
}

export default NewsLetter;
