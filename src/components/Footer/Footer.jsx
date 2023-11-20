import { NavLink } from "react-router-dom";
import { socialMediaLinks } from "../Header/partials/data";
import { LiaCopyright } from "react-icons/lia";
import { footerNavLinks } from "./partials/data";

const Footer = () => {
  return (
    <>
      <footer className="bg-c-blue-light pt-8 md:pt-14 pb-4 md:pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-6">
            <NavLink to="/" className="inline-block">
              <img
                src="../../images/logo.png"
                alt="C2CI"
                className="max-w-[150px] w-full"
              />
            </NavLink>
            <p className="lg:max-w-2xl mt-3 text-md text-c-black">
              C2C Innovations (C2Ci Inc) is part of C2C Group which has been in
              business for over 20 years. The C2C Group started with a domain
              expertise in defense technology and has a strong track record of
              continuously offering global market specialized military hardware
              and software solutions. Today, C2C Group has branched into various
              geographies and become domain agnostic with a deep focus on
              innovation and technology which remains at our core.
            </p>
          </div>
          {footerNavLinks.map((nav, i) => (
            <div
              className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-2"
              key={i}
            >
              <h2 className="text-c-black text-lg font-semibold lg:text-end">
                {nav.title}
              </h2>
              <div className="lg:ml-auto w-14 h-[2px] bg-c-black" />

              <ul className="lg:text-right mt-4">
                {nav.links.map((link, j) => (
                  <li className="mb-1" key={j}>
                    <NavLink
                      to={link.slug}
                      className={({ isActive }) =>
                        isActive
                          ? "text-md font-semibold text-c-blue-dark transition-all"
                          : "text-md hover:font-semibold text-c-black hover:text-c-blue-dark transition-all"
                      }
                    >
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="w-full h-[1px] my-5 bg-gray-300" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 items-center">
          <div className="col-span-12 sm:col-span-6">
            <ul className="flex items-center justify-center sm:justify-start gap-2">
              {socialMediaLinks.map((link, i) => (
                <li
                  key={i}
                  className={`bg-gray-500 hover:bg-gradient-to-r  w-10 h-10 p-1 flex justify-center items-center rounded-full text-white cursor-pointer transition-all duration-300 ${link.bgColor}`}
                >
                  <NavLink to={link.href} target="_blank">
                    <link.icon />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 sm:col-span-6">
            <p className="text-sm flex items-center justify-center sm:justify-end mt-3 sm:mt-0">
              Copyright <LiaCopyright className="mx-0.5" />{" "}
              {new Date().getFullYear()} C2Ci
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
