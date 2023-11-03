/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const HeadingBanner = ({ title, links }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 h-72 bg-c-blue-light">
        <h1 className="text-5xl font-bold text-c-black">{title}</h1>

        <ul className="flex items-center">
          {links?.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-c-blue-dark font-semibold transition-all"
                    : "text-gray-500 hover:text-c-blue-dark transition-all hover:font-semibold"
                }
              >
                {link.text}
              </NavLink>
              {i < links.length - 1 && <span className="mx-1">/</span>}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HeadingBanner;
