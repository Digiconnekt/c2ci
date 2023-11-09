/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import ButtonHeading from "../../../components/Headings/ButtonHeading";
import HeadingBanner from "../../../components/Headings/HeadingBanner";
import MainHeading from "../../../components/Headings/MainHeading";
import ImgContentSection from "../../../components/ImgContentSection/ImgContentSection";
import { ImCheckmark } from "react-icons/im";
import GetInTouch from "../partials/GetInTouch";
import Benefits from "./partials/Benefits/Benefits";
import { fadeInRight } from "../../../helpers/framerMotion";

const aiMlContent = (
  <>
    <motion.div variants={fadeInRight()} initial="hidden" whileInView="visible">
      <ButtonHeading heading={"AI & ML"} align={"left"} />
      <MainHeading
        heading={
          "Elevate Your Business to the Cloud: Where Innovation Meets Efficiency"
        }
        align={"left"}
      />
      <p className="mt-4 text-md">
        Entransys is a pioneer in the fields of Artificial Learning and Machine
        Learning. Our team is made up of strong industry experts and data
        scientists. Using AL and ML to speed up innovation and change is a
        passion project for our team. In order to meet the specific needs of
        your business, we offer a wide range of services. We create solutions
        for various industries and help them to grow in their business.
      </p>
      <ul className="py-6 grid grid-cols-12 items-start gap-5">
        <li className="col-span-12 lg:col-span-6 flex items-start gap-2 md:gap-3">
          <span className="flex items-center justify-center bg-c-blue-dark w-4 h-4 md:w-6 md:h-6 p-1 md:p-2 rounded-full mt-1">
            <ImCheckmark className="text-white font-bold" />
          </span>
          <p>Delivering measurable results</p>
        </li>
        <li className="col-span-12 lg:col-span-6 flex items-start gap-2 md:gap-3">
          <span className="flex items-center justify-center bg-c-blue-dark w-4 h-4 md:w-6 md:h-6 p-1 md:p-2 rounded-full mt-1">
            <ImCheckmark className="text-white font-bold" />
          </span>
          <p>Tailor our services to meet your business goals</p>
        </li>
      </ul>
    </motion.div>
  </>
);

const unlockContent = (
  <>
    <motion.div variants={fadeInRight()} initial="hidden" whileInView="visible">
      <ButtonHeading heading={"Unlock"} align={"left"} />
      <MainHeading
        heading={"Unlock the Future with Entransys"}
        align={"left"}
      />
      <p className="mt-4 text-md">
        Our AI and ML Services Promote Innovation, Effectiveness, and Success.
        Boost your company's performance with data-driven insights, automation,
        and customized solutions. Join us in shaping a smarter, more competitive
        tomorrow.
      </p>
      <p className="mt-2 text-md">
        Get in touch with Entransys today to learn how we can help you boost
        your business to new heights.
      </p>
      <p className="mt-2 text-md">
        Take a look at our Artificial Learning and Machine Learning services
        today!
      </p>
    </motion.div>
  </>
);

const AiMl = () => {
  return (
    <>
      <main className="pt-[88px]">
        <HeadingBanner title="AI & ML" />

        <ImgContentSection
          title="AI & ML"
          img="https://img.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg?w=740&t=st=1699420449~exp=1699421049~hmac=e41b751ab97dcb224238a75cbf2eb96bd97ed6637d00ee3be59f1c31771d7109"
          content={aiMlContent}
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
      </main>
    </>
  );
};

export default AiMl;
