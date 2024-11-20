import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <p className="text-4xl font-bold mb-2">404</p>
      <p className="text-3xl font-bold font-poppins">
        Opps!! Something Went Wrong
      </p>
      <div className="mt-10">
      <button className="btn text-red-500">
        <Link to={"/"}>Back Home</Link>
      </button>
      </div>
    </div>
  );
};

export default Error;
