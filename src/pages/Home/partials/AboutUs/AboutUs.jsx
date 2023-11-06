import ButtonHeading from "../../../../components/Headings/ButtonHeading";
import MainHeading from "../../../../components/Headings/MainHeading";

const AboutUs = () => {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-12 items-center md:gap-10 gap-y-10">
          <div className="col-span-12 lg:col-span-6 md:col-span-12">
            <img
              src="../../../../../images/home/about-us.jpg"
              alt="About Us"
              className="h-[450px] object-contain mx-auto"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 md:col-span-12">
            <ButtonHeading heading={"About Us"} align={"left"} />
            <MainHeading heading={"About Our Company"} align={"left"} />
            <div className="mt-3">
              <p className="text-md">
                C2C Innovations has over 40 years built a formidable experience
                in delivering Domain focused technology driven military hardware
                and software products and services to the global markets.The
                company has delivered successfully over 500 projects driven
                through innovation, high quality project management and built a
                reputation of being client responsive and deliver cutting edge
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
