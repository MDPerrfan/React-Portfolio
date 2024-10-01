import React from "react";
import { useSelector } from "react-redux";
import Preloader from "../Pre";

function Contact() {
  const { loading, portfolioData } = useSelector((state) => state.root);

  if (loading || !portfolioData) {
    return <Preloader />;
  }

  const { contacts2 } = portfolioData;
  console.log(contacts2); // Make sure data is available

  return (
    <section className="contact_section">
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "coral" }}>
        <strong className="coral"> Get in touch</strong>
      </h1>
      <span className="section_subtitle">Contact Me</span>
      <div className="contact_container">
        {contacts2.map((item, index) => (
          <div className="contact_card" key={index}>
            <div className="card">
              <div className="imgBx">
                <img src={item.image} style={{ width: "66%" }} alt={item.title} />
              </div>
              <div className="contentBx">
                <h2>{item.title}</h2>
                <a href={item.contact} target="_blank" rel="noopener noreferrer">
                  Write me
                  <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
