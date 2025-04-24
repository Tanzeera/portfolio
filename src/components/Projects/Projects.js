import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={chatify}
              isBlog={false}
              title="TicTacToe"
              description="A responsive Tic Tac Toe game featuring both AI and two-player modes, built with a robust Spring Boot backend. It includes a smart random-move algorithm for the AI opponent, local multiplayer support to play with a friend, and a visually appealing interface crafted entirely with pure CSS—no images involved. The game is fully responsive, ensuring a seamless experience across desktop and mobile devices."
              ghLink="https://github.com/Tanzeera/tictactoe"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Revshop"
              description="E-Commerce Web Application RevShop is a secure, user-friendly e-commerce web application designed to facilitate seamless interactions between buyers and sellers. Built with Java and Spring Boot, it offers a robust platform for managing products, orders, inventory, and payments. The application follows microservice architecture and employs various technologies to ensure scalability, performance, and ease of use."
              ghLink="https://github.com/Tanzeera/revshop-P2"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="Calendar Application"
             
              description="This project is a Communication Management System designed for administrators and users to manage companies, communication methods, and communication scheduling. It provides a comprehensive interface for both admin users (for managing companies and communication methods) and end-users (for tracking communication tasks and scheduling)."
              ghLink="https://github.com/Tanzeera/calender-project"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="Drag-and-Drop"
              description="UThis project implements a drag-and-drop interface for managing tickets in a ticketing system, utilizing the Pragmatic Drag-and-Drop library for a seamless user experience. The UI is styled using Zendesk Garden components and styled-components"
              ghLink="https://github.com/Tanzeera/drag-and-dropI"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              isBlog={false}
              title="FarmFresh"
              description="Designed a cross-platform mobile app using React Native and Java, with Firebase integration for storage and authentication to ensure a seamless and secure user experience."
              ghLink="https://github.com/Tanzeera/farmfresh"
              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
             on"
                    <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
