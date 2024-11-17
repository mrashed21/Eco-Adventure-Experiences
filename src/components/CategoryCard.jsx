/* eslint-disable react/prop-types */
const CategoryCard = ({ category }) => {
  const { image, name } = category;
  return (
    <div>
      <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <img
          src={image}
          alt={name}
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-65 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <h2 className="text-white text-xl font-semibold">{name}</h2>
        </div>
      </div>
      <h2 className="text-center mt-3">{name}</h2>
    </div>
  );
};

export default CategoryCard;
