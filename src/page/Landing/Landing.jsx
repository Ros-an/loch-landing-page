import React from "react";

import Bluela from "../../components/Bluela/Bluela";
import SignUp from "../../components/SignUp/SignUp";
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
