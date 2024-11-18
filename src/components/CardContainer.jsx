import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { CategoryContext } from "../provider/AllDataContext";
import CardDetails from "./CardDetails";

const CardContainer = () => {
  const data = useLoaderData();
  const { selectedCategory } = useContext(CategoryContext);
  const filteredData = selectedCategory
    ? data.filter((card) => card.categoryName === selectedCategory)
    : data;

  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-3">
        {filteredData.map((singleCard) => (
          <CardDetails key={singleCard.id} singleCard={singleCard} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
