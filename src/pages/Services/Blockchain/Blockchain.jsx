import { motion } from "framer-motion";
import { ImCheckmark } from "react-icons/im";
import HeadingBanner from "../../../components/Headings/HeadingBanner";
import ImgContentSection from "../../../components/ImgContentSection/ImgContentSection";
import ButtonHeading from "../../../components/Headings/ButtonHeading";
import MainHeading from "../../../components/Headings/MainHeading";
import { fadeInRight } from "../../../helpers/framerMotion";
import GetInTouch from "../partials/GetInTouch";
import SubHeading from "../../../components/Headings/SubHeading";
import Card from "../partials/Card";
import { howItWorks } from "./partials/data";

const ImgContentSectionContent = (
  <>
    <motion.div variants={fadeInRight()} initial="hidden" whileInView="visible">
      <ButtonHeading heading={"Blockchain"} align={"left"} />
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

const Blockchain = () => {
  return (
    <>
      <main className="pt-[88px]">
        <HeadingBanner title="Blockchain" />

        <ImgContentSection
          title="Blockchain"
          img="https://img.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg?w=740&t=st=1699420449~exp=1699421049~hmac=e41b751ab97dcb224238a75cbf2eb96bd97ed6637d00ee3be59f1c31771d7109"
          content={ImgContentSectionContent}
          lgImgFirst={true}
          smImgFirst={true}
        />

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <MainHeading
            heading={"Business Benefits of AI & ML Solutions"}
            align={"center"}
          />
          <SubHeading
            subHeading={
              "A variety of important business advantages provided by AL and ML are revolutionizing how organizations function and make decisions."
            }
            align={"center"}
          />
          <div className="max-w-6xl mx-auto grid grid-cols-12 items-center md:gap-10 gap-y-10 py-14 px-5">
            {howItWorks.map((benefit, i) => (
              <Card data={benefit} i={i} key={i} />
            ))}
          </div>
        </section>

        <GetInTouch />
      </main>
    </>
  );
};

export default Blockchain;
