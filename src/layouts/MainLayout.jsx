import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        {" "}
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
