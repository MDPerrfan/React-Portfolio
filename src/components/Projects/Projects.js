import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { useSelector } from "react-redux";
import Preloader from "../Pre"
function Projects() {
  const {portfolioData,loading}=useSelector((state)=>state.root)
  if (loading || !portfolioData) {
    return <Preloader/>; 
  }
  const {projects} = portfolioData;
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="coral">Works </strong>
        </h1>
        <p>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {projects.map((item, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={item.image}
                isBlog={false}
                title={item.title}
                description={item.description}
                ghLink={item.githubLink}
                demoLink={item.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
