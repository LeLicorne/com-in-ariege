/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Category } from '../models/shop';

export default function CategoryCard(options: {
  category: Category;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { category, selected, setSelected } = options;

  function handleClick() {
    setSelected(category.id);
  }
  return (
    <div
      className={`
      relative
      w-[210px]
      h-[300px]
      sm:w-[245px]
      sm:h-[350px]
      rounded-3xl
      overflow-hidden
      shadow-card
      flex-shrink-0
      `}
    >
      <img
        src={`src/assets/categories/${category.imageUrl}`}
        alt="category"
        className="absolute w-full h-full object-cover"
      />
      <span
        onClick={handleClick}
        role="button"
        tabIndex={0}
        className={`
        flex
        w-full
        h-full
        justify-center
        items-center
        font-[Poppins]
        text-white
        font-semibold
        text-2xl
        transition-all
        cursor-pointer
        ${selected ? 'backdrop-blur-none' : 'backdrop-blur-[6px]'}
        hover:backdrop-blur-none
        `}
      >
        {category.name}
      </span>
    </div>
  );
}
