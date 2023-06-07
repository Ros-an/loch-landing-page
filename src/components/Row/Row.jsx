import React from "react";
import DescriptionCard from "../DescriptionCard/Card";
import Bell from "../../assets/notifications/Bell.png";
// import { notificationCard } from "../../assets/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useWindowWidth from "../../customHooks/useWindowWidth";

function Row({ isReverse, data }) {
  const width = useWindowWidth();
  console.log("this is width", width);
  return (
    <div className={`row ${isReverse && width > 680 ? "reverse" : ""}`}>
      <DescriptionCard
        detail={data.detail}
        icon={data.icon}
        title={data.title}
        isReverse={isReverse}
      />
      <div className="notification-carousel">
        {data.isCarousel ? (
          <Swiper
            spaceBetween={0}
            slidesPerView={width > 680 ? 2 : 1}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
            }}
            effect="slide"
          >
            {data.carouselData.map((item) => {
              return (
                <SwiperSlide key={item.id} pagination={{ clickable: true }}>
                  <div>
                    <img
                      src={item.imgData}
                      alt={`notification_${item.id}`}
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <img src={data.imgData} alt="whales" width="100%" height="100%" />
        )}
      </div>
    </div>
  );
}

export default Row;
