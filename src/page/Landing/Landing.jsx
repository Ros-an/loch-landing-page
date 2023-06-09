import React from "react";
import Bluela from "../../sections/Bluela/Bluela";
import SignUp from "../../sections/SignUp/SignUp";
import "./styles.scss";

function Landing() {
  return (
    <main className="main">
      <Bluela />
      <SignUp />
    </main>
  );
}

export default Landing;
