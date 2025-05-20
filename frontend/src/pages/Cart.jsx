import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { Container, ListGroup, Image, Row, Col, Button } from "react-bootstrap";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    console.log("🛍️ Cart context:", cart);
  }, [cart]);

  const total = cart.reduce((sum, item) => sum + (item.itemPrice || 0), 0);

  return (
    <Container className="pt-5 mt-5 flex-grow-1" style={{ minHeight: "100vh" }}>
      <h1 className="mb-4">Your Cart</h1>

      {Array.isArray(cart) && cart.length > 0 ? (
        <>
          <ListGroup className="mb-4">
            {cart.map((item, index) => (
              <ListGroup.Item key={index}>
                <Row className="align-items-center">
                  <Col xs={3} md={2}>
                    <Image
                      src={`http://localhost:5000/images/${item.itemImage}`}
                      alt={item.itemName}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col xs={6} md={6}>
                    <strong>{item.itemName}</strong>
                    <div className="text-muted">{item.itemDescription}</div>
                  </Col>
                  <Col xs={3} md={2} className="text-end">
                    ${item.itemPrice?.toFixed(2) || "0.00"}
                  </Col>
                  <Col xs={12} md={2} className="text-end mt-2 mt-md-0">
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <h4 className="mb-3">Total: ${total.toFixed(2)}</h4>

          <Button variant="primary" onClick={() => alert(" Purchase complete!")}>
            Buy
          </Button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </Container>
  );
};

export default Cart;
