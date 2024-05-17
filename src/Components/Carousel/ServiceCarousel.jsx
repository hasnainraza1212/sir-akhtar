import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { serviceCarousel } from "../../utils/utils";
import ServiceCarouselItem from "../ServiceCarouselItem/ServiceCarouselItem";
const ServiceCarousel = ({
  pagination,
  scrollbar,
  navigation,
  loop,
  mousewheel,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Mousewheel, A11y, Autoplay]}
      grabCursor={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }}
      pagination={pagination}
      scrollbar={scrollbar}
      navigation={navigation}
      loop={loop}
      mousewheel={mousewheel}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {" "}
      {serviceCarousel.map((x, i) => (
        <SwiperSlide key={i}>
          <ServiceCarouselItem
            key={i}
            title={x.title}
            src={x.src}
            desc={x.desc}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceCarousel;
