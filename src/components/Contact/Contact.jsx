import React from "react";
import whatsapp from "../../Assets/—Pngtree—whatsapp icon whatsapp logo_3584844.png"
import mssngr from "../../Assets/mssngr.png"
import mail from "../../Assets/mail.png"

function Contact(){
    return (
        <section className="contact_section">
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "coral" }}>
                <strong className="coral"> Get in touch</strong>
            </h1>
            <span className="section_subtitle">Contact Me</span>
            <div className="contact_container">
            <div className="contact_card">
                <div className="card">
                    <div className="imgBx">
                        <img src={mail} style={{width:"66%"}} alt="mail"/>
                    </div>
                    <div className="contentBx">
                        <h2>Mail</h2>
                        <a href="mailto:mdperrfan@gmail.com" target="blank">Write me
                            <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact_card">
                <div className="card">
                    <div className="imgBx">
                        <img src={mssngr} alt="messenger"/>
                    </div>
                    <div className="contentBx">
                        <h2>Messenger</h2>
                        <a href="https://m.me/mdparves.erfan.3" target="blank">Write me
                            <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact_card">
                <div className="card">
                    <div className="imgBx">
                        <img src={whatsapp} alt="Whatsapp"/>
                    </div>
                    <div className="contentBx">
                        <h2>WhatsApp</h2>
                        <a href="https://wa.me/+8801643833176" target="blank">Write me
                            <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Contact;
