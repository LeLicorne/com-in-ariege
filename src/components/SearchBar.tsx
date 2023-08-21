import { BiSearch } from 'react-icons/bi';

export default function SearchBar() {
  return (
    <form className="flex w-[80%] sm:h-[8vw] lg:h-auto lg:w-[800px] bg-white sm:p-4 shadow-md items-center justify-center">
      <input
        type="text"
        name="research"
        id="research"
        placeholder="Recherche"
        className="flex w-full text-[2vw] lg:text-xl focus:outline-none pl-4 sm:pl-2 md:pl-5"
      />
      <button type="submit" className="button-primary">
        <BiSearch size={20} />
        Rechercher
      </button>
    </form>
  );
}
