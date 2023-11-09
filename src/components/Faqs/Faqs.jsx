import { motion } from "framer-motion";
import { useState } from "react";
import ImgContentSection from "../ImgContentSection/ImgContentSection";
import { fadeInRight } from "../../helpers/framerMotion";
import ButtonHeading from "../Headings/ButtonHeading";
import MainHeading from "../Headings/MainHeading";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { faqs } from "./data";

const Faqs = () => {
  const [isFaqClicked, setIsFaqClicked] = useState(0);
  const faqClickHandler = (faq) => setIsFaqClicked(faq);

  const faqContent = (
    <motion.div
      variants={fadeInRight()}
      initial="hidden"
      whileInView="visible"
      className="col-span-12 lg:col-span-6 md:col-span-12"
    >
      <ButtonHeading heading={"Faq's"} align={"left"} />
      <MainHeading heading={"Frequently Asked Questions"} align={"left"} />
      <div className="mt-5">
        {faqs.map((faq, i) => (
          <div key={i} className="mb-4 p-5 rounded-2xl bg-c-blue-light">
            <div
              className="text-lg font-medium flex items-center justify-between gap-1 text-c-black cursor-pointer"
              onClick={() => faqClickHandler(i)}
            >
              {faq.question}
              {isFaqClicked === i ? (
                <FaChevronUp size={15} />
              ) : (
                <FaChevronDown size={15} />
              )}
            </div>
            {isFaqClicked === i && (
              <div className="text-gray-500 mt-2 pt-2 border-t border-gray-300">
                <p className="text-gray-500 text-md">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <>
      <ImgContentSection
        img={"../../../../../images/home/about-us.jpg"}
        title={"Faq"}
        content={faqContent}
        firstDivClasses={"order-first"}
      />
    </>
  );
};

export default Faqs;
