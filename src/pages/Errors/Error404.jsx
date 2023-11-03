/* eslint-disable react/no-unescaped-entities */

import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-600 via-gray-800 to-gray-950 h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-9xl font-bold text-white">404</h1>
        <p className="text-3xl text-white mt-4 text-center">
          We couldn't find that page
        </p>
        <p className="text-md text-gray-300 mt-2 text-center">
          Sorry mate, the page you're looking for doesn't exists.
        </p>
        <NavLink
          to="/"
          className="mt-6 py-4 px-6 bg-c-black hover:bg-c-blue-dark text-white rounded-lg hover:underline border border-c-blue-dark transition"
        >
          Back to Home
        </NavLink>
      </div>
    </>
  );
};

export default Error404;
