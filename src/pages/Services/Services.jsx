import HeadingBanner from "../../components/Headings/HeadingBanner";
import MainHeading from "../../components/Headings/MainHeading";
import SubHeading from "../../components/Headings/SubHeading";
import GetInTouch from "./partials/GetInTouch";
import ServicesCard from "./partials/ServicesCard";

const Services = () => {
  return (
    <>
      <main className="pt-[88px]">
        <HeadingBanner title="Services" />

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <MainHeading heading={"C2C Innovations has "} align={"center"} />
          <SubHeading
            subHeading={
              "C2C Innovations has over 40 years built a formidable experience in delivering Domain focused technology driven military hardware and software."
            }
            align={"center"}
          />
          <ServicesCard />
        </section>

        <GetInTouch />
      </main>
    </>
  );
};

export default Services;
