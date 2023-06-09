import React from "react";
import DescriptionCard from "../DescriptionCard/Card";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useWindowWidth from "../../customHooks/useWindowWidth";
import "swiper/swiper.min.css";
import NotificationCarousel from "../NotificationCarousel/NotificationCarousel";

function Row({ isReverse, data }) {
  const width = useWindowWidth();

  return (
    <div className={`row ${isReverse && width > 680 ? "reverse" : ""}`}>
      <DescriptionCard
        detail={data.detail}
        icon={data.icon}
        title={data.title}
        isReverse={isReverse}
      />
      <div className="row-visual-part">
        {data.isCarousel ? (
          <NotificationCarousel carouselData={data.carouselData} />
        ) : (
          <img src={data.imgData} alt="whales" width="100%" height="100%" />
        )}
      </div>
    </div>
  );
}

export default Row;
