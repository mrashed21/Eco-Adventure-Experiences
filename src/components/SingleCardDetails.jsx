import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
const SingleCardDetails = () => {
  const { id } = useParams();
  const infoId = parseInt(id);
  const allData = useLoaderData();
  const targetInfo = allData.find((info) => info.id === infoId);
  const {
    adventureTitle,
    image,
    shortDescription,
    adventureCost,
    bookingAvailability,
    location,
    duration,
    adventureLevel,
    includedItems,
    ecoFriendlyFeatures,
    maxGroupSize,
    specialInstructions,
  } = targetInfo;
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [showModal, setShowModal] = useState(false);
  const handleTalkWithExpert = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 10 && currentHour < 20) {
      window.open("https://meet.google.com/ufk-xjsi-bxt", "_blank");
    } else {
      setShowModal(true);
    }
  };
  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="py-10 bg-gray-100 min-h-screen"
      >
        <div className="w-11/12 mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="md:w-1/2">
              <img
                src={image}
                alt={adventureTitle}
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className=" text-2xl font-semibold md:text-3xl md:font-bold mb-4">
                {adventureTitle}
              </h1>
              <p className="text-gray-600 mb-2">{shortDescription}</p>
              <div className="text-lg font-medium">
                Cost:{" "}
                <span className="text-red-500 text-2xl ">${adventureCost}</span>{" "}
                <span className="text-xs">Only</span>
              </div>
              <div className="mt-2">
                Booking:
                <span
                  className={`badge px-2 py-1 ml-2 ${
                    bookingAvailability ? "badge-success" : "badge-error"
                  }`}
                >
                  {bookingAvailability ? "Available" : "Unavailable"}
                </span>
              </div>
            </div>
          </div>

          <div className=" mt-2 md:mt-6">
            <h2 className="text-2xl font-semibold mb-1 md:mb-4">Details</h2>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>
                {" "}
                <span className="md:text-lg font-medium">Location:</span>{" "}
                {location}
              </li>
              <li>
                {" "}
                <span className="md:text-lg font-medium"> Duration: </span>{" "}
                {duration}
              </li>
              <li>
                {" "}
                <span className="md:text-lg font-medium">
                  {" "}
                  Adventure Level:{" "}
                </span>
                {adventureLevel}
              </li>
              <li>
                {" "}
                <span className="md:text-lg font-medium">
                  {" "}
                  Max Group Size:{" "}
                </span>
                {maxGroupSize} <span>People</span>
              </li>
              <li>
                {" "}
                <span className="md:text-lg font-medium">
                  Eco-Friendly Features:{" "}
                </span>{" "}
                {ecoFriendlyFeatures.join(", ")}
              </li>
              <li>
                {" "}
                <span className="md:text-lg font-medium"> Included: </span>
                {includedItems.join(", ")}
              </li>
              <li>
                {" "}
                <span className="md:text-lg font-medium">
                  {" "}
                  Special Instructions:{" "}
                </span>{" "}
                {specialInstructions}
              </li>
            </ul>
          </div>

          <div className="mt-8 People md:px-20 justify-center">
            <button
              className="btn btn-primary w-full rounded-full text-white text-lg"
              onClick={handleTalkWithExpert}
            >
              Talk with Expert
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="modal modal-middle modal-open">
          <div className="modal-box text-center">
            <h3 className="font-bold text-lg">Consultation Time</h3>
            <p className="py-4">
              Experts are available between <b>10:00 AM</b> and <b>8:00 PM</b>.
              Please visit during these hours.
            </p>
            <div className="px-10">
              <button
                className="btn btn-primary rounded-full w-full"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleCardDetails;
