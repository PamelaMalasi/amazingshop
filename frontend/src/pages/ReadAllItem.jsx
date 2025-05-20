import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext.jsx"; 
import "./ReadAllItem.css";

const ReadAllItem = () => {
  const { addToCart, cart } = useContext(CartContext);
  const [allItem, setItem] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/readAllItem/")
      .then((res) => setItem(res.data))
      .catch((err) => console.log("Not Show " + err));
  }, []);


  useEffect(() => {
    console.log("🛒 ReadAllItem cart (from context):", cart);
  }, [cart]);

  return (
    <div className="shop-wrapper">
      <Container className="py-5">
        <h1 className="text-center mb-5">🛍️ Our Cool Collection</h1>
        <Row className="g-4">
          {allItem.map((item) => (
            <Col xs={12} sm={6} lg={4} key={item._id}>
              <Card className="shop-card h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={`http://localhost:5000/images/${item.itemImage}`}
                  className="shop-img"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{item.itemName}</Card.Title>
                  <Card.Text className="text-muted">${item.itemPrice}</Card.Text>
                  <Button
                    variant="dark"
                    href={`/readOneItem/${item._id}`}
                    className="mb-2"
                  >
                    View Item
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => {
                      console.log("Adding to cart:", item); 
                      addToCart(item);
                      alert("Added to cart");
                    }}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ReadAllItem;
