import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className=" w-full flex justify-between items-center bg-transparent shadow-Navbottom px-[5%] py-[1%] lg:py-[15px] z-10">
      <div className=" flex w-fit">
        <h2 className=" text-[3vw] lg:text-3xl font-bold cursor-default flex whitespace-nowrap">
          COM IN ARIÈGE
        </h2>
      </div>
      <div className=" flex flex-row w-full justify-end gap-[7%] font-medium text-black/40  text-[2vw] lg:text-xl">
        <Link to="/" className=" navBarLink">
          ACCUEIL
        </Link>
        <Link to="/catalogue" className=" navBarLink">
          CATALOGUE
        </Link>
        <Link to="/à-propos" className=" navBarLink whitespace-nowrap">
          À PROPOS
        </Link>
        <Link to="/contact" className=" navBarLink">
          CONTACT
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
