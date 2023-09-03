/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Category } from '../../models/shop';

export default function CategoryCard(options: {
  category: Category;
  selectedCategory: Category | undefined;
  handleClick(category: Category): void;
}) {
  const { category, selectedCategory, handleClick } = options;

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
        src={category.imageUrl || '/src/assets/category-default.jpeg'}
        alt="category"
        className="absolute w-full h-full object-cover"
      />
      <span
        onClick={() => handleClick(category)}
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
        ${selectedCategory?.id === category.id ? 'backdrop-blur-none' : 'backdrop-blur-[6px]'}
        hover:backdrop-blur-none
        `}
      >
        {category.name}
      </span>
    </div>
  );
}
