import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import CategoriesContainer from "../components/CategoriesContainer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>
        <Banner />

        <CategoriesContainer />
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
