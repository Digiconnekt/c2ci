/* eslint-disable react/prop-types */
import { LiaAngleRightSolid } from "react-icons/lia";
import { NavLink, useLocation } from "react-router-dom";

const HeadingBanner = ({ title, img }) => {
  const Location = useLocation();

  const breadcrumbLinks = Location.pathname
    .split("/")
    .filter((link) => link !== "");

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img})`,
        }}
        className={`flex flex-col justify-center items-center gap-5 h-72 ${
          img ? "bg-no-repeat bg-cover" : "bg-c-blue-light"
        }`}
      >
        <h1
          className={`text-5xl font-bold ${
            img ? "text-white" : "text-c-blue-dark"
          } `}
        >
          {title}
        </h1>

        <ul className="flex items-center">
          <li className="flex items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${
                      img ? "text-gray-300" : "text-c-blue-dark"
                    }  font-semibold transition-all`
                  : `${
                      img
                        ? "text-gray-400 hover:text-gray-300"
                        : "text-gray-500 hover:text-c-blue-dark"
                    } transition-all hover:font-semibold`
              }
            >
              <i>home</i>
            </NavLink>
            <span className="mx-1 mt-1">
              <LiaAngleRightSolid
                size={12}
                className={`${img ? "text-gray-300" : "text-c-black"}`}
              />
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
                      ? `${
                          img ? "text-gray-300" : "text-c-blue-dark"
                        }  font-semibold transition-all`
                      : `${
                          img
                            ? "text-gray-400 hover:text-gray-300"
                            : "text-gray-500 hover:text-c-blue-dark"
                        } transition-all hover:font-semibold`
                  }
                >
                  <i>{link}</i>
                </NavLink>
                {i < breadcrumbLinks.length - 1 && (
                  <span className="mx-1 mt-1">
                    <LiaAngleRightSolid
                      size={12}
                      className={`${img ? "text-gray-300" : "text-c-black"}`}
                    />
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
