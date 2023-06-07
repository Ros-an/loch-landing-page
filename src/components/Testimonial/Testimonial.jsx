import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Logo from "../../assets/Loch.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { testimonials } from "../../assets/data";
import TestimonialCard from "../TestimonialCard/Card";
import useWindowWidth from "../../customHooks/useWindowWidth";
import "./styles.scss";

function Testimonial() {
  const width = useWindowWidth();

  const carouselSlideSize = () => {
    if (width > 680 && width < 1024) {
      return 2;
    }
    if (width > 1024) {
      return 1.6;
    }
    return 0.7;
  };
  return (
    <section className="testimonial">
      <div className="testimonial_header">
        <h2 className="testimonial_title">Testimonial</h2>
        <hr />
      </div>
      <div className="testimonial_carousel">
        <img src={Logo} alt="loch-logo" className="testimonial_carousel-logo" />
        <Swiper
          spaceBetween={20}
          slidesPerView={carouselSlideSize()}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
          }}
          effect="slide"
        >
          {testimonials.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                // onClick={(item) => console.log("teim", item)}
                pagination={{ clickable: true }}
              >
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
