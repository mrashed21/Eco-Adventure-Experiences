import { useContext, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CategoryContext } from "../provider/AllDataContext";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { setSelectedCategory } = useContext(CategoryContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  const navigateProfile = () => {
    navigate("/profile");
  };

  const handleAllCategory = (e) => {
    e.preventDefault();
    setSelectedCategory(null);
    navigate("/");
  };
  return (
    <div className="bg-blue-950 text-white sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <div
                className={`text-3xl font-bold md:hidden ${
                  location.pathname === "/" ? "text-white" : "text-black"
                }`}
                onClick={() => setOpen(!open)}
              >
                {open ? <IoMdClose /> : <IoMdMenu />}
              </div>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm  bg-blue-950 rounded-box z-[1] mt-3 w-52 p-2 shadow ${
                open ? "dropdown-content" : " hidden"
              }`}
            >
              <NavLink onClick={handleAllCategory}>Home </NavLink>
              <NavLink>Blog</NavLink>
              <NavLink onClick={handleAllCategory}>All Caterogy </NavLink>
              <NavLink>Dashboard </NavLink>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            {" "}
            Eco-Adventure Experiences{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-10 px-1">
            <NavLink onClick={handleAllCategory}>Home </NavLink>

            <NavLink onClick={handleAllCategory}>All Caterogy </NavLink>
            <NavLink to={"/blog"}>Blog</NavLink>
            {user && <NavLink to={"/profile"}>My Profile </NavLink>}
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div
              title={user.email}
              onClick={navigateProfile}
              className="w-10 h-10 rounded-full bg-white"
            ></div>
          )}
          {user && user.email ? (
            <button onClick={logOut} className="btn btn-neutral rounded-none ">
              logout
            </button>
          ) : (
            <button
              onClick={navigateLogin}
              className="btn btn-neutral rounded-none "
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
