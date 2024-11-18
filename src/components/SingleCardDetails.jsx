import { useLoaderData, useParams } from "react-router-dom";

const SingleCardDetails = () => {
  const { id } = useParams();
  const infoId = parseInt(id);
  const allData = useLoaderData();
  const targetInfo = allData.find((info) => info.id === infoId);

  return (
    <div>
      <h1>{targetInfo.adventureTitle}</h1>
      <img src={targetInfo.image} alt={targetInfo.adventureTitle} />
      <p>{targetInfo.description}</p>
    </div>
  );
};

export default SingleCardDetails;
