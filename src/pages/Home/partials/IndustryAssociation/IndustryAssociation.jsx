import MainHeading from "../../../../components/Headings/MainHeading";
import { industryAssociations } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const IndustryAssociation = () => {
  return (
    <>
      <section className="bg-c-blue-light py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MainHeading heading={"Our Industry Assocation"} align={"center"} />

          <div className="pt-8">
            <Swiper
              slidesPerView={6}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper industryAssociation"
            >
              {industryAssociations.map((elem, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={`../../../../../images/home/industry-associations/${elem.img}`}
                    alt={elem.name}
                    className="mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryAssociation;
