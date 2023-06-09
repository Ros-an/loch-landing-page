import React from "react";
import useWindowWidth from "../../customHooks/useWindowWidth";
import Overlay from "../Overlay/Overlay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { MEDIUM } from "../../constants";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

function NotificationCarousel({ carouselData }) {
  const width = useWindowWidth();
  return (
    <Swiper
      spaceBetween={14}
      slidesPerView={width > MEDIUM ? 1.9 : 1}
      modules={[Autoplay]}
      autoplay={{
        delay: 1500,
      }}
      className="row_swiperslide"
    >
      {carouselData.map((item) => (
        <SwiperSlide key={item.id}>
          <img
            src={item.imgData}
            alt={`notification_${item.id}`}
            width={"100%"}
            height={"100%"}
          />
        </SwiperSlide>
      ))}
      {width > MEDIUM && (
        <>
          {/* For Overlay effect over carousel */}
          <Overlay isLeft={true} />
          <Overlay isLeft={false} />
        </>
      )}
    </Swiper>
  );
}

export default NotificationCarousel;
