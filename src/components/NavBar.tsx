import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className=" w-full h-20 flex justify-between items-center bg-transparent shadow-Navbottom px-20 z-10">
      <div>
        <h2 className=" text-3xl font-bold">COM IN ARIÈGE</h2>
      </div>
      <div className=" flex flex-row gap-20 font-medium text-black/40  text-xl">
        <Link to="/" className=" navBarLink">
          ACCUEIL
        </Link>
        <Link to="/catalogue" className=" navBarLink">
          CATALOGUE
        </Link>
        <Link to="/à-propos" className=" navBarLink">
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
