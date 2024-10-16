import { NavLink, useNavigate } from "react-router-dom";
import { images } from "../constants/images";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [token, setToken] = useState<boolean>(true);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-sm py-3 mb-5 border-b border-b-grey-400">
      {/* Logo */}
      <img
        onClick={() => {
          navigate("/");
          scrollTo(0, 0);
        }}
        className="w-44 cursor-pointer"
        src={images.logo}
        alt=""
      />
      {/* Nav Buttons */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink className="" to="/">
          <li className="py-1">Home</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
        </NavLink>
        <NavLink className="" to="/doctors/:speciality">
          <li className="py-1">All Doctors</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
        </NavLink>
        <NavLink className="" to="/about">
          <li className="py-1">About</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
        </NavLink>
        <NavLink className="" to="/contact">
          <li className="py-1">Contact</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          // Profile Icon
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 h-8 rounded-full" src={images.profile} alt="" />
            <IoChevronDownOutline className="w-3.5 h-3.5" />
            {/* DropDown Menu */}
            <div className="hidden group-hover:block absolute top-0 right-0 pt-14 text-base font-medium text-grey-200 z-20">
              <div className="min-w-48 bg-accent rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          // Login Button
          <button
            onClick={() => navigate("/login")}
            className="hidden md:block bg-primary text-wt py-3 px-8 rounded-full font-light"
          >
            Create Account
          </button>
        )}
        <HiMenuAlt3
          className="w-6 md:hidden"
          onClick={() => setShowMenu(true)}
        />
        {/* ******** Mobile Menu ******** */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-wt transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={images.logo} alt="" />
            <RxCross2 className="w-7" onClick={() => setShowMenu(false)} />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/"><p className="px-4 py-1 rounded inline-block">Home</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors"><p className="px-4 py-1 rounded inline-block">All Doctors</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about"><p className="px-4 py-1 rounded inline-block">About</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact"><p className="px-4 py-1 rounded inline-block">Contact</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
