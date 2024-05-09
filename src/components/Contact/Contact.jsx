import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container} from "react-bootstrap";
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
/*         "service_06ucpza",
        "template_g5gp2fs",
        form.current,
        "j0GQwCT3mcYeu2K6h" */
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
<div className="contact" id="contact">
                    <h1 style={{ fontSize: "2.1em", paddingBottom: "20px",color:"coral" }}>
                    <strong className="coral"> Get in touch</strong>
                    </h1>
        <span className="section_subtitle">Contact Me</span>
        <div className="contact_container">
            <div className="contact_content">
                <h3 className="contact_title">Talk to me</h3>
                <div className="contact_info">
                    <div className="contact_card">
                        <i className="bx bxs-envelope contact_card-icon"></i>
                        <h3 className="contact_card-title">Email</h3>
                        <span className="contact_card-data">user@gmail.com</span><br></br>
                        <a href="#" className="contact_button">Write me{" "}
                            <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                        </a>
                    </div>
                    <div className="contact_card">
                        <i className="bx bxl-whatsapp contact_card-icon"></i>
                        <h3 className="contact_card-title">Whatsapp</h3>
                        <span className="contact_card-data">999-888-777</span><br></br>
                        <a href="#" className="contact_button">Write me{" "}
                            <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                        </a>
                    </div>
                    <div className="contact_card">
                        <i className="bx bxl-messenger contact_card-icon"></i>
                        <h3 className="contact_card-title">Messenger</h3>
                        <span className="contact_card-data">user.fb123</span><br></br>
                        <a href="https://m.me/crypticalcoder"className="contact_button">Write me{" "}
                        <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                        </a>
                    </div>
                </div>               
            </div>
            <div className="c-right">
                        <h3 className="contact_title">Write to me</h3>
                        <form ref={form} onSubmit={sendEmail} className="form">
                        <input type="text" name="from_name" className="user" placeholder="Name"/>
                        <input type="email" name="email_id" className="user" placeholder="Email"/>
                        <textarea name="message" className="user" placeholder="Message"/>
                        <input type="submit" value="Send" className="btn-primary" style={{border:"1px solid rgb(131, 133, 133)",padding:"10px",width:"6rem",borderRadius:"10px"}} />
                        
                        <span>{done && "Thanks for Contacting me"}</span>
                        </form>
                    </div>
        </div>            
</div>
</section>
          

  );
};

export default Contact;
