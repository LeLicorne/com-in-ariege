import ContentLoader from 'react-content-loader';
import { Category, Subcategory } from '../models/shop';
import { useGetCategoriesQuery } from '../redux/api';
import CategoryCard from './CategoryCard';

export default function Categories(options: {
  selectedCat: Category | undefined;
  setSelectedCat: React.Dispatch<React.SetStateAction<Category | undefined>>;
  setSelectedSubCat: React.Dispatch<React.SetStateAction<Subcategory | undefined>>;
}) {
  const { selectedCat, setSelectedCat, setSelectedSubCat } = options;
  const { data: categories, isLoading } = useGetCategoriesQuery();
  const placeholder = [1, 2, 3];

  function handleClick(category: Category) {
    setSelectedSubCat(undefined);
    if (selectedCat?.id === category.id) {
      setSelectedCat(undefined);
    } else {
      setSelectedCat(category);
    }
  }

  if (isLoading) {
    return (
      <div className="flex flex-row w-full px-[7%] py-8 gap-8 overflow-x-scroll scrollbar-hide">
        {placeholder.map((id) => {
          return (
            <ContentLoader
              key={id}
              speed={2}
              backgroundColor="#f3f3f3"
              foregroundColor="#EAEDED"
              className="flex-shrink-0 w-[210px] sm:w-[245px] h-[300px] sm:h-[350px]"
            >
              <rect rx="24" ry="24" className="w-full h-full" />
            </ContentLoader>
          );
        })}
      </div>
    );
  }

  if (!categories) {
    return null;
  }

  return (
    <div className="flex flex-row w-full px-[7%] py-8 gap-8 overflow-x-scroll scrollbar-hide">
      {categories.map((category) => {
        return (
          <CategoryCard
            key={category.id}
            category={category}
            selectedCategory={selectedCat}
            handleClick={(e) => handleClick(e)}
          />
        );
      })}
    </div>
  );
}
