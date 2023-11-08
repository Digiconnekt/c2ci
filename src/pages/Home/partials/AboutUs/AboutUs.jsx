import ButtonHeading from "../../../../components/Headings/ButtonHeading";
import MainHeading from "../../../../components/Headings/MainHeading";
import { motion } from "framer-motion";
import { fadeInRight } from "../../../../helpers/framerMotion";
import ImgContentSection from "../../../../components/ImgContentSection/ImgContentSection";

const ImgContentSectionContent = (
  <motion.div
    variants={fadeInRight()}
    initial="hidden"
    whileInView="visible"
    className="col-span-12 lg:col-span-6 md:col-span-12"
  >
    <ButtonHeading heading={"About Us"} align={"left"} />
    <MainHeading heading={"About Our Company"} align={"left"} />
    <div className="mt-3">
      <p className="text-md">
        C2C Innovations has over 40 years built a formidable experience in
        delivering Domain focused technology driven military hardware and
        software products and services to the global markets.The company has
        delivered successfully over 500 projects driven through innovation, high
        quality project management and built a reputation of being client
        responsive and deliver cutting edge solutions.
      </p>
    </div>
  </motion.div>
);

const AboutUs = () => {
  return (
    <>
      <ImgContentSection
        img={"../../../../../images/home/about-us.jpg"}
        title={"About Us"}
        content={ImgContentSectionContent}
        lgImgFirst={true}
        smImgFirst={false}
      />
    </>
  );
};

export default AboutUs;
