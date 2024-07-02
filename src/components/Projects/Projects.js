import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
/* import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png"; */
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
/* import suicide from "../../Assets/Projects/suicide.png";
 */import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="TextCraft"
              description="TextCraft is a versatile web application designed to empower users with a suite of text manipulation tools. Whether you're a writer, student, programmer, or just someone who frequently interacts with text, TextCraftprovides a seamless platform to enhance your text processing experience."
              ghLink="https://github.com/MDPerrfan/TextCraft-ReactApp"
              demoLink="https://easytextcraft.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="My Notebook"
              description="My Notebook is a user-friendly web application designed to help you efficiently manage your notes. Whether you're a student, professional, or anyone needing to organize thoughts and information, My Notebook offers a streamlined platform for creating, editing, and storing your notes securely."
              ghLink="https://github.com/MDPerrfan/Notebook-Frontend"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Game"
              description="Creating an online Rock-Paper-Scissors game is a fantastic project to practice JavaScript. It combines elements of game logic, user interaction, and sometimes even styling and animations if you add a visual component. You can make it more versatile.Use more sophisticated CSS or libraries like Bootstrap for a better layout."
              ghLink="https://github.com/MDPerrfan/Small_JS_Projects"
              demoLink="https://mdp-rockpaper.netlify.app/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
