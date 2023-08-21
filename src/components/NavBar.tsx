/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

function FaXmark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 384 512">
      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
    </svg>
  );
}

function NavBar() {
  const loc = useLocation();

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav
      className={` transition-all w-full sm:gap-0 absolute sm:static flex flex-col items-start bg-white shadow-Navbottom px-[5%] py-3 sm:py-[1%] lg:py-[15px] z-20 ${
        nav ? 'gap-6' : 'gap-0'
      }`}
    >
      <div className=" flex justify-between relative w-full items-center">
        <div className=" flex w-fit">
          <Link to="/" className="text-[5vw] sm:text-[3vw] lg:text-3xl font-bold flex whitespace-nowrap">
            COM IN ARIÈGE
          </Link>
        </div>
        <div className="hidden sm:flex flex-row w-full justify-end gap-[7%] font-medium text-black/40 text-[2vw] lg:text-xl">
          <Link to="/" className={loc.pathname === '/' ? 'navBarActiveLink' : 'navBarLink'}>
            ACCUEIL
          </Link>
          <Link to="/catalogue" className={loc.pathname.includes('/catalogue') ? 'navBarActiveLink' : 'navBarLink'}>
            CATALOGUE
          </Link>
          <Link
            to="/à-propos"
            className={
              loc.pathname === '/a-propos' ? 'navBarActiveLink whitespace-nowrap' : 'navBarLink whitespace-nowrap'
            }
          >
            À PROPOS
          </Link>
          <Link to="/contact" className={loc.pathname === '/contact' ? 'navBarActiveLink' : 'navBarLink'}>
            CONTACT
          </Link>
        </div>

        <div onClick={handleNav} className="sm:hidden relative ">
          {nav ? <FaXmark /> : <FaBars size={20} className="text-black" />}
        </div>
      </div>

      <div className={` w-full flex flex-col overflow-hidden transition-all ${nav ? 'gap-4 h-40' : ' gap-0 h-0'}`}>
        <Link to="/" className=" navBarLink">
          ACCUEIL
        </Link>
        <Link to="/catalogue" className=" navBarLink">
          CATALOGUE
        </Link>
        <Link to="/a-propos" className=" navBarLink whitespace-nowrap">
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
