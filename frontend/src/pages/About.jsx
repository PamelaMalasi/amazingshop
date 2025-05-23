import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="about-full">
      <div className="about">
        <h1>Welcome to Cool Shop</h1>
        <p>Where shopping meets fun, style, and personality ✨</p>
      </div>

      <Container className="py-5">
        <Row className="g-4">
          <Col md={4}>
            <Card className="about-card text-center shadow-sm h-100">
              <Card.Body>
                <div className="emoji">🛍️</div>
                <Card.Title>Trendy Products</Card.Title>
                <Card.Text>
                  From gadgets to fashion — discover cool, curated items for every vibe.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="about-card text-center shadow-sm h-100">
              <Card.Body>
                <div className="emoji">💬</div>
                <Card.Title>Friendly Support</Card.Title>
                <Card.Text>
                  Need help? We’re here to assist you 24/7 💛
                </Card.Text>
                <a href="/contact/">
                  <button className="btn btn-outline-dark mt-3">Contact Us</button>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="about-card text-center shadow-sm h-100">
              <Card.Body>
                <div className="emoji">🚚</div>
                <Card.Title>Fast Delivery</Card.Title>
                <Card.Text>
                  Get your orders quickly and reliably — shipped with care.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>

        <div className="about-note mt-5 text-center">
          <p>
            Cool Shop is more than a store — it's a community that celebrates individuality,
            creativity, and good vibes. Thanks for being here!
          </p>
        </div>
      </Container>
    </div>
  );
};

export default About;
