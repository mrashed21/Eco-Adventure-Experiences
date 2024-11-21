import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CategoryContext } from "../provider/AllDataContext";
import { AuthContext } from "../provider/AuthProvider";
import CardDetails from "./CardDetails";

const CardContainer = () => {
  const data = useLoaderData();
  const { selectedCategory } = useContext(CategoryContext);
  const { setLoading } = useContext(AuthContext);
  const [showAll, setShowAll] = useState(false);
  const handleSeeMore = () => {
    setLoading(true);
    setTimeout(() => {
      setShowAll(true);
      setLoading(false);
    }, 3000);
  };
  const filteredData = selectedCategory
    ? data.filter((card) => card.categoryName === selectedCategory)
    : data;

  const displayedData = showAll ? filteredData : filteredData.slice(0, 9);

  return (
    <div className="w-11/12 mx-auto my-20 md:px-20  ">
      <h1 className="text-center text-4xl font-bold mb-10">
        Eco-Adventure Experiences
      </h1>
      <div className="space-y-5">
        {displayedData.map((singleCard) => (
          <CardDetails key={singleCard.id} singleCard={singleCard} />
        ))}
      </div>

      {!showAll && filteredData?.length > 9 && (
        <div className="mt-6 text-center px-10">
          <button
            onClick={() => handleSeeMore()}
            className="w-full btn btn-primary text-white font-semibold rounded-full text-lg"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default CardContainer;
