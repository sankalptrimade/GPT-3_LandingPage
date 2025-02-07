import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>
            500 Terry Francine Street San Francisco, CA 94158, All Rights
            Reserved
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>500 Terry Francine Street San Francisco, CA 94158</p>
          <p>123-456-7890</p>
          <p>info@mysite.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>&#169; 2025 GPT-3. All rights reserved</p>
      </div>
    </div>
  );
};

export default footer;
