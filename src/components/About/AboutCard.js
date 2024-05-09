import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineApi } from "react-icons/ai";
import { GiAk47 } from "react-icons/gi";
import { AiTwotoneRocket } from "react-icons/ai";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify",color:"black" }}>
            Hi Everyone, I am <strong className="coral">Parves </strong>
            from <span className="coral"> Chittagong, Bangladesh</span>
            <br />
            I am currently a CS Student.
            <br />
            At Port City International University
            <br />
            <br />
            Beyond coding, I find joy in various activities:!
          </p>
          <ul style={{color:"black"}}>
            <li className="about-activity">
            <GiAk47 /> Gaming
            </li>
            <li className="about-activity">
            <AiOutlineApi />Tech Exploration
            </li>
            <li className="about-activity">
            <AiTwotoneRocket /> Traveling
            </li>
          </ul>
          <br/>
          <p style={{ color: "black" }}>
          "The best thing about a boolean is even if you are wrong, you are only off by a bit."{" "}
          </p>
          <footer className="blockquote-footer">Anonymous</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
