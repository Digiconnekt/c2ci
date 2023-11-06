import { whyChooseUs } from "./data";

const WhyChooseUsCards = () => {
  return (
    <>
      <div className="py-8 max-w-5xl mx-auto grid grid-cols-12 items-center gap-y-10 sm:gap-10">
        {whyChooseUs.map((elem, i) => (
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 rounded-2xl"
            key={i}
          >
            <elem.icon size={34} className="mx-auto text-c-blue-dark" />
            <h3 className="text-center text-lg text-c-black font-semibold mt-2 mb-1">
              {elem.heading}
            </h3>
            <p className="text-center text-sm text-gray-500">
              {elem.subHeading}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhyChooseUsCards;
