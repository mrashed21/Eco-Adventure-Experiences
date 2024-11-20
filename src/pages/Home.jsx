import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import CategoriesContainer from "../components/CategoriesContainer";
import CustomarReview from "../components/CustomarReview";
import JoinWithUs from "../components/JoinWithUs";

const Home = () => {
  return (
    <>
      <Helmet>
        <title> Eco-Adventure | Home</title>
      </Helmet>
      <main>
        <Banner />
        <CategoriesContainer />
        <Outlet></Outlet>
        <CustomarReview />
        <JoinWithUs />
      </main>
    </>
  );
};

export default Home;
