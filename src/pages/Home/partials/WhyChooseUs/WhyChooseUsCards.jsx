import { fadeInLeft, fadeInRight } from "../../../../helpers/framerMotion";
import { whyChooseUs } from "./data";
import { motion } from "framer-motion";

const WhyChooseUsCards = () => {
  return (
    <>
      <div className="py-8 max-w-5xl mx-auto px-5 grid grid-cols-12 items-center gap-y-10 sm:gap-10 overflow-hidden">
        {whyChooseUs.map((elem, i) => (
          <motion.div
            key={i}
            variants={i === 0 ? fadeInLeft() : i === 2 ? fadeInRight() : null}
            initial="hidden"
            whileInView="visible"
            className="col-span-12 sm:col-span-6 lg:col-span-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 rounded-2xl"
          >
            <elem.icon size={34} className="mx-auto text-c-blue-dark" />
            <h3 className="text-center text-lg text-c-black font-semibold mt-2 mb-1">
              {elem.heading}
            </h3>
            <p className="text-center text-sm text-gray-500">
              {elem.subHeading}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default WhyChooseUsCards;
