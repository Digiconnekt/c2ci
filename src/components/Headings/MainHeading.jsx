/* eslint-disable react/prop-types */
const MainHeading = ({ heading, align }) => {
  return (
    <>
      <h2
        className={`text-3xl font-bold text-c-blue-dark
        ${
          align === "left"
            ? "text-left"
            : align === "right"
            ? "text-right"
            : align === "center"
            ? "text-center"
            : ""
        }
      `}
      >
        {heading}
      </h2>
    </>
  );
};

export default MainHeading;
