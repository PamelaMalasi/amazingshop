import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import img1 from '../images/back14.png';
import FaqPart from './FaqPart';
import "./Contact.css";

const Contact = () => {
    const [message, setMessage] = useState("");

  const [newCont, setNewCont] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    setNewCont({ ...newCont, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/createContact/", newCont)
      .then((res) => {
        setMessage("Thank you! Your message has been sent.");
        setNewCont({
          firstName: "",
          lastName: "",
          email: "",
          comment: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setMessage("Something went wrong. Please try again.");
      });
  };
  
  return (
   <>
   
   <div className="contact">
  <div className="contact-inner">
    <div className="left-div1 hero-text text-center">
      <h1 className="contact-text">Contact us</h1>
      <h1 className="description-text">Fast responses and reliable support</h1>
    </div>

    <div className="right_div1">
      <img src={img1} alt="Slide 1" />
    </div>
  </div>
</div>

     
      <Container className="py-5">
      <FaqPart /> 
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow contact-card">
              <Card.Body>
                <h2 className="text-center mb-4">Get in Touch</h2>
               
                  {message && (
                  <div className="alert alert-success text-center mb-4">
                    {message}
                  </div>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="firstName" className="mb-3">
                        <Form.Label>First Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          value={newCont.firstName}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="lastName" className="mb-3">
                        <Form.Label>Last Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          value={newCont.lastName}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="email" className="mb-3">
                    <Form.Label>Email Address *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={newCont.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="comment" className="mb-4">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="comment"
                      value={newCont.comment}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button type="submit" className="contact-button" >
                      Send Message
                    </Button>
                  </div>


                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
