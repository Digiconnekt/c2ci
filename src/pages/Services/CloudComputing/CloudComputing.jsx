/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import ButtonHeading from "../../../components/Headings/ButtonHeading";
import HeadingBanner from "../../../components/Headings/HeadingBanner";
import MainHeading from "../../../components/Headings/MainHeading";
import ImgContentSection from "../../../components/ImgContentSection/ImgContentSection";
import { fadeInRight } from "../../../helpers/framerMotion";
import GetInTouch from "../partials/GetInTouch";
import Benefits from "./partials/Benefits/Benefits";
import ConsistentExp from "./partials/ConsistentExp/ConsistentExp";

const cloudComputingContent = (
  <>
    <motion.div variants={fadeInRight()} initial="hidden" whileInView="visible">
      <ButtonHeading heading={"Cloud Computing"} align={"left"} />
      <MainHeading heading={"Contact c2ci Today"} align={"left"} />
      <p className="mt-4 text-md">
        Build with c2ci now. Whether you need database storage, content
        delivery, processing power, or other features, c2ci offers the services
        you need to create complex apps that are more dependable, flexible, and
        cost saving.
      </p>
      <p className="mt-2 text-md">
        Cloud computing is the pay-as-you-go online distribution of IT resources
        on demand. A cloud provider may be obtained as needed to obtain
        technology services such as processing power, storage, and databases
        instead of purchasing, operating, and maintaining physical data centers
        and servers. Enterprises of all shapes and sizes use cloud computing for
        various purposes, including email, virtual desktops, disaster recovery,
        software development and testing, big data analytics, and online apps
        that interact with customers.
      </p>
    </motion.div>
  </>
);

const unlockContent = (
  <>
    <motion.div variants={fadeInRight()} initial="hidden" whileInView="visible">
      <ButtonHeading heading={"Unlock"} align={"left"} />
      <MainHeading heading={"Unlock The Future With c2ci"} align={"left"} />
      <p className="mt-4 text-md">
        Compared to conventional IT break-fix, c2ci support provides far more.
        We help you recover faster from operational disruptions and offer
        proactive planning and communications, consulting services, automation,
        and cloud experience to enable you to accomplish business objectives in
        the cloud more quickly and on a larger scale.
      </p>
      <p className="mt-2 text-md">
        Our Support engineering staff can offer you general guidance,
        troubleshooting, best practice assistance, how-to advice, and
        Operational Support. They are trained in all technological disciplines
        covered by c2ci. To give you strategic advice to flourish in the cloud,
        c2ci Support uses the expertise and insights of c2ci, the world's most
        widely used cloud platform, with excellent services and innovative
        clients.
      </p>
    </motion.div>
  </>
);

const CloudComputing = () => {
  return (
    <>
      <main className="pt-[88px]">
        <HeadingBanner title="Cloud Computing" />

        <ImgContentSection
          title="Cloud Computing"
          img="https://img.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg?w=740&t=st=1699420449~exp=1699421049~hmac=e41b751ab97dcb224238a75cbf2eb96bd97ed6637d00ee3be59f1c31771d7109"
          content={cloudComputingContent}
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

        <section className="py-14 bg-c-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-5xl leading-snug font-semibold text-white">
              C2Ci Support Accelerate Business Outcomes In The Cloud
            </h2>
            <p className="text-center text-white mt-3">
              Workload diagnostics, quicker response times, and incident
              management programs can help you increase uptime and secure your
              cloud environment.
            </p>
          </div>
        </section>

        <ConsistentExp />
      </main>
    </>
  );
};

export default CloudComputing;
