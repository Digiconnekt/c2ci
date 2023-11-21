/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import ButtonHeading from "../../../components/Headings/ButtonHeading";
import HeadingBanner from "../../../components/Headings/HeadingBanner";
import MainHeading from "../../../components/Headings/MainHeading";
import ImgContentSection from "../../../components/ImgContentSection/ImgContentSection";
import { fadeInRight } from "../../../helpers/framerMotion";
import Benefits from "./partials/Benefits/Benefits";
import GetInTouch from "../partials/GetInTouch";
import IndustryFunctionality from "./partials/IndustryFunctionality/IndustryFunctionality";

const sapContent = (
  <>
    <motion.div variants={fadeInRight()} initial="hidden" whileInView="visible">
      <ButtonHeading heading={"SAP"} align={"left"} />
      <MainHeading
        heading={"What is business SAP ERP software with a growth position?"}
        align={"left"}
      />
      <p className="mt-4 text-md">
        SAP Business is an affordable way to manage your entire organization as
        an integrated whole, including operations, purchasing, sales, inventory,
        project management, and human resources. Small and mid-sized businesses
        can benefit from it by using it to streamline their operations, gain
        deeper operational insights, make decisions more quickly thanks to
        real-time visibility, and encourage expansion and profitability.
      </p>
    </motion.div>
  </>
);

const unlockContent = (
  <>
    <motion.div variants={fadeInRight()} initial="hidden" whileInView="visible">
      <ButtonHeading heading={"Unlock"} align={"left"} />
      <MainHeading
        heading={"Unlock the future with SAP Solutions"}
        align={"left"}
      />
      <p className="mt-4 text-md">
        Delivering outstanding SAP solutions with an emphasis on both
        implementation and consulting is our speciality at C2Ci. We provide
        custom ERP solutions for a range of global sectors, and we have over 15
        years of experience and a CMMI Level 3 accreditation. Transitions from
        ECC to HANA and from legacy systems to SAP are carefully managed by us.
      </p>
      <p className="mt-2 text-md">
        Strategic company transformation is our practice's area of expertise. We
        use proprietary technologies and tried-and-true processes to deliver
        outstanding results at reasonable prices.
      </p>
    </motion.div>
  </>
);

const Sap = () => {
  return (
    <>
      <main className="pt-[88px]">
        <HeadingBanner title="SAP" />

        <ImgContentSection
          title="AI & ML"
          img="https://img.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg?w=740&t=st=1699420449~exp=1699421049~hmac=e41b751ab97dcb224238a75cbf2eb96bd97ed6637d00ee3be59f1c31771d7109"
          content={sapContent}
          firstDivClasses={"order-first"}
        />

        <Benefits />

        <GetInTouch />

        <ImgContentSection
          title="Unlock"
          img="https://img.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg?w=740&t=st=1699420449~exp=1699421049~hmac=e41b751ab97dcb224238a75cbf2eb96bd97ed6637d00ee3be59f1c31771d7109"
          content={unlockContent}
          firstDivClasses={"order-last"}
        />

        <IndustryFunctionality />
      </main>
    </>
  );
};

export default Sap;
