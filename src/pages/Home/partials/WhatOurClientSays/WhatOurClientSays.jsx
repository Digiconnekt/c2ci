import MainHeading from "../../../../components/Headings/MainHeading";
import SubHeading from "../../../../components/Headings/SubHeading";
import {
  BiSolidQuoteSingleLeft,
  BiSolidQuoteSingleRight,
} from "react-icons/bi";

import { whatOurClientSays } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./index.css";

const WhatOurClientSays = () => {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <MainHeading
          heading={"What our clients are saying about us"}
          align={"center"}
        />
        <SubHeading
          subHeading={
            "We pride ourselves on providing an exceptional service to our clients on providing an exceptional"
          }
          align={"center"}
        />

        <div className="pt-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            className="mySwiper whatOurCLientSays"
          >
            {whatOurClientSays.map((elem, i) => (
              <SwiperSlide key={i} className="p-4">
                <div className="shadow-[0_5px_8px_rgb(0,0,0,0.12)] border rounded-xl p-10">
                  <div className="avatar flex justify-center">
                    <div className="w-20 rounded-full">
                      <img src={elem.img} alt={elem.name} />
                    </div>
                  </div>
                  <p className="text-sm text-justify mt-3 text-gray-500">
                    <div className="flex mb-1">
                      <BiSolidQuoteSingleLeft
                        size={24}
                        className="-ml-2 text-gray-200"
                      />
                      <BiSolidQuoteSingleLeft
                        size={24}
                        className="-ml-3 text-gray-200"
                      />
                    </div>
                    {elem.message}
                    <div className="flex justify-end mt-1">
                      <BiSolidQuoteSingleRight
                        size={24}
                        className="-ml-2 text-gray-200"
                      />
                      <BiSolidQuoteSingleRight
                        size={24}
                        className="-ml-3 text-gray-200"
                      />
                    </div>
                  </p>
                  <h4 className="text-md font-bold text-center mt-3 text-c-black">
                    {elem.name}
                  </h4>
                  <p className="text-sm text-center mt-0.5 text-gray-500">
                    {elem.profile}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default WhatOurClientSays;
