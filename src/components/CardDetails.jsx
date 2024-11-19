/* eslint-disable react/prop-types */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CardDetails = ({ singleCard }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const navigate = useNavigate();

  const handlShowDetails = () => {
    navigate(`/category/${singleCard.id}`);
  };

  return (
    <div className="">
      <div
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="card flex-row rounded-lg bg-base-100 shadow-xl p-4"
      >
        <figure
           data-aos="fade-right"
           data-aos-easing="linear"
           data-aos-duration="1000"
          className=" w-1/2"
        >
          <img
            className="w-full rounded-xl object-cover"
            src={singleCard.image}
            alt={singleCard.adventureTitle}
          />
        </figure>
        <div
       data-aos="fade-left"
       data-aos-easing="linear"
       data-aos-duration="1000"
          className="p-4 flex flex-col flex-grow  w-1/2"
        >
          <h2 className="text-xl font-semibold text-gray-800">
            {singleCard.adventureTitle}
          </h2>

          {singleCard.ecoFriendlyFeatures && (
            <div className="my-2 flex flex-col flex-grow">
              <h3 className="text-lg font-medium">Eco-Friendly Features:</h3>
              <ol className="list-decimal pl-6 mt-2 text-[#09080F99] text-lg">
                {singleCard.ecoFriendlyFeatures.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ol>
            </div>
          )}

          <div className="card-actions mt-auto">
            <button
              onClick={handlShowDetails}
              className="w-full btn btn-primary text-white font-semibold rounded-full text-lg"
            >
              Adventure Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
