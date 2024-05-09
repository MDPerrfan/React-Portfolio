import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Profile_main.jpeg";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section >
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="row">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Mohammed Parves</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              
                <a href="mailto:mdperrfan@gmail.com" target="_blank" className="btn-primary mx-5" style={{textDecoration:"none",padding:"1rem",borderRadius:"10px",marginTop:"4rem"}}>Send Mail <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                </svg></a>
              
            </Col>

            <Col md={5} style={{ paddingBottom: 20,display:"flex",justifyContent:"center" }}>
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{
                marginTop:"6rem",
                maxHeight: "70%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                boxShadow: "inset 0 0 0 9px rgb(255 255 255/ 30%)",
                order: 1,
                justifySelf: "center",
                animation: "profile_animate 8s ease-in-out infinite 1s"
              }}
              />
              <style>{`
                @keyframes profile_animate {
                  0% {
                    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
                  }
                  50% {
                    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
                  }
                  100% {
                    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
                  }
                }
              `}</style>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
