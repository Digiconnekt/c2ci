/* eslint-disable react/prop-types */
import { LiaAngleRightSolid } from "react-icons/lia";
import { NavLink, useLocation } from "react-router-dom";

const HeadingBanner = ({ title }) => {
  const Location = useLocation();

  const breadcrumbLinks = Location.pathname
    .split("/")
    .filter((link) => link !== "");

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 h-72 bg-c-blue-light">
        <h1 className="text-5xl font-bold text-c-black">{title}</h1>

        <ul className="flex items-center">
          <li className="flex items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-c-blue-dark font-semibold transition-all"
                  : "text-gray-500 hover:text-c-blue-dark transition-all hover:font-semibold"
              }
            >
              <i>home</i>
            </NavLink>
            <span className="mx-1 mt-1">
              <LiaAngleRightSolid size={12} />
            </span>
          </li>
          {breadcrumbLinks?.map((link, i) => {
            const linkPath = `/${breadcrumbLinks.slice(0, i + 1).join("/")}`;

            return (
              <li key={i} className="flex items-center">
                <NavLink
                  to={linkPath}
                  className={({ isActive }) =>
                    isActive
                      ? "text-c-blue-dark font-semibold transition-all"
                      : "text-gray-500 hover:text-c-blue-dark transition-all hover:font-semibold"
                  }
                >
                  <i>{link}</i>
                </NavLink>
                {i < breadcrumbLinks.length - 1 && (
                  <span className="mx-1 mt-1">
                    <LiaAngleRightSolid size={12} />
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default HeadingBanner;
