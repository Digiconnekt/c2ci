import { motion } from "framer-motion";
import HeadingBanner from "../../../components/Headings/HeadingBanner";
import ImgContentSection from "../../../components/ImgContentSection/ImgContentSection";
import ButtonHeading from "../../../components/Headings/ButtonHeading";
import MainHeading from "../../../components/Headings/MainHeading";
import { fadeInRight } from "../../../helpers/framerMotion";
import GetInTouch from "../partials/GetInTouch";
import WhyChooseUs from "./partials/WhyChooseUs/WhyChooseUs";

const blockchainContent = (
  <>
    <motion.div variants={fadeInRight()} initial="hidden" whileInView="visible">
      <ButtonHeading heading={"Blockchain"} align={"left"} />
      <MainHeading
        heading={"Creating Businesses with Secure and Decentralized Systems"}
        align={"left"}
      />
      <p className="mt-4 text-md">
        Contact C2Ci Today C2Ci is your partner in the blockchain development
        journey. We are here to propel your company into the decentralized
        future with our cutting-edge solutions. We are always committed to our
        client’s success.
      </p>
    </motion.div>
  </>
);

const Blockchain = () => {
  return (
    <>
      <main className="pt-[88px]">
        <HeadingBanner title="Blockchain" />

        <ImgContentSection
          title="Blockchain"
          img="https://img.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg?w=740&t=st=1699420449~exp=1699421049~hmac=e41b751ab97dcb224238a75cbf2eb96bd97ed6637d00ee3be59f1c31771d7109"
          content={blockchainContent}
          firstDivClasses={"order-first"}
        />

        <WhyChooseUs />

        <GetInTouch />
      </main>
    </>
  );
};

export default Blockchain;
