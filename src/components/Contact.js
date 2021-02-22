import React from "react";
import Icon1 from "../images/icon1.svg";
import Icon2 from "../images/icon2.svg";
import Icon3 from "../images/icon3.svg";
import Icon4 from "../images/icon4.svg";

const Contact = ({ contactRef }) => {
  return (
    <section className="contact" ref={contactRef}>
      <h1>Contact</h1>
      <div className="line-skills" />
      <div className="contact-content">
        <div className="contact-item">
          <img src={Icon1} alt={"website"} />
          <h2>zhafranth.github.io/portofolio/</h2>
        </div>
        <div className="contact-item">
          <img src={Icon2} alt={"website"} />
          <h2>zhafranth@gmail.com</h2>
        </div>
        <div className="contact-item">
          <img src={Icon3} alt={"website"} />
          <h2>Jakarta, Indonesia</h2>
        </div>
        <div className="contact-item">
          <img src={Icon4} alt={"website"} />
          <h2>0821-9134-0616</h2>
        </div>
        {/* {data.contact.map((item, index) => {
          return (
          );
        })} */}
      </div>
    </section>
  );
};

export default Contact;
