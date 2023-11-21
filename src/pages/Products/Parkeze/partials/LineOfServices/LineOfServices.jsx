import MainHeading from "../../../../../components/Headings/MainHeading";
import { fadeInLeft, fadeInRight } from "../../../../../helpers/framerMotion";
import { lineOfServices } from "./data";
import { motion } from "framer-motion";

const LineOfServices = () => {
  return (
    <>
      <section className="max-w-[2000px] mx-auto py-16 overflow-hidden">
        <MainHeading heading={"Our Line of services"} align={"center"} />

        <div className="py-10">
          {lineOfServices.map((service, i) =>
            i % 2 === 0 ? (
              <div key={i} className="grid grid-cols-12 items-center gap-y-10">
                <div className="col-span-6">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="col-span-6 p-10 bg-c-blue-light h-full flex flex-col justify-center">
                  <motion.div
                    variants={fadeInRight()}
                    initial="hidden"
                    whileInView="visible"
                  >
                    <h3 className="text-c-blue-dark text-2xl font-semibold mb-4">
                      {service.title}
                    </h3>
                    <p>{service.text}</p>
                  </motion.div>
                </div>
              </div>
            ) : (
              <div key={i} className="grid grid-cols-12 items-center gap-y-10">
                <div className="col-span-6 p-10 bg-gray-50 h-full flex flex-col justify-center">
                  <motion.div
                    variants={fadeInLeft()}
                    initial="hidden"
                    whileInView="visible"
                  >
                    <h3 className="text-c-blue-dark text-2xl font-semibold mb-4">
                      {service.title}
                    </h3>
                    <p>{service.text}</p>
                  </motion.div>
                </div>
                <div className="col-span-6">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default LineOfServices;
