import React from "react";
import "./styles.scss";
import useWindowWidth from "../../customHooks/useWindowWidth";

function TestimonialCard({ name, designation, reviewMsg }) {
  return (
    <article className="card">
      <div className="card_top">
        <p className="name">{name}</p>
        <p className="designation">{designation}</p>
      </div>
      <div className="card_bottom">
        <p className="review-msg">{reviewMsg}</p>
      </div>
    </article>
  );
}

export default TestimonialCard;
