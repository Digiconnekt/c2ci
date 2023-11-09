import { NavLink } from "react-router-dom";
import { servicesList } from "./data";

const ServicesCard = () => {
  return (
    <>
      <div className="grid grid-cols-12 items-center md:gap-10 gap-y-10 py-10">
        {servicesList.map((service, i) => (
          <NavLink
            key={i}
            to={`/services/${service.href}`}
            className="col-span-12 md:col-span-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-10 rounded-lg hover:bg-c-blue-light transition-all duration-300 h-full"
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
    </>
  );
};

export default ServicesCard;
