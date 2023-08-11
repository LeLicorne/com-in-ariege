function NewsLetter() {
  return (
    <div className="flex flex-col w-full px-[7%] items-center">
      <div className="w-full h-[25vw] flex flex-col relative items-center justify-center text-white overflow-hidden">
        <img
          src="src/assets/sunsetmountain.jpg"
          alt=""
          className=" absolute object-cover brightness-75 z-0 pt-[25%]"
        />
        <div className="flex flex-col justify-center items-center z-10 text-6xl font-bold">
          <h2>Inscrivez vous à notre</h2>
          <h2>newsletter</h2>
        </div>
        <div className=" flex flex-col justify-center items-center z-10 text-slate-200">
          <p>recevez des offres promotionnelles personalisées</p>
          <p>et restez à l&lsquo;actualité</p>
        </div>
      </div>
      <form
        action=""
        className=" w-fit flex flex-row items-center justify-center z-10 shadow-md bg-white p-3 gap-4 mt-[-30px]"
      >
        <input
          type="text"
          name="visitorName"
          id=""
          placeholder=" Entrer votre nom"
          className="w-full text-xl focus:outline-none flex"
        />
        <input
          type="text"
          name="visitorMail"
          id=""
          placeholder=" Entrer votre mail"
          className="w-full text-xl focus:outline-none flex"
        />
        <button type="submit" className="greenBtn">
          S&lsquo;inscrire
        </button>
      </form>
    </div>
  );
}

export default NewsLetter;
