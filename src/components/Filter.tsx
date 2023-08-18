import { FaChevronDown } from 'react-icons/fa';
import { Subcategory } from '../models/shop';

export default function Filter(vars: {
  name: string;
  options: { name: string; f: () => void }[];
  subCat?: Subcategory | undefined;
}) {
  const { name, options, subCat } = vars;

  function triggerFunction(selected: string) {
    for (let i = 0; i < options.length; i += 1) {
      if (selected === options[i].name) {
        options[i].f();
      }
    }
    return null;
  }
  return (
    <div className="flex relative w-fit text-black/60">
      <select
        name={name}
        defaultValue={name}
        onChange={(e) => {
          triggerFunction(e.target.value);
        }}
        className="bg-secondary rounded-full pl-6 py-2 pr-12 justify-center items-center select-chevron-hide"
      >
        <option disabled selected={subCat === undefined}>
          {name}
        </option>
        {options.map((opt) => {
          return (
            <option key={opt.name} value={opt.name}>
              {opt.name}
            </option>
          );
        })}
      </select>
      <div className="absolute right-3 top-1/2 translate-y-[-50%] pointer-events-none">
        <FaChevronDown size={18} />
      </div>
    </div>
  );
}
