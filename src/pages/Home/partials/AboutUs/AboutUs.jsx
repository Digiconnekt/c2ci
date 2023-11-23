import ButtonHeading from "../../../../components/Headings/ButtonHeading";
import MainHeading from "../../../../components/Headings/MainHeading";
import { motion } from "framer-motion";
import { fadeInRight } from "../../../../helpers/framerMotion";
import ImgContentSection from "../../../../components/ImgContentSection/ImgContentSection";

const aboutusContent = (
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
        C2C Innovations (C2Ci Inc) is part of C2C Group which has been in
        business for over 20 years. The C2C Group started with a domain
        expertise in defense technology and has a strong track record of
        continuously offering global market specialized military hardware and
        software solutions. Today, C2C Group has branched into various
        geographies and become domain agnostic with a deep focus on innovation
        and technology which remains at our core.
      </p>
    </div>
  </motion.div>
);

const AboutUs = () => {
  return (
    <>
      <ImgContentSection
        img={"../../../../../images/home/about.jpg"}
        title={"About Us"}
        content={aboutusContent}
        firstDivClasses={"order-last lg:order-first"}
      />
    </>
  );
};

export default AboutUs;
