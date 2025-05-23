import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { CartContext } from "../context/CartContext.jsx";
import "react-multi-carousel/lib/styles.css";
import img1 from '../images/back11.png';
import img2 from '../images/back12.png';
import img3 from '../images/back13.png';
import NewCarousel from "./NewCarousel";
import "./Home.css";

const Home = () => {
    const [newItem, setNewItem] = useState(null);

    const { cart, addToCart } = useContext(CartContext);

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/readAllItem/")
            .then((res) => {
                setItems(res.data.slice(0, 9));
            })
            .catch((err) => {
                console.log("Home fetch error:", err);
            });
    }, []);

    return (
        <>
            <div className="home">
                <div className="left-div home-text text-center">
                    <h1 className="yellow-text">SHOP THE</h1>
                    <h1 className="purple-text">COOLEST</h1>
                    <h1 className="yellow-text">ITEMS</h1>
                </div>


                <div className="right_div">
                    <Carousel interval={3000} pause={false} controls={false}>
                        <Carousel.Item>
                            <img src={img1} className="img-fluid" alt="imazhi 1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img2} className="img-fluid" alt="imazhi 2" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img3} className="img-fluid" alt="imazhi 3" />
                        </Carousel.Item>
                    </Carousel>


                </div>
            </div>

            <Container className="my-5">
                <div className="top-picks">
                    <h2>Top Picks</h2>
                </div>
            </Container>



            <Container className="my-5">

                <Row>
                    {items.map((item) => (
                        <Col xs={12} md={4} key={item._id}>
                            <Card className="mb-4">
                                <Card.Img
                                    variant="top"
                                    src={`http://localhost:5000/images/${item.itemImage}`}
                                    style={{
                                        height: "300px",
                                        objectFit: "cover",
                                        objectPosition: "top",
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title>{item.itemName}</Card.Title>
                                    <Card.Text><strong>${item.itemPrice}</strong></Card.Text>

                                    <Button variant="primary" href={`/readOneItem/${item._id}`} className="me-2">
                                        View Item
                                    </Button>

                                    <Button
                                        variant="success"
                                        onClick={() => {
                                            const alreadyInCart = cart.find((i) => i._id === item._id);
                                            if (alreadyInCart) {
                                                setNewItem("already-" + item._id);
                                            } else {
                                                addToCart(item);
                                                setNewItem(item._id);
                                            }
                                            setTimeout(() => setNewItem(null), 2000);
                                        }}
                                    >
                                        Add to Cart
                                    </Button>

                                    {newItem === item._id && (
                                        <div className="text-success mt-2">Added to cart!</div>
                                    )}
                                    {newItem === "already-" + item._id && (
                                        <div className="text-warning mt-2">Already in cart</div>
                                    )}
                                </Card.Body>


                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            < NewCarousel />

        </>
    );


};

export default Home;
