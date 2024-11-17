import { useLoaderData } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const CategoriesContainer = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 p-4">
        {data.map((category) => (
          <CategoryCard key={category.id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default CategoriesContainer;
