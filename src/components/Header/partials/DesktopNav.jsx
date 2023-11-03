import { NavLink } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import {
  headerNavLinks,
  desktopLinkActiveClasses,
  desktopLinkDefaultClasses,
  desktopSubLinkActiveClasses,
  desktopSubLinkDefaultClasses,
} from "./data";

const DesktopNav = () => {
  const [isServicesHover, setIsServicesHover] = useState(false);

  return (
    <>
      <nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden md:block">
        <ul className="flex items-center gap-10">
          {headerNavLinks.map((nav, i) =>
            nav.subMenus ? (
              <li className="relative group" key={i}>
                <NavLink
                  to={nav.slug}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-1 " + desktopLinkActiveClasses
                      : "flex items-center gap-1 " + desktopLinkDefaultClasses
                  }
                  onMouseEnter={() => setIsServicesHover(true)}
                  onMouseLeave={() => setIsServicesHover(false)}
                >
                  {nav.title}
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
                  {nav.subMenuLinks.map((subNav, j) => (
                    <li className="p-1 hover:bg-gray-50 rounded-md" key={j}>
                      <NavLink
                        to={subNav.slug}
                        className={({ isActive }) =>
                          isActive
                            ? desktopSubLinkActiveClasses
                            : desktopSubLinkDefaultClasses
                        }
                      >
                        {subNav.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li className="group" key={i}>
                <NavLink
                  to={nav.slug}
                  className={({ isActive }) =>
                    isActive
                      ? desktopLinkActiveClasses
                      : desktopLinkDefaultClasses
                  }
                >
                  {nav.title}
                </NavLink>
                <div className="w-0 group-hover:w-full h-[2px] bg-c-blue-dark transition-all duration-500" />
              </li>
            )
          )}
        </ul>
      </nav>
    </>
  );
};

export default DesktopNav;
