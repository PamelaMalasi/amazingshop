import { Accordion, Container, Row, Col } from "react-bootstrap";

const Faq = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>How can I track my order?</Accordion.Header>
              <Accordion.Body>
                You'll receive a confirmation email with a tracking number once your order ships.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>What is your return policy?</Accordion.Header>
              <Accordion.Body>
                We accept returns within 14 days of delivery, as long as the item is unused.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Do you offer international shipping?</Accordion.Header>
              <Accordion.Body>
                Yes, we ship internationally. Rates are calculated at checkout.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>How can I contact support?</Accordion.Header>
              <Accordion.Body>
                You can reach us via the contact form below or email support@coolshop.com.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
