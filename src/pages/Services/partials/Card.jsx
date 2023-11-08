/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeInBottom } from "../../../helpers/framerMotion";

const Card = ({ data, i }) => {
  return (
    <>
      <motion.div
        key={i}
        variants={fadeInBottom(i + 1)}
        initial="hidden"
        whileInView="visible"
        className="relative col-span-12 md:col-span-6 lg:col-span-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg p-10 h-full"
      >
        <img
          src={`../../../../../images/services/${data.img}`}
          alt={data.title}
          className="mx-auto"
        />
        <h3 className="text-center text-lg font-semibold mt-4 text-c-blue-dark">
          {data.title}
        </h3>
        <p className="text-md text-center mt-1">{data.text}</p>

        <span className="absolute top-0 left-0 bg-c-blue-dark text-white w-12 h-12 rounded-tl-lg rounded-br-3xl flex justify-center items-center">
          {data.id}
        </span>
      </motion.div>
    </>
  );
};

export default Card;
