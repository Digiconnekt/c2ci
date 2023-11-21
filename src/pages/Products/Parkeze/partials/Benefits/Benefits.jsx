import MainHeading from "../../../../../components/Headings/MainHeading";
import { parkezeBenefits } from "./data";

const Benefits = () => {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
        <MainHeading
          heading={"Benefits of Parkeze’ s smart parking solution"}
          align={"center"}
        />

        <div className="grid grid-cols-12 items-center md:gap-10 gap-y-10 py-10">
          {parkezeBenefits.map((benefit, i) => (
            <div
              key={i}
              className="col-span-12 lg:col-span-4 md:col-span-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-10 rounded-lg transition-all duration-300 h-full"
            >
              <div className="w-28 mx-auto">
                <img src={benefit.icon} alt={benefit.heading} />
              </div>
              <h2 className="text-lg font-bold mt-3 text-c-blue-dark text-center">
                {benefit.heading}
              </h2>
              <p className="text-md mt-1 text-justify">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Benefits;
