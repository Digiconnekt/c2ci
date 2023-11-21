import MainHeading from "../../../../../components/Headings/MainHeading";
import SubHeading from "../../../../../components/Headings/SubHeading";
import { benefits } from "../data";
import Card from "../../../partials/Card";

const Benefits = () => {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MainHeading
          heading={"Business benefits of SAP Website solution"}
          align={"center"}
        />
        <SubHeading
          subHeading={
            "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. U"
          }
          align={"center"}
        />
        <div className="max-w-6xl mx-auto grid grid-cols-12 items-center md:gap-10 gap-y-10 py-14 px-5">
          {benefits.map((benefit, i) => (
            <Card data={benefit} i={i} key={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Benefits;
