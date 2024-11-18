import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../provider/AllDataContext";

/* eslint-disable react/prop-types */
const CategoryCard = ({ category }) => {
  const { setSelectedCategory } = useContext(CategoryContext);
  const { image, categoryName } = category;
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    setSelectedCategory(categoryName);
    navigate(`/?category=${categoryName}`);
  };

  return (
    <div onClick={handleCategoryClick} className="cursor-pointer">
      <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <img
          src={image}
          alt={categoryName}
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-65 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <h2 className="text-white text-center px-3 text-xl font-semibold">
            {categoryName}
          </h2>
        </div>
      </div>
      <h2 className="text-center text-xl font-medium mt-3">{categoryName}</h2>
    </div>
  );
};

export default CategoryCard;
