/* eslint-disable react/prop-types */
const SubHeading = ({ subHeading, align }) => {
  return (
    <>
      <h3
        className={`text-md mt-2 max-w-lg text-gray-500 
        ${
          align === "left"
            ? "mr-auto"
            : align === "right"
            ? "ml-auto"
            : align === "center"
            ? "mx-auto text-center"
            : ""
        }
      `}
      >
        {subHeading}
      </h3>
    </>
  );
};

export default SubHeading;
