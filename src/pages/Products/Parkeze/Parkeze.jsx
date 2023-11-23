import HeadingBanner from "../../../components/Headings/HeadingBanner";
import { motion } from "framer-motion";
import { fadeInRight } from "../../../helpers/framerMotion";
import ButtonHeading from "../../../components/Headings/ButtonHeading";
import MainHeading from "../../../components/Headings/MainHeading";
import ImgContentSection from "../../../components/ImgContentSection/ImgContentSection";
import Benefits from "./partials/Benefits/Benefits";
import Features from "./partials/Features/Features";
import LineOfServices from "./partials/LineOfServices/LineOfServices";
import ManagedServices from "./partials/ManagedServices/ManagedServices";

const parkezeContent = (
  <motion.div
    variants={fadeInRight()}
    initial="hidden"
    whileInView="visible"
    className="col-span-12 lg:col-span-6 md:col-span-12"
  >
    <ButtonHeading heading={"Parkeze"} align={"left"} />
    <MainHeading
      heading={"Technology based Smart Solution for all your parking needs"}
      align={"left"}
    />
    <div className="mt-3">
      <p className="text-md">
        With the use of cutting-edge sensors and real-time data processing,
        Parkeze&apos;s smart parking solution can maximize parking spots, lessen
        traffic, and enhance traffic flow in metropolitan regions. For increased
        efficacy and efficiency, integrate our solutions with other smart city
        systems like public transport or traffic management.
      </p>
    </div>
  </motion.div>
);

const unlockContent = (
  <motion.div
    variants={fadeInRight()}
    initial="hidden"
    whileInView="visible"
    className="col-span-12 lg:col-span-6 md:col-span-12"
  >
    <ButtonHeading heading={"Unlock"} align={"left"} />
    <MainHeading
      heading={"Unlock your future with Parkeze’ SMART PARKING TECHNOLOGY"}
      align={"left"}
    />
    <div className="mt-3">
      <p className="text-md">
        Smart parking systems are beginning to provide solutions for urban
        mobility because of digitization. This system makes it possible to
        collect real-time data about parking availability—both inside and
        outside—as well as traffic and road conditions, all thanks to the
        Internet of Things and sensor technology. The services offered by
        Parkeze are designed to help with the difficulties of effectively
        locating parking spots in cities. Furthermore, these services make
        driving easier and more convenient for drivers.
      </p>
    </div>
  </motion.div>
);

const Parkeze = () => {
  return (
    <>
      <main className="pt-[88px]">
        <HeadingBanner title="Parkeze" />

        <ImgContentSection
          img={"../../../../../images/products/parkeze/parkeze.jpg"}
          title={"About Us"}
          content={parkezeContent}
          firstDivClasses={"order-first"}
        />

        <Benefits />

        <Features />

        <LineOfServices />

        <ImgContentSection
          img={"../../../../../images/products/parkeze/unlock.jpg"}
          title={"Unlock"}
          content={unlockContent}
          firstDivClasses={"order-last"}
        />

        <section className="py-14 bg-c-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-5xl leading-snug font-semibold text-white">
              Reliable and trustworthy solutions
            </h2>
            <p className="text-center text-white mt-3">
              Our pioneering offering of tested, fully integrated, end-to-end
              solutions has revolutionised the whole parking experience.
            </p>
          </div>
        </section>

        <ManagedServices />
      </main>
    </>
  );
};

export default Parkeze;
