import { BiSolidPhone } from "react-icons/bi";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInBottom } from "../../../helpers/framerMotion";

const ContactDetailsCardSection = () => {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-12 justify-center items-center gap-y-10 md:gap-10">
          <motion.div
            variants={fadeInBottom}
            initial="hidden"
            whileInView="visible"
            className="col-span-12 sm:col-span-6 lg:col-span-4 h-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 flex flex-col justify-center items-center rounded-2xl"
          >
            <div className="w-12 h-12 flex justify-center items-center bg-c-blue-dark p-2 rounded-full">
              <MdLocationPin className="text-2xl text-white" />
            </div>
            <p className="text-center mt-3">
              Arcus Park,
              <br />
              Str. 231-233, 04347 Leipzig,
              <br /> Germany
            </p>
          </motion.div>
          <motion.div
            variants={fadeInBottom}
            initial="hidden"
            whileInView="visible"
            className="col-span-12 sm:col-span-6 lg:col-span-4 h-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 flex flex-col justify-center items-center rounded-2xl"
          >
            <div className="w-12 h-12 flex justify-center items-center bg-c-blue-dark p-2 rounded-full">
              <BiSolidPhone className="text-2xl text-white" />
            </div>
            <p className="text-center mt-3">
              +49 340 90040 <br />
              +68 635 04820
            </p>
          </motion.div>
          <motion.div
            variants={fadeInBottom}
            initial="hidden"
            whileInView="visible"
            className="col-span-12 sm:col-span-6 lg:col-span-4 h-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 flex flex-col justify-center items-center rounded-2xl"
          >
            <div className="w-12 h-12 flex justify-center items-center bg-c-blue-dark p-2 rounded-full">
              <MdEmail className="text-2xl text-white" />
            </div>

            <NavLink
              to="#"
              className="mt-3 hover:text-c-blue-dark transition-all"
            >
              info@codeless.co
            </NavLink>
            <NavLink to="#" className="hover:text-c-blue-dark transition-all">
              support@convertatheme.com
            </NavLink>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactDetailsCardSection;
