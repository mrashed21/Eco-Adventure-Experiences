import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import CategoriesContainer from "../components/CategoriesContainer";
import CustomarReview from "../components/CustomarReview";
import JoinWithUs from "../components/JoinWithUs";

const Home = () => {
  return (
    <>
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
