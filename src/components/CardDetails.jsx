/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const CardDetails = ({ singleCard }) => {
  const navigate = useNavigate();
  const handlShowDetails = () => {
    navigate(`/category/${singleCard.id}`);
  };
  return (
    <div className="card rounded-lg bg-base-100 shadow-xl ">
      <figure className="">
        <img
          className="w-full h-56 object-cover"
          src={singleCard.image}
          alt={singleCard.adventureTitle}
        />
      </figure>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-800">
          {singleCard.adventureTitle}
        </h2>

        {singleCard.ecoFriendlyFeatures && (
          <div className="my-2 flex flex-col flex-grow">
            <h3 className="text-lg font-medium">Eco Friendly Features:</h3>
            <ol className="list-decimal pl-6 mt-2 text-[#09080F99] text-lg">
              {singleCard.ecoFriendlyFeatures &&
                singleCard.ecoFriendlyFeatures.map((features, idx) => (
                  <li key={idx}>{features}</li>
                ))}
            </ol>
          </div>
        )}

        <div className="card-actions mt-auto">
          <button
            onClick={handlShowDetails}
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 "
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
