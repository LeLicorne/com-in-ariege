import ContentLoader from 'react-content-loader';
import { useGetCategoriesQuery } from '../redux/api';
import CategoryCard from './CategoryCard';

export default function Categories(options: {
  selectedCat: string;
  setSelectedCat: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { selectedCat, setSelectedCat } = options;
  const { data: categories, isLoading } = useGetCategoriesQuery();

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
            selected={selectedCat === category.id}
            setSelected={setSelectedCat}
          />
        );
      })}
    </div>
  );
}
