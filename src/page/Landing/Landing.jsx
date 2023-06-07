import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { notificationCard, testimonials } from "../../assets/data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Bell from "../../assets/notifications/Bell.png";
import Bluela from "../../components/Bluela/Bluela";
import SignUp from "../../components/SignUp/SignUp";
import Card from "../../components/TestimonialCard/Card";
import "./styles.scss";

import React from "react";
import DescriptionCard from "../../components/DescriptionCard/Card";
import Testimonial from "../../components/Testimonial/Testimonial";

function Landing() {
  return (
    <main className="main">
      <Bluela />
      <SignUp />
    </main>
  );
}

export default Landing;
