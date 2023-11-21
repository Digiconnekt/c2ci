import { motion } from "framer-motion";
import MainHeading from "../../../../../components/Headings/MainHeading";
import SubHeading from "../../../../../components/Headings/SubHeading";
import { industryFunctionalities } from "../data";
import { fadeInBottom } from "../../../../../helpers/framerMotion";

const IndustryFunctionality = () => {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
        <MainHeading
          heading={
            "Vertical industry functionality, fully integrated within SAP"
          }
          align={"center"}
        />
        <SubHeading
          subHeading="Visit our vertical industries pages to find out more about SAP for particular industries."
          align="center"
        />

        <div className="grid grid-cols-12 items-center md:gap-10 gap-y-10 py-10">
          {industryFunctionalities.map((elem, i) => (
            <motion.div
              key={i}
              variants={fadeInBottom()}
              initial="hidden"
              whileInView="visible"
              className="col-span-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg p-5 flex items-center gap-5 h-full"
            >
              <img src={elem.img} alt={elem.title} />
              <div>
                <h3 className="text-c-blue-dark text-lg font-semibold">
                  {elem.title}
                </h3>
                <p className="text-sm mt-1">{elem.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default IndustryFunctionality;
