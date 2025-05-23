import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import "./ReadOneItem.css";
import NewCarousel from "./NewCarousel";

const ReadOneItem = () => {
  const [item, setItem] = useState({});
  const [allItems, setAllItems] = useState([]);
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {

    axios
      .get(`http://localhost:5000/readOneItem/${id}`)
      .then((res) => setItem(res.data))
      .catch((err) => console.log("Not read " + err));


    axios
      .get("http://localhost:5000/readAllItem/")
      .then((res) => {

        const others = res.data.filter((i) => i._id !== id).slice(0, 3);
        setAllItems(others);
      })
      .catch((err) => console.log("Error loading suggestions " + err));
  }, [id]);

  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:5000/deleteItem/${id}`)
      .then(() => nav("/readAllItem/"))
      .catch((err) => console.log("Not deleted " + err));
  };

  return (
    <div className="read-one">
  <Container className="py-5">
    <Row className="align-items-center g-5 mb-5">
      <Col md={6}>
        <div className="image-container">
          <img
            src={`http://localhost:5000/images/${item.itemImage}`}
            alt={item.itemName}
            className="img-fluid rounded shadow"
          />
        </div>
      </Col>

      <Col md={6}>
        <div className="item-info">
          <h2 className="item-title">{item.itemName}</h2>
          <h4 className="item-price">${item.itemPrice}</h4>
          <p className="item-description">{item.itemDescription}</p>
          <div className="d-flex gap-3 mt-4">
            <Button variant="warning" href={`/updateItem/${item._id}`}>
              Update
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
  < NewCarousel />
</div>

  );
};

export default ReadOneItem;
