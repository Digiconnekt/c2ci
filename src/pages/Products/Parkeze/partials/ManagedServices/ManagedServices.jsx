import MainHeading from "../../../../../components/Headings/MainHeading";
import { fadeInBottom } from "../../../../../helpers/framerMotion";
import { managedServices } from "./data";
import { motion } from "framer-motion";

const ManagedServices = () => {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
        <MainHeading
          heading={
            "Our managed services division caters for several environments including"
          }
          align={"center"}
        />

        <div className="grid grid-cols-12 md:gap-10 gap-y-10 py-10">
          {managedServices.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeInBottom(i + 1)}
              initial="hidden"
              whileInView="visible"
              className="col-span-12 md:col-span-6 lg:col-span-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-10 rounded-lg"
            >
              <img src={service.img} alt={service.title} className="mx-auto" />
              <h3 className="text-c-blue-dark text-xl font-semibold text-center mt-3">
                {service.title}
              </h3>
              <ul className="mt-2">
                {service.content.map((elem, i) => (
                  <li key={i} className="py-1 text-center">
                    {elem}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ManagedServices;
