import { NavLink } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import MobileNav from "./partials/MobileNav";

const Header = () => {
  const [isServicesHover, setIsServicesHover] = useState(false);

  const mainLinkDefaultClasses =
    "block text-md transition-all py-3 text-black font-semibold border-b-[2px] border-transparent hover:text-c-blue-dark";
  const mainLinkActiveClasses =
    "block text-md transition-all py-3 text-c-blue-dark font-semibold border-b-[2px] border-c-blue-dark";

  const subLinkDefaultClasses =
    "block text-sm font-medium py-1 px-2 rounded-md hover:text-white hover:bg-c-blue-dark transition-all";
  const subLinkActiveClasses =
    "block text-sm font-medium py-1 px-2 rounded-md text-white bg-c-blue-dark transition-all";

  return (
    <>
      <header className="sm:flex sm:justify-between py-3 px-4 border-b">
        <div className="w-full max-w-7xl mx-auto">
          <div className="sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
            <div className="flex items-center">
              <NavLink to="/">
                <img
                  src="../../images/logo.png"
                  alt="C2CI"
                  className="max-w-[150px] w-full"
                />
              </NavLink>
            </div>

            {/* mobile menu start */}
            <MobileNav />
            {/* mobile menu end */}

            {/* desktop menus */}
            <nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden md:block">
              <ul className="flex items-center gap-10">
                <li className="group">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? mainLinkActiveClasses : mainLinkDefaultClasses
                    }
                  >
                    Home
                  </NavLink>
                  <div className="w-0 group-hover:w-full h-[2px] bg-c-blue-dark transition-all duration-500" />
                </li>
                <li className="group">
                  <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                      isActive ? mainLinkActiveClasses : mainLinkDefaultClasses
                    }
                  >
                    About Us
                  </NavLink>
                  <div className="w-0 group-hover:w-full h-[2px] bg-c-blue-dark transition-all duration-500" />
                </li>
                <li className="relative group">
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-1 " + mainLinkActiveClasses
                        : "flex items-center gap-1 " + mainLinkDefaultClasses
                    }
                    onMouseEnter={() => setIsServicesHover(true)}
                    onMouseLeave={() => setIsServicesHover(false)}
                  >
                    Services
                    <span className="text-sm transition-transform">
                      {isServicesHover ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </NavLink>
                  <div className="w-0 group-hover:w-full h-[2px] bg-c-blue-dark transition-all duration-500" />

                  <ul
                    onMouseEnter={() => setIsServicesHover(true)}
                    onMouseLeave={() => setIsServicesHover(false)}
                    className="absolute right-0 border-2 border-c-blue-light shadow-sm bg-white w-48 p-1 rounded-md hidden group-hover:block"
                  >
                    <li className="p-1 hover:bg-gray-50 rounded-md">
                      <NavLink
                        to="/services/ai-ml"
                        className={({ isActive }) =>
                          isActive
                            ? subLinkActiveClasses
                            : subLinkDefaultClasses
                        }
                      >
                        AI & ML
                      </NavLink>
                    </li>
                    <li className="p-1 hover:bg-gray-50 rounded-md">
                      <NavLink
                        to="/services/sap"
                        className={({ isActive }) =>
                          isActive
                            ? subLinkActiveClasses
                            : subLinkDefaultClasses
                        }
                      >
                        SAP
                      </NavLink>
                    </li>
                    <li className="p-1 hover:bg-gray-50 rounded-md">
                      <NavLink
                        to="/services/blockchain"
                        className={({ isActive }) =>
                          isActive
                            ? subLinkActiveClasses
                            : subLinkDefaultClasses
                        }
                      >
                        Blockchain
                      </NavLink>
                    </li>
                    <li className="p-1 hover:bg-gray-50 rounded-md">
                      <NavLink
                        to="/services/cloud-computing"
                        className={({ isActive }) =>
                          isActive
                            ? subLinkActiveClasses
                            : subLinkDefaultClasses
                        }
                      >
                        Cloud Computing
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="group">
                  <NavLink
                    to="/contact-us"
                    className={({ isActive }) =>
                      isActive ? mainLinkActiveClasses : mainLinkDefaultClasses
                    }
                  >
                    Contact Us
                  </NavLink>
                  <div className="w-0 group-hover:w-full h-[2px] bg-c-blue-dark transition-all duration-500" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
