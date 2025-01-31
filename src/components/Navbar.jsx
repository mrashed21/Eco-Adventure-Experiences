import { useContext, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CategoryContext } from "../provider/AllDataContext";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { setSelectedCategory } = useContext(CategoryContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const welcomeProfile = () => {
    toast.success(`Welcome ${user?.displayName ? user?.displayName : ""}`, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
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
    setOpen(false);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className="bg-blue-950 text-white sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <div
                className="text-3xl font-bold lg:hidden"
                onClick={() => setOpen(!open)}
              >
                {open ? <IoMdClose /> : <IoMdMenu />}
              </div>
            </div>

            <ul
              tabIndex={0}
              className={`menu menu-sm bg-blue-950 rounded-box z-[1] mt-3 w-52 p-5 gap-3 shadow ${
                open ? "dropdown-content" : "hidden"
              }`}
            >
              <NavLink
                to="/"
                onClick={handleAllCategory}
                className={({ isActive }) =>
                  isActive ? "text-red-600 font-bold" : "text-white"
                }
              >
                Home
              </NavLink>
              {/* <NavLink
                to="/"
                onClick={handleAllCategory}
                className={({ isActive }) =>
                  isActive ? "text-red-600 font-bold" : "text-white"
                }
              >
                All Category
              </NavLink> */}
              <NavLink
                to="/blog"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive ? "text-red-600 font-bold" : "text-white"
                }
              >
                Blog
              </NavLink>
              <NavLink
                to={"/aboutus"}
                className={({ isActive }) =>
                  isActive ? "text-red-600 font-bold" : "text-white"
                }
              >
                About Us
              </NavLink>
              {user && (
                <NavLink
                  to="/update/profile"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "text-red-600 font-bold" : "text-white"
                  }
                >
                  Update Profile
                </NavLink>
              )}
              {user && (
                <NavLink
                  to="/profile"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "text-red-600 font-bold" : "text-white"
                  }
                >
                  My Profile
                </NavLink>
              )}
            </ul>
          </div>
          <p className="text-xs font-medium md:text-xl">Eco-Adventure</p>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-10 px-1">
            <NavLink
              to="/"
              onClick={handleAllCategory}
              className={({ isActive }) =>
                isActive ? "text-red-600 font-bold" : "text-white"
              }
            >
              Home
            </NavLink>
            {/* <NavLink
              to="/"
              onClick={handleAllCategory}
              className={({ isActive }) =>
                isActive ? "text-red-600 font-bold" : "text-white"
              }
            >
              All Category
            </NavLink> */}
            <NavLink
              to={"/aboutus"}
              className={({ isActive }) =>
                isActive ? "text-red-600 font-bold" : "text-white"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-bold" : "text-white"
              }
            >
              Blog
            </NavLink>
            {user && (
              <NavLink
                to="/update/profile"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive ? "text-red-600 font-bold" : "text-white"
                }
              >
                Update Profile
              </NavLink>
            )}
            {user && (
              <NavLink
                onClick={welcomeProfile}
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "text-red-600 font-bold" : "text-white"
                }
              >
                My Profile
              </NavLink>
            )}
          </ul>
        </div>

        <div className="navbar-end ">
          {user && (
            <div
              title={user?.displayName && user?.displayName}
              onClick={navigateProfile}
              className="text-xl flex items-center md:text-3xl cursor-pointer w-10 h-10 rounded-full"
            >
              {user && user?.photoURL ? (
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              ) : (
                <FaRegUserCircle />
              )}{" "}
            </div>
          )}
          {user && user?.email ? (
            <button
              onClick={logOut}
              className="ml-2 btn btn-sm rounded-md md:btn-neutral md:rounded-none"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={navigateLogin}
              className="btn btn-neutral rounded-none"
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
