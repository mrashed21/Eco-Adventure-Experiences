import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-blue-950 text-white">
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
              <NavLink>Home </NavLink>
              <NavLink>Blog</NavLink>
              <NavLink>Contact Now </NavLink>
              <NavLink>Dashboard </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Eco-Adventure Experiences </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-10 px-1">
            <NavLink>Home </NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Contact Now </NavLink>
            <NavLink>Dashboard </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
