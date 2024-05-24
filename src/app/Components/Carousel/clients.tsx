"use client"

import { clientItems, greens } from "@/app/utils/consts";
import Carousel from ".";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const clients = (Component: typeof Carousel) => {
  const WithComponent = ({ clients }: any) => {
    return (
      <Component 
        className="clients-slider swiper"
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false
        }}
        slidesPerView={6}
        speed={4000}
      >
        <div className="wiper-wrapper align-items-center">
          {clientItems.map((item, index) => (
            <SwiperSlide key={index++} className="swiper-slide">
              <div className="swiper-slide">
                <Image 
                  width={100} 
                  height={100} 
                  src={item.src} 
                  className="img-fluid" 
                  alt="" 
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </SwiperSlide>
          ))}
          {clients.map((client: any) => (
            client.fields.logo.map((img: any, index:number) => (
              <SwiperSlide key={index++} className="swiper-slide">
                <div className="swiper-slide">
                  <Image 
                    width={100} 
                    height={100} 
                    src={`https:${img.fields.file.url}`} 
                    className="img-fluid" 
                    alt="" 
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </SwiperSlide>
            ))
          ))}
        </div>
      </Component>
    )
  }
  return WithComponent
};

const ClientCarousel = clients(Carousel)

export default ClientCarousel;


