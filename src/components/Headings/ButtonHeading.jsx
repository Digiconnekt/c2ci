/* eslint-disable react/prop-types */
const ButtonHeading = ({ heading, align }) => {
  return (
    <>
      <div
        className={`bg-[#F3F6FF] uppercase max-w-fit text-c-blue-dark text-xs font-semibold py-2 px-5 rounded-sm shadow-sm mb-4 ${
          align === "left"
            ? "mr-auto"
            : align === "right"
            ? "ml-auto"
            : align === "center"
            ? "mx-auto"
            : ""
        }`}
      >
        {heading}
      </div>
    </>
  );
};

export default ButtonHeading;
