import React from "react";
import "./styles.scss";

function Overlay({ isLeft = true }) {
  return <div className={`overlay ${isLeft ? "left" : "right"}`}></div>;
}

export default Overlay;
