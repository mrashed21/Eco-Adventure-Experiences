import { useLoaderData } from "react-router-dom";
import CardDetails from "./CardDetails";

const CardContainer = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="w-11/12 mx-auto ">
      this is card container
      <div className="grid grid-cols-3">
        {data.map((singleCard) => (
          <CardDetails
            key={singleCard.id}
            singleCard={singleCard}
          ></CardDetails>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
