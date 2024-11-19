import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const MainLayout = () => {
  return (
    <>
      <header className="sticky top-0 z-50">
        <nav className="">
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
      <ToastContainer />
    </>
  );
};

export default MainLayout;
