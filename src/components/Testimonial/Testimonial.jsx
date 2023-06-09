import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Logo from "../../assets/Loch.png";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { testimonials } from "../../data";
import TestimonialCard from "../TestimonialCard/Card";
import useWindowWidth from "../../customHooks/useWindowWidth";
import "./styles.scss";

function Testimonial() {
  const width = useWindowWidth();
  const swiperRef = useRef(null);

  // slides testimonial card on click
  const handleMoveCard = (index) => {
    swiperRef?.current?.swiper.slideTo(index);
  };

  // returns number of card
  const carouselSlideSize = () => {
    if (width > 680 && width < 1024) {
      return 2;
    }
    if (width > 1024) {
      return 1.6;
    }
    return 1;
  };
  return (
    <section className="testimonial">
      <div className="testimonial_header">
        <h2 className="testimonial_title">Testimonials</h2>
        <hr />
      </div>
      <div className="testimonial_carousel">
        <img src={Logo} alt="loch-logo" className="testimonial_carousel-logo" />
        <Swiper
          spaceBetween={20}
          slidesPerView={carouselSlideSize()}
          ref={swiperRef}
        >
          {testimonials.map((item, index) => {
            return (
              <SwiperSlide key={item.id} onClick={() => handleMoveCard(index)}>
                <TestimonialCard
                  name={item.name}
                  designation={item.designation}
                  reviewMsg={item.reviewMsg}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
