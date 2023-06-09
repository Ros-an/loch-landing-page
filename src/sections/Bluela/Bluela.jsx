import React from "react";
import "./styles.scss";
import Row from "../../components/Row/Row";
import { features } from "../../data";
import Testimonial from "../../components/Testimonial/Testimonial";

function Bluela() {
  return (
    <section className="bluela">
      {features.map((feat, index) => {
        return (
          <Row
            key={feat.id}
            data={feat}
            isReverse={index % 2 === 0 ? false : true}
          />
        );
      })}
      <Testimonial />
    </section>
  );
}

export default Bluela;
