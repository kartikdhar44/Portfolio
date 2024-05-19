import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Credits: </h3>
          <a href="https://github.com/soumyajit4419/Portfolio">
        <h3>Soumyajit Dutta</h3>
          </a>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
