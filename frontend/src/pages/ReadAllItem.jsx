import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext.jsx";
import "./ReadAllItem.css";
import "react-multi-carousel/lib/styles.css";
import NewCarousel from "./NewCarousel.jsx";

const ReadAllItem = () => {
    const [addedItem, setAddedItem] = useState({});

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
        <div className="shop">
            <Container className="py-5">

                <h1 className="top-picks3 text-center mb-5 collection-text">
                    Our&nbsp;<span style={{ color: "#44cdfb" }}>Cool</span>&nbsp;Collection
                </h1>


                <Row className="g-4">
                    {allItem.map((item) => (
                        <Col xs={12} sm={6} lg={4} key={item._id}>
                            <Card className="shop-card h-100 shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src={`http://localhost:5000/images/${item.itemImage}`}

                                    style={{
                                        height: "300px",
                                        objectFit: "cover",
                                        objectPosition: "top",
                                    }}
                                />
                                <Card.Body className="d-flex flex-column justify-content-between">
                                    <div>
                                        <Card.Title>{item.itemName}</Card.Title>
                                        <Card.Text className="text-muted">${item.itemPrice}</Card.Text>
                                    </div>

                                    <div className="mt-auto d-grid gap-2">
                                        <Button
                                            variant="primary"
                                            href={`/readOneItem/${item._id}`}
                                        >
                                            View Item
                                        </Button>

                                        <Button
                                            variant="success"
                                            onClick={() => {
                                                if (!item || !item._id) {
                                                    console.error("Tried to add item to cart, but it's invalid:", item);
                                                    return;
                                                }

                                                const alreadyInCart = cart.find((i) => i?._id === item._id);
                                                if (alreadyInCart) {
                                                    setAddedItem((prev) => ({ ...prev, [item._id]: "It's already in your cart." }));
                                                } else {
                                                    addToCart(item);
                                                    setAddedItem((prev) => ({ ...prev, [item._id]: "Added to cart!" }));
                                                }

                                                setTimeout(() => {
                                                    setAddedItem((prev) => {
                                                        const copy = { ...prev };
                                                        delete copy[item._id];
                                                        return copy;
                                                    });
                                                }, 3000);
                                            }}
                                        >
                                            Add to Cart
                                        </Button>

                                        {addedItem[item._id] && (
                                            <div className="alert alert-info text-center p-2 m-0">
                                                {addedItem[item._id]}
                                            </div>
                                        )}
                                    </div>
                                </Card.Body>

                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            < NewCarousel />
        </div>
    );
};

export default ReadAllItem;
