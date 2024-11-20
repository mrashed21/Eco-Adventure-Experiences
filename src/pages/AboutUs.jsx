import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="bg-purple-100 min-h-screen py-10">
        <h2 className="text-center text-3xl font-bold"> About us</h2>
        <div className=" flex items-center justify-center h-screen">
          <h2 className="text-3xl font-medium">No Information Found</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
