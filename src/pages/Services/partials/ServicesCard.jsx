import { NavLink } from "react-router-dom";
import MainHeading from "../../../components/Headings/MainHeading";
import SubHeading from "../../../components/Headings/SubHeading";
import { servicesList } from "./data";

const ServicesCard = () => {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MainHeading heading={"C2C Innovations has "} align={"center"} />
        <SubHeading
          subHeading={
            "C2C Innovations has over 40 years built a formidable experience in delivering Domain focused technology driven military hardware and software."
          }
          align={"center"}
        />

        <div className="grid grid-cols-12 items-center md:gap-10 gap-y-10 py-10">
          {servicesList.map((service, i) => (
            <NavLink
              key={i}
              to={`/services/${service.href}`}
              className="col-span-12 md:col-span-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-10 rounded-lg hover:bg-c-blue-light transition-all duration-300"
            >
              <div className="w-28">
                <img
                  src="https://spanning.com/wp-content/uploads/2021/12/cloud-computing-icon.png"
                  alt={service.name}
                />
              </div>
              <h2 className="text-lg font-bold mt-3 text-c-blue-dark">
                {service.name}
              </h2>
              <p className="text-md mt-1 text-justify">{service.text}</p>
            </NavLink>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesCard;
