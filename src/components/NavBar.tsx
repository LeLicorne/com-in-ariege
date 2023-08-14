/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

function NavBar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav
      className={` transition-all w-full sm:gap-0 absolute sm:block flex flex-col items-start bg-white shadow-Navbottom px-[5%] py-3 sm:py-[1%] lg:py-[15px] z-20 ${
        nav ? ' gap-2' : 'gap-0'
      }`}
    >
      <div className=" flex justify-between relative w-full items-center">
        <div className=" flex w-fit">
          <h2 className="text-[5vw] sm:text-[3vw] lg:text-3xl font-bold cursor-default flex whitespace-nowrap">
            COM IN ARIÈGE
          </h2>
        </div>
        <div className="hidden sm:flex flex-row w-full justify-end gap-[7%] font-medium text-black/40   text-[2vw] lg:text-xl">
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

        <div onClick={handleNav} className="sm:hidden relative ">
          {nav ? (
            <AiOutlineClose size={20} className="text-black" />
          ) : (
            <HiOutlineMenuAlt4 size={20} />
          )}
        </div>
      </div>

      <div
        className={` w-full flex flex-col overflow-hidden transition-all ${
          nav ? 'gap-1 h-28' : ' gap-0 h-0'
        }`}
      >
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
