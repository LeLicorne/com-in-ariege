/* eslint-disable @typescript-eslint/no-explicit-any */
import { LuX } from 'react-icons/lu';

export default function DeleteModal(options: { open: boolean; toggle: () => void; fnc: any }) {
  const { open, toggle, fnc } = options;
  return (
    <div
      className={`absolute w-full top-0 left-0 h-full backdrop-blur ${open ? 'block opacity-100' : 'hidden opacity-0'}`}
    >
      <div
        className={`
      fixed z-50 top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]
      gap-4 
      bg-white rounded-b-lg border
      p-6
      shadow-lg
      w-full sm:max-w-lg sm:rounded-lg
      transition-opacity
      `}
      >
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h2 className="text-lg font-semibold leading-none tracking-tight">Êtes-vous certain ?</h2>
          <p className="text-sm text-grey">Cette action ne peut pas être annulée.</p>
        </div>
        <div>
          <div className="pt-6 space-x-2 flex items-center justify-end w-full">
            <button
              type="button"
              onClick={toggle}
              className="rounded-md text-sm font-medium transition-colors bg-transparent hover:bg-secondary text-grey h-10 px-4 py-2"
            >
              Annuler
            </button>
            <button
              type="button"
              onClick={() => fnc()}
              className="rounded-md text-sm font-medium transition-colors bg-[#EF4444] hover:bg-[#EF4444]/80 text-white h-10 px-4 py-2"
            >
              Continuer
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={toggle}
          className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          <LuX />
          <span className="sr-only">Fermer</span>
        </button>
      </div>
    </div>
  );
}
