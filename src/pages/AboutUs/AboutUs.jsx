import { motion } from "framer-motion";
import HeadingBanner from "../../components/Headings/HeadingBanner";
import ImgContentSection from "../../components/ImgContentSection/ImgContentSection";
import { fadeInRight } from "../../helpers/framerMotion";
import ButtonHeading from "../../components/Headings/ButtonHeading";
import MainHeading from "../../components/Headings/MainHeading";
import WhyChooseUs from "./partials/WhyChooseUs/WhyChooseUs";
import OneLiner from "../../components/OneLiner/OneLiner";
import Faqs from "../../components/Faqs/Faqs";

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
        C2C Innovations has a remarkable portfolio of more than 200 projects,
        which attests to its dedication to both superior project management and
        innovation. Our constant delivery of cutting-edge solutions meets and
        exceeds the expectations of our clients. We have come to be associated
        with client-centric responsiveness.
      </p>
      <p className="mt-2 text-md">
        C2C Innovations (C2Ci Inc) is part of C2C Group which has been in
        business for over 20 years. The C2C Group started with a domain
        expertise in defense technology and has a strong track record of
        continuously offering global market specialized military hardware and
        software solutions. Today, C2C Group has branched into various
        geographies and become domain agnostic with a deep focus on innovation
        and technology which remains at our core.
      </p>
      <p className="mt-2 text-md">
        We architect, design, engineer, and execute systems, software, and
        digital processes We deliver innovations with over 50 proprietary
        solutions and methodology.
      </p>
    </div>
  </motion.div>
);

const whyC2ciContent = (
  <motion.div
    variants={fadeInRight()}
    initial="hidden"
    whileInView="visible"
    className="col-span-12 lg:col-span-6 md:col-span-12"
  >
    <ButtonHeading heading={"Why"} align={"left"} />
    <MainHeading heading={"Why C2Ci"} align={"left"} />
    <div className="mt-3">
      <p className="text-md">
        We leverage secure & scalable solutions with the integration of
        technologies to develop solutions to translate your visionary ideas into
        reality.
      </p>
      <p className="mt-2 text-md">
        We aim to deliver marketing-led business solutions that define bold
        ambitions.
      </p>
      <p className="mt-2 text-md">
        We are hell-bent on creating the best digital world by creating better
        knowledge on insights, market intelligence, and data analysis.
      </p>
      <p className="mt-2 text-md">
        Our experts help organizations nurture strong and deliver effective and
        outstanding customer experiences
      </p>
      <p className="mt-2 text-md">
        We help you build business efficiency, optimize digital processes and
        accelerate growth in all spheres.
      </p>
    </div>
  </motion.div>
);

const AboutUs = () => {
  return (
    <>
      <main className="pt-[88px]">
        <HeadingBanner title="About Us" />

        <ImgContentSection
          img={"../../../../../images/home/about-us.jpg"}
          title={"About Us"}
          content={aboutusContent}
          firstDivClasses={"order-last lg:order-first"}
        />

        <WhyChooseUs />

        <ImgContentSection
          img={"../../../../../images/home/about-us.jpg"}
          title={"Why C2Ci"}
          content={whyC2ciContent}
          firstDivClasses={"order-last"}
        />

        <OneLiner
          heading={[
            {
              text: "Offering customized resources ",
              color: "text-white",
            },
            {
              text: "at NO Initial Cost, ",
              color: "text-orange-500",
            },
            {
              text: "complete with complimentary project management",
              color: "text-white",
            },
          ]}
        />

        <Faqs />
      </main>
    </>
  );
};

export default AboutUs;
