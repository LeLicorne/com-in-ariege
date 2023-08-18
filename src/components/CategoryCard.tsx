export default function CategoryCard(options: {
  name: string;
  bg: string;
  selected: boolean;
}) {
  const { name, bg, selected } = options;
  return (
    <div
      className={`
      bg-[url('src/assets/${bg}')]
      w-[210px]
      h-[300px]
      sm:w-[245px]
      sm:h-[350px]
      rounded-3xl
      overflow-hidden
      bg-cover
      bg-center
      shadow-card
      flex-shrink-0
      `}
    >
      <span
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
        {name}
      </span>
    </div>
  );
}
