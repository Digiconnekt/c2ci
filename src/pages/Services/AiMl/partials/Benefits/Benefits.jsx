import { motion } from "framer-motion";
import MainHeading from "../../../../../components/Headings/MainHeading";
import SubHeading from "../../../../../components/Headings/SubHeading";
import { benefits } from "../data";
import { fadeInBottom } from "../../../../../helpers/framerMotion";

const Benefits = () => {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MainHeading
          heading={"Business Benefits of AI & ML Solutions"}
          align={"center"}
        />
        <SubHeading
          subHeading={
            "A variety of important business advantages provided by AL and ML are revolutionizing how organizations function and make decisions."
          }
          align={"center"}
        />
        <div className="max-w-6xl mx-auto grid grid-cols-12 items-center md:gap-10 gap-y-10 py-14 px-5">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              variants={fadeInBottom(i + 1)}
              initial="hidden"
              whileInView="visible"
              className="relative col-span-12 md:col-span-6 lg:col-span-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg p-10 h-full"
            >
              <img
                src={`../../../../../images/services/${benefit.img}`}
                alt={benefit.title}
                className="mx-auto"
              />
              <h3 className="text-center text-lg font-semibold mt-4 text-c-blue-dark">
                {benefit.title}
              </h3>
              <p className="text-md text-center mt-1">{benefit.text}</p>

              <span className="absolute top-0 left-0 bg-c-blue-dark text-white w-12 h-12 rounded-br-3xl flex justify-center items-center">
                {benefit.id}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Benefits;
