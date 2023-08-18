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
        <ContentLoader
          speed={2}
          width={932}
          height={350}
          viewBox="0 0 932 350"
          backgroundColor="#f3f3f3"
          foregroundColor="#EAEDED"
        >
          <rect x="0" y="0" rx="24" ry="24" width="245" height="350" />
          <rect x="277" y="0" rx="24" ry="24" width="245" height="350" />
          <rect x="554" y="0" rx="24" ry="24" width="245" height="350" />
        </ContentLoader>
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
