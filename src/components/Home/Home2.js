import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useSelector } from "react-redux";

function Home2() {
  const {portfolioData}=useSelector((state)=>state.root)
  const {intros} = portfolioData;
  const {contacts} = portfolioData;
  const{github,linkedin,facebook}=contacts[0];
  const{aboutImageUrl}=intros[0];
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="coral"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm passionate about programming, specializing in web development.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="coral">  HTML, CSS, JavaScript and React.js </b>
              </i>
              <br />
              <br />
              I also possess skills in &nbsp;
              <i>
                <b className="coral">C, PHP, and MySQL </b> 
              </i>
              <br />
              <br />
              I'm working to develop my skilss on <b className="coral">Node.js</b> and
              <i>
                <b className="coral">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="coral"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img style={{borderRadius:"50%"}} src={aboutImageUrl} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="coral">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebookF/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/errfan51?igsh=MXVhZWlwZjQ4NXVteA=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
