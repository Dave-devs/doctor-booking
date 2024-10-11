import { NavLink, useNavigate } from "react-router-dom"
import { images } from "../constants/images"
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const NavBar = () => {
    const navigate = useNavigate();

    // const [showMenu, setShowMenu] = useState<boolean>(false);
    const [token, setToken] = useState<boolean>(true);

    return (
        <div className="flex flex-col md:flex-row items-center justify-between text-sm py-3 mb-5 border-b border-b-grey-400">
            {/* Logo */}
            <img className="w-44 cursor-pointer" src={images.logo} alt="" />
            {/* Nav Buttons */}
            <ul className="hidden md:flex items-start gap-5 font-medium">
                <NavLink className="" to="/">
                    <li className="py-1">Home</li>
                    <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
                </NavLink>
                <NavLink className="" to="/doctors">
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
                {
                    token
                    // Profile Icon
                        ? <div className="flex items-center gap-2 cursor-pointer group relative">
                            <img className="w-8 h-8 rounded-full" src={images.profile} alt="" />
                            <IoChevronDownOutline className="w-3.5 h-3.5" />
                            {/* DropDown Menu */}
                            <div className="hidden group-hover:block absolute top-0 right-0 pt-14 text-base font-medium text-grey-200 z-20">
                                <div className="min-w-48 bg-accent rounded flex flex-col gap-4 p-4">
                                    <p onClick={() => navigate('/profile')} className="hover:text-black cursor-pointer">My Profile</p>
                                    <p onClick={() => navigate('/my-appointments')} className="hover:text-black cursor-pointer">My Appointments</p>
                                    <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                                </div>
                            </div>
                        </div>
                        // Login Button
                        : <button onClick={() => navigate('/login')} className="hidden md:block bg-primary text-wt py-3 px-8 rounded-full font-light">Create Account</button>
                }

            </div>
        </div>
    )
}

export default NavBar