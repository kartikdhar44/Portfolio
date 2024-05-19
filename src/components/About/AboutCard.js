import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kartik Dhar </span>
            from <span className="purple"> Jammu & Kashmir, India.</span>
            <br />
            I am currently employed as a Game Programmer at Reliance Games.
            <br />
            I have completed B.Tech in Computer Science and Engineering at UIET, Kurukshetra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Fantasy Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Being a Soccer Freak
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Sic Parvis Magna"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
