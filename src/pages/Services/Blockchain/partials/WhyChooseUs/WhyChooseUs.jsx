import MainHeading from "../../../../../components/Headings/MainHeading";
import SubHeading from "../../../../../components/Headings/SubHeading";
import Card from "../../../partials/Card";
import { whyChooseUs } from "../data";

const WhyChooseUs = () => {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MainHeading heading={"Why Choose Us?"} align={"center"} />
        <SubHeading
          subHeading={
            "Proven Track Record Entransys takes great pride in being at the cutting edge of blockchain innovation. As a blockchain services provider, we aim to accelerate your company's growth and change."
          }
          align={"center"}
        />
        <div className="max-w-6xl mx-auto grid grid-cols-12 items-center md:gap-10 gap-y-10 py-14 px-5">
          {whyChooseUs.map((benefit, i) => (
            <Card data={benefit} i={i} key={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
