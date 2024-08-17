import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import whatsapp from "../../Assets/—Pngtree—whatsapp icon whatsapp logo_3584844.png"
import mssngr from "../../Assets/mssngr.png"
const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_06ucpza",
                "template_g5gp2fs",
                form.current,
                "j0GQwCT3mcYeu2K6h"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

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
                        <img src={mssngr} />
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
                        <img src={mssngr} />
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
                        <img src={whatsapp} />
                    </div>
                    <div className="contentBx">
                        <h2>WhatsApp</h2>
                        <a href="https://wa.me/01643833176" target="blank">Write me
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
