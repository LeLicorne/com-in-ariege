import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const location = useLocation();
  const nav = useNavigate();
  const [text, setText] = useState('');
  const path = location.pathname;

  function handleClick() {
    if (!text) {
      nav('/catalogue#produits');
    } else {
      nav(`/catalogue?search=${text}#produits`);
    }
    if (path.includes('/catalogue')) nav(0);
    setText('');
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  return (
    <div className="flex w-[80%] sm:h-[8vw] lg:h-auto lg:w-[800px] bg-white sm:p-4 shadow-cardless items-center justify-center">
      <input
        type="text"
        name="research"
        id="research"
        placeholder="Recherche"
        className="flex w-full text-[2vw] lg:text-xl focus:outline-none pl-4 sm:pl-2 md:pl-5"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e)}
      />
      <button type="submit" className="button-primary" onClick={() => handleClick()}>
        <BiSearch size={20} />
        Rechercher
      </button>
    </div>
  );
}
