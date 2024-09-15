import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import textcraft from "../../Assets/Projects/TextCraft.png";
import notebook from "../../Assets/Projects/notebook.png";
import games from "../../Assets/Projects/RPSGame.png";
import resto from "../../Assets/Projects/Screenshot_4.jpg"
import chatt from "../../Assets/Projects/Screenshot_2.jpg"

function Projects() {
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
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatt}
              isBlog={false}
              title="P-Chatt"
              description="Our chat app, built using the MERN stack, provides a seamless messaging experience with Firebase authentication. Users can sign up with their email and engage in real-time chats. The app supports media sharing, allowing users to easily exchange photos, videos, and other files within their conversations. With a secure and user-friendly interface..."
              ghLink="https://github.com/MDPerrfan/chat-app"
              demoLink="https://p-chatt.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resto}
              isBlog={false}
              title="Resto"
              description="Browse through our detailed menu with high-quality images and descriptions of each dish. Whether you’re looking for something specific or just exploring, our menu is easy to navigate.Order your favorite meals directly from the website. Customize your order with special instructions, choose between pick-up or delivery, and track your order status in real-time."
              ghLink="https://github.com/MDPerrfan/Resto-mern"
              demoLink="https://restomern.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textcraft}
              isBlog={false}
              title="TextCraft"
              description="TextCraft is a versatile web application designed to empower users with a suite of text manipulation tools. Whether you're a writer, student, programmer, or just someone who frequently interacts with text, TextCraftprovides a seamless platform to enhance your text processing experience."
              ghLink="https://github.com/MDPerrfan/TextCraft-ReactApp"
              demoLink="https://easytextcraft.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notebook}
              isBlog={false}
              title="My Notebook"
              description="My Notebook is a user-friendly web application designed to help you efficiently manage your notes. Whether you're a student, professional, or anyone needing to organize thoughts and information, My Notebook offers a streamlined platform for creating, editing, and storing your notes securely."
              ghLink="https://github.com/MDPerrfan/Notebook-Frontend"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={games}
              isBlog={false}
              title="Games"
              description="Creating an online Rock-Paper-Scissors game is a fantastic project to practice JavaScript. It combines elements of game logic, user interaction, and sometimes even styling and animations if you add a visual component. You can make it more versatile.Use more sophisticated CSS or libraries like Bootstrap for a better layout."
              ghLink="https://github.com/MDPerrfan/Small_JS_Projects"
              demoLink="https://mdp-rockpaper.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
