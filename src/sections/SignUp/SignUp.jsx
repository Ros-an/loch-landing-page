import React, { useState } from "react";
import "./styles.scss";

function SignUp() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    window.location.href = "https://app.loch.one/welcome";
    setEmail("");
  };
  return (
    <section className="signup">
      <div className="signup_body">
        <h2 className="signup_body-title">Sign up for exclusive access.</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Your email address"
            className="signup_body-textbox"
            title="Please enter a valid email address."
            required
          />
          <button type="submit" className="signup_body-button">
            Get Started
          </button>
        </form>
      </div>
      <p className="signup_helpermsg">
        You’ll receive an email with an invite link to join.
      </p>
    </section>
  );
}

export default SignUp;
