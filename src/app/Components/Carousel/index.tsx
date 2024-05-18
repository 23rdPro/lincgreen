import React from 'react';
import { Swiper } from "swiper/react";

const Carousel = ({
  className, 
  slidesPerView,
  modules,
  autoplay,
  speed,
  spaceBetween,
  navigation,
  pagination,
  onActiveIndexChange,
  fadeEffect,
  effect,
  ...props 
}: any) => {
  return (
    <Swiper
      modules={modules}
      autoplay={autoplay}
      speed={speed}
      slidesPerView={slidesPerView}
      className={className}
      spaceBetween={spaceBetween}
      navigation={navigation}
      pagination={pagination}
      fadeEffect={fadeEffect}
      effect={effect}
    >{props.children}</Swiper>
  )
};

export default Carousel;