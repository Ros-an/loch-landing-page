import React from "react";
import "./styles.scss";

function DescriptionCard({ icon, title, detail, isReverse }) {
  return (
    <article className={`description ${isReverse ? "reverse" : ""}`}>
      <img src={icon} alt="" className="description_icon" />
      <h2 className="description_title">{title}</h2>
      <p className="description_detail">{detail}</p>
    </article>
  );
}

export default DescriptionCard;
