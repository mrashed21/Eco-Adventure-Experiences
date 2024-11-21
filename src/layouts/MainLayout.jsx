import { useContext, useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuthContext } from "../provider/AuthProvider";
const MainLayout = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const { id } = useParams();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
  const categoryName = searchParams.get("category");
   
    if (location.pathname === "/login") {
      document.title = "Login";
    } else if (location.pathname === "/signup") {
      document.title = "Sign Up";
    } else if (location.pathname.startsWith("/category/") && id) {
      document.title = "Adventure Details";
    } else if (location.pathname === "/aboutus") {
      document.title = "About Us";
    } else if (location.pathname === "/blog") {
      document.title = "Blog";
    } else if (location.pathname === "/update/profile") {
      document.title = "Update Profile";
    } else if (location.pathname === "/profile") {
      document.title = user?.displayName
        ? `${user?.displayName} Profile`
        : "User Profile";
    }
    else if (location.pathname === "/" && categoryName) {
      document.title = `Category - ${categoryName}`;
    } else {
      document.title = "Eco-Adventure Experiences";
    }
  }, [location, id]);
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
