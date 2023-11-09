import MainHeading from "../../../../components/Headings/MainHeading";
import SubHeading from "../../../../components/Headings/SubHeading";
import WhyChooseUsCards from "./WhyChooseUsCards";

const WhyChooseUs = () => {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MainHeading heading="Why Choose Us" align="center" />
        <SubHeading
          subHeading="We are committed to innovation, domain expertise, and client-focused partnerships."
          align="center"
        />
        <WhyChooseUsCards />
      </section>
    </>
  );
};

export default WhyChooseUs;
