import { useGetCategoriesQuery } from '../redux/api';
import CategoryCard from './CategoryCard';

export default function Categories(options: {
  selectedCat: string;
  setSelectedCat: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { selectedCat, setSelectedCat } = options;
  const { data: categories, isLoading } = useGetCategoriesQuery();

  if (isLoading) {
    return null;
  }

  if (!categories) {
    return <div>Vide</div>;
  }

  return (
    <div className="flex flex-row w-full px-[7%] py-8 gap-8 overflow-x-scroll scrollbar-hide">
      {categories.map((category) => {
        return (
          <CategoryCard
            key={category.id}
            category={category}
            selected={selectedCat === category.id}
            setSelected={setSelectedCat}
          />
        );
      })}
    </div>
  );
}
