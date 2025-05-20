import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/readAllItem/")
      .then((res) => {
        setItems(res.data.slice(0, 3)); 
      })
      .catch((err) => {
        console.log("Home fetch error:", err);
      });
  }, []);

  return (
    <>
      <div className="hero">
</div>


      <Container className="my-5">
        <Row>
          {items.map((item) => (
            <Col xs={12} md={4} key={item._id}>
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  src={`http://localhost:5000/images/${item.itemImage}`}
                />
                <Card.Body>
                  <Card.Title>{item.itemName}</Card.Title>
                  <Card.Text><strong>${item.itemPrice}</strong></Card.Text>
                  <Button variant="primary" href={`/readOneItem/${item._id}`}>
                    View Item
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
