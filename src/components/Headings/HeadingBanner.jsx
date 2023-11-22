/* eslint-disable react/prop-types */

import BreadCrumb from "../BreadCrumb/BreadCrumb";

const HeadingBanner = ({ title, img }) => {
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

        <BreadCrumb img={img} />
      </div>
    </>
  );
};

export default HeadingBanner;
