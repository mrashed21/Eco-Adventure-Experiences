import { useContext } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { CategoryContext } from "../provider/AllDataContext";

const Footer = () => {
  const { setSelectedCategory } = useContext(CategoryContext);
  const navigate = useNavigate();
  const handleAllCategory = (e) => {
    e.preventDefault();
    setSelectedCategory(null);
    navigate("/");
  };
  return (
    <>
      <footer className="footer bg-black rounded p-10 text-white">
        <nav>
          <h6 className="footer-title">Read Article</h6>
          <a
            href="https://theecoodyssey.com/all-posts/the-ultimate-sustainable-travel-bucket-list-70-experiences-to-ignite-your-eco-adventure"
            target="_blank"
            className="link link-hover"
          >
            Nature Exploration
          </a>
          <a
            href="https://veggievagabonds.com/adventure-ideas/"
            target="_blank"
            className="link link-hover"
          >
            Water-Based Activities
          </a>
          <a
            href="https://www.bbc.com/travel/article/20241106-a-210km-drive-through-the-most-beautiful-place-on-earth"
            target="_blank"
            className="link link-hover"
          >
            Extreme Adventure
          </a>
          <a
            href="https://www.bbc.com/travel/article/20241107-sandolos-a-unique-way-to-see-a-hidden-side-of-venice"
            target="_blank"
            className="link link-hover"
          >
            Cultural Adventures
          </a>
        </nav>
        <nav className="grid gap-4">
          <h4 className="footer-title">Adventure Experiences</h4>
          <NavLink
            to="/"
            onClick={handleAllCategory}
            className="text-white font-medium"
          >
            Home
          </NavLink>
          <NavLink
            to="/"
            onClick={handleAllCategory}
            className="text-white font-medium"
          >
            All Category
          </NavLink>
          <NavLink to="/blog" className="text-white font-medium">
            Blog
          </NavLink>
        </nav>
        <nav>
          <h6 className="footer-title">Social Media</h6>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.facebook.com/muhammadrashed0"
              target="_blank"
              className="text-xl md:text-3xl hover:scale-110 ease-in-out"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/mrashed21/"
              target="_blank"
              className="text-xl md:text-3xl  hover:scale-110 ease-in-out"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/mrashed21"
              target="_blank"
              className="text-xl md:text-3xl hover:scale-110 ease-in-out"
            >
              <FaGithub />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
