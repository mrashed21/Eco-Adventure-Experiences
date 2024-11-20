import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="">
        <h2 className="text-center text-3xl font-bold"> About us</h2>
      </div>
    </div>
  );
};

export default AboutUs;
