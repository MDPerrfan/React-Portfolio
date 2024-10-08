import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPhp,
  DiJava,
  DiCss3Full,
  DiHtml5
} from "react-icons/di";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px",color:"#45494c" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3Full />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

{/*       <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col> */}
{/*       <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col> */}
{/*       <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col> */}
{/*       <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col> */}
{/*       <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
