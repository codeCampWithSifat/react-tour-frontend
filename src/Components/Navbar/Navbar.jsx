/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import DarkMode from "./DarkMode";
import ResponsiveMenu from "./ResponsiveMenu";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/best-places",
  },
];

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
        <div className="bg-gradient-to-r from-primary to-secondary text-white ">
          <div className="container py-[2px] md:block hidden">
            <div className="flex items-center justify-between">
              <p className="text-sm">20% off on next booking</p>
              <p>mobile no. +91 123456789</p>
            </div>
          </div>
        </div>

        <div className="container py-3 sm:py-0">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div>
              <Link to="/">
                <img className="h-16" src={logo} alt="" />
              </Link>
            </div>
            {/* Desktop Navlink Section */}
            <div className="md:block hidden">
              <ul className="flex items-center gap-6">
                <li className="py-4">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/blogs" activeclassname="active">
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/places" activeclassname="active">
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/about" activeclassname="active">
                    About
                  </NavLink>
                </li>
                {/* DropDown Section */}

                <li className="group relative cursor-pointer">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Quick Links{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-900 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9  z-[9999] hidden  w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md group-hover:transition-all group-hover:duration-900">
                    <ul className="space-y-3 ">
                      {DropdownLinks.map((data) => (
                        <li key={data.name} className="">
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            {/* Book Now Button */}
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full">
                Book Now
              </button>
              <DarkMode />

              {/* Mobile Hamburger Menu */}
              <div className="md:hidden block">
                {showMenu ? (
                  <RxCross1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </nav>
    </>
  );
};

export default Navbar;
