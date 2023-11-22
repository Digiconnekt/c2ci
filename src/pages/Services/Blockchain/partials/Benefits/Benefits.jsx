import MainHeading from "../../../../../components/Headings/MainHeading";
import SubHeading from "../../../../../components/Headings/SubHeading";
import Card from "../../../partials/Card";
import { benefits } from "../data";

const Benefits = () => {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MainHeading
          heading={"What are the benefits of blockchain?"}
          align={"center"}
        />
        <SubHeading
          subHeading={
            "Although blockchain is primarily useful as a database for transaction recording, its advantages go well beyond those of a conventional database. The removal of malicious actor tampering is the most notable benefit, and it also offers the following business advantages."
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
