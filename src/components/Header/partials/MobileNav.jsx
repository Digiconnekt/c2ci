import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  const [isServiceNavClicked, setIsServiceNavClicked] = useState(false);

  const mobLinkDefaultClasses =
    "block text-lg font-medium py-2 px-4 mb-4 rounded-md hover:text-white hover:bg-c-blue-dark transition-all";
  const mobLinkActiveClasses =
    "block text-lg font-medium py-2 px-4 mb-4 rounded-md text-white bg-c-blue-dark transition-all";

  const mobSubLinkDefaultClasses =
    "block text-md font-medium py-2 px-4 mb-4 rounded-md hover:text-white hover:bg-c-blue-dark transition-all";
  const mobSubLinkActiveClasses =
    "block text-md font-medium py-2 px-4 mb-4 rounded-md text-white bg-c-blue-dark transition-all";

  return (
    <>
      <div className="drawer drawer-end md:hidden">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer-4" className="drawer-button">
            <GiHamburgerMenu className="text-2xl ml-auto cursor-pointer" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? mobLinkActiveClasses : mobLinkDefaultClasses
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? mobLinkActiveClasses : mobLinkDefaultClasses
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center justify-between " +
                      mobLinkActiveClasses
                    : "flex items-center justify-between " +
                      mobLinkDefaultClasses
                }
                onClick={() => setIsServiceNavClicked(!isServiceNavClicked)}
              >
                Services{" "}
                <span className="text-sm transition-transform">
                  {isServiceNavClicked ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </NavLink>
              {isServiceNavClicked && (
                <ul>
                  <li>
                    <NavLink
                      to="/services/ai-ml"
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center justify-between " +
                            mobSubLinkActiveClasses
                          : "flex items-center justify-between " +
                            mobSubLinkDefaultClasses
                      }
                    >
                      AI & ML
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/sap"
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center justify-between " +
                            mobSubLinkActiveClasses
                          : "flex items-center justify-between " +
                            mobSubLinkDefaultClasses
                      }
                    >
                      SAP
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/blockchain"
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center justify-between " +
                            mobSubLinkActiveClasses
                          : "flex items-center justify-between " +
                            mobSubLinkDefaultClasses
                      }
                    >
                      Blockchain
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/cloud-computing"
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center justify-between " +
                            mobSubLinkActiveClasses
                          : "flex items-center justify-between " +
                            mobSubLinkDefaultClasses
                      }
                    >
                      Cloud Computing
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive ? mobLinkActiveClasses : mobLinkDefaultClasses
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
