import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import {
  headerNavLinks,
  mobLinkActiveClasses,
  mobLinkDefaultClasses,
  mobSubLinkActiveClasses,
  mobSubLinkDefaultClasses,
  socialMediaLinks,
} from "./data";

const MobileNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isServiceNavClicked, setIsServiceNavClicked] = useState(false);

  return (
    <>
      <div className="drawer drawer-end md:hidden">
        <input
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
          checked={isDrawerOpen}
          onChange={() => {}}
        />
        <div className="drawer-content">
          <label htmlFor="my-drawer-4" className="drawer-button">
            <GiHamburgerMenu
              className="text-2xl ml-auto cursor-pointer"
              onClick={() => setIsDrawerOpen(true)}
            />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="relative p-4 pt-12 w-80 min-h-full bg-base-200 text-base-content">
            {headerNavLinks.map((nav, i) =>
              nav.subMenus ? (
                <li key={i}>
                  <NavLink
                    to={nav.slug}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center justify-between " +
                          mobLinkActiveClasses
                        : "flex items-center justify-between " +
                          mobLinkDefaultClasses
                    }
                    onClick={() => {
                      setIsServiceNavClicked(!isServiceNavClicked);
                    }}
                  >
                    {nav.title}{" "}
                    <span className="text-sm transition-transform">
                      {isServiceNavClicked ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  </NavLink>
                  {isServiceNavClicked && (
                    <ul className="pl-2 ml-2 border-l-2">
                      {nav.subMenuLinks.map((subMenu, j) => (
                        <li key={j}>
                          <NavLink
                            to={subMenu.slug}
                            className={({ isActive }) =>
                              isActive
                                ? "flex items-center justify-between " +
                                  mobSubLinkActiveClasses
                                : "flex items-center justify-between " +
                                  mobSubLinkDefaultClasses
                            }
                            onClick={() => setIsDrawerOpen(false)}
                          >
                            {subMenu.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={i}>
                  <NavLink
                    to={nav.slug}
                    className={({ isActive }) =>
                      isActive ? mobLinkActiveClasses : mobLinkDefaultClasses
                    }
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {nav.title}
                  </NavLink>
                </li>
              )
            )}

            <span
              className="absolute top-3 right-5"
              onClick={() => setIsDrawerOpen(false)}
            >
              <RxCross2 className="text-2xl" />
            </span>

            {/* social icons */}
            <ul className="flex items-center gap-2 pt-4 border-t-2">
              {socialMediaLinks.map((link, i) => (
                <li
                  key={i}
                  className={`bg-gradient-to-r  w-10 h-10 p-1 flex justify-center items-center rounded-full text-white ${link.bgColor}`}
                >
                  <NavLink to={link.href} target="_blank">
                    <link.icon />
                  </NavLink>
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
