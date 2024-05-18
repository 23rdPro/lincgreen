import { clientItems } from "@/app/utils/consts";
import Carousel from ".";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const clients = ({ Component }: any) => {
  const WithComponent = () => {
    return (
      <Component 
        className="clients-slider swiper"
        modules={[Navigation]}
        autoplay={{
          delay: 4499,
          disableOnInteraction: false
        }}
      >
        <div className="wiper-wrapper align-items-center">
          {clientItems.map((item, index) => (
            <SwiperSlide key={index++} className="swiper-slide">{index}</SwiperSlide>
          ))}
        </div>
      </Component>
    )
  }
  return WithComponent
};

const ClientCarousel = clients(Carousel)

export default ClientCarousel;


{/* <section id="clients" className="clients">
          <div className="container" data-aos="zoom-out">

            <div className="clients-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide"><Image width={100} height={100} src="/assets/img/clients/client-1.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><Image width={100} height={100} src="/assets/img/clients/client-2.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><Image width={100} height={100} src="/assets/img/clients/client-3.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><Image width={100} height={100} src="/assets/img/clients/client-4.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><Image width={100} height={100} src="/assets/img/clients/client-5.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><Image width={100} height={100} src="/assets/img/clients/client-6.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><Image width={100} height={100} src="/assets/img/clients/client-7.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><Image width={100} height={100} src="/assets/img/clients/client-8.png" className="img-fluid" alt="" /></div>
              </div>
            </div>

          </div>
        </section> */}