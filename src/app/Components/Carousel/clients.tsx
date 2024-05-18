import { clientItems, greens } from "@/app/utils/consts";
import Carousel from ".";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const clients = (Component: typeof Carousel) => {
  const WithComponent = () => {
    return (
      <>
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
          </div>
        </Component>

        <section id="stats-counter" className="stats-counter">
          <div className="container" data-aos="fade-up">

            <div className="row gy-4 align-items-center">

              <div className="col-lg-6">
                <Image 
                  width={700} 
                  height={700} 
                  src="/assets/img/stats-img.svg" 
                  alt="" 
                  className="img-fluid" 
                  style={{ width: "auto", height: "auto" }}
                />
              </div>

              <div className="col-lg-6">

                <div className="stats-item d-flex align-items-center">
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                  <p><strong>Happy Clients</strong> consequuntur quae diredo para mesta</p>
                </div>
                <div className="stats-item d-flex align-items-center">
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                  <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                </div>
                <div className="stats-item d-flex align-items-center">
                  <span data-purecounter-start="0" data-purecounter-end="453" data-purecounter-duration="1" className="purecounter"></span>
                  <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                </div>
              </div>

            </div>

          </div>
        </section>
      </>
    )
  }
  return WithComponent
};

const ClientCarousel = clients(Carousel)

export default ClientCarousel;


