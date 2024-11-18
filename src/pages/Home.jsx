import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import CategoriesContainer from "../components/CategoriesContainer";

const Home = () => {
  return (
    <>
      <main>
        <Banner />
        <CategoriesContainer />
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Home;
