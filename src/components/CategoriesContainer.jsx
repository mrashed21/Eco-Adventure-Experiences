import { useLoaderData } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const CategoriesContainer = () => {
  const data = useLoaderData();
  return (
    <div className="w-11/12 mx-auto mt-20">
      <h1 className="text-center text-4xl font-bold mb-10">Choose Your Own Adventure</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 p-4">
        {data.map((category) => (
          <CategoryCard key={category.id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default CategoriesContainer;
