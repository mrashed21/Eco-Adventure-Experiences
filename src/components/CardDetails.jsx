/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const CardDetails = ({ singleCard }) => {
  const navigate = useNavigate();
  const handlShowDetails = () => {
    navigate(`/category/${singleCard.id}`);
  };
  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-56 object-cover"
        src={singleCard.image}
        alt={singleCard.adventureTitle}
      />

      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">
          {singleCard.adventureTitle}
        </h2>

        {singleCard.ecoFriendlyFeatures && (
          <div className="my-2">
            <h3 className="text-lg font-bold">Eco Friendly Features:</h3>
            <ol className="list-decimal pl-6 mt-2 text-[#09080F99] text-lg">
              {singleCard.ecoFriendlyFeatures &&
                singleCard.ecoFriendlyFeatures.map((features, idx) => (
                  <li key={idx}>{features}</li>
                ))}
            </ol>
          </div>
        )}

        <button
          onClick={handlShowDetails}
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
