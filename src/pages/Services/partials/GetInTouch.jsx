import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../../../helpers/framerMotion";

const GetInTouch = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: "url(../../../images/services/services-banner.png)",
        }}
        className="py-16 bg-c-blue-dark bg-no-repeat bg-cover overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 items-center md:gap-10 gap-y-10">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              className="col-span-12 lg:col-span-6"
            >
              <h2 className="text-4xl md:text-5xl text-white font-semibold md:leading-snug">
                Grow your business on your own terms using C2Ci
              </h2>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              className="col-span-12 lg:col-span-6"
            >
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                laudantium tempore omnis minima nulla, corporis est dicta porro
                non cupiditate cumque corrupti animi.
              </p>
              <NavLink
                to={"/contact-us"}
                className="inline-block mt-4 py-2 px-5 rounded-md border border-white text-white font-semibold bg-transparent shadow-lg hover:shadow-none hover:bg-white hover:text-c-blue-dark transition-all"
              >
                Get In Touch
              </NavLink>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
