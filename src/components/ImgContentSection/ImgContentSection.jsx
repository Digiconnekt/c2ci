/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeInLeft } from "../../helpers/framerMotion";

const ImgContentSection = ({ title, img, content, lgImgFirst, smImgFirst }) => {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
        {/* <div className="grid grid-cols-12 items-center md:gap-10 gap-y-10">
          <div className="col-span-12 md:col-span-6">
            <img src={img} alt={title} className="max-w-lg w-full mx-auto" />
          </div>
          <div className="col-span-12 md:col-span-6">{content}</div>
        </div> */}

        <div className="flex flex-row flex-wrap lg:flex-nowrap items-center space-y-5 lg:space-y-0 lg:space-x-5">
          <motion.div
            className={`basis-full lg:basis-1/2 ${
              lgImgFirst === false && "order-last"
            } ${smImgFirst === false && "order-last lg:order-first"}`}
            variants={fadeInLeft()}
            initial="hidden"
            whileInView="visible"
          >
            <img src={img} alt={title} className="max-w-lg w-full mx-auto" />
          </motion.div>
          <div className="basis-full lg:basis-1/2">{content}</div>
        </div>
      </section>
    </>
  );
};

export default ImgContentSection;
