import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wacky from "../../Assets/Projects/wacky.png";
import Augury from "../../Assets/Projects/Augury.png";
import WRB from "../../Assets/Projects/WRB.png";
import AMD from "../../Assets/Projects/AMD.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my personal projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wacky}
              isBlog={false}
              title="WackyBreakout"
              description="This is a Project I worked on during my course on coursera Intermediate OOPS for Unity Game development."
              ghLink="https://github.com/kartikdhar44/Wacky-Breakout"
              demoLink="https://kartikdhar44.github.io/WackyBreakout-WebGL-build/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Augury}
              isBlog={false}
              title="Augury"
              description="This is an RPG game that I created, It is like a basic RPG game. It is set in an medieval era village and follows a simple quest of finding your brother who hasn't come home. You can interact with different NPCs in the game to extract info about your brother and find clues to look for your brother in the game. This game also features Multiplayer in it, which I created using the Photon Unity Networking. In the Multiplayer game you simply either Create a Room or Join a Room in the Lobby by entering the name of the Room and then you will be logged in the multiplayer game where you can play the game with your friends. The Multiplayer features some simple basic controls for now and new features will be added to game in future.

              ."
              ghLink="https://github.com/kartikdhar44/RPG-Multiplayer-Game"
              demoLink="https://youtu.be/_jVrJQjr9oQ"
            />
          </Col>
           
          
        </Row>

        <p style={{ color: "white" }}>
          Here are my other projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WRB}
              isBlog={false}
              title="World Robot Boxing"
              description="This is a Project I worked on during my time in Reliance games. I mainly worked on optimising the development pipeline and code-refactoring
               through the development of editor tools."
              demoLink="https://play.google.com/store/apps/details?id=com.jumpgames.rswrb&hl=en_IN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AMD}
              isBlog={false}
              title="American Dad: Apocalypse Soon"
              description="Another Project I am worked on during my time at Reliance Games.Handled the feature development in the game by using various tech Stacks
                                                  Like Java, C# and used Spring for building Admin Tool Web Application.
                                                  Built API’s using Java and Spring. Coded yaml files for docker."
                                                                                          
              demoLink="https://play.google.com/store/apps/details?id=com.my.ffs.simulator.americandad&hl=en&pli=1"
            />
          </Col>
           
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
