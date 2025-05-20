import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const CreateItem = () => {
  const nav = useNavigate();

  const [newItem, setNewItem] = useState({
    itemName: "",
    itemDescription: "",
    itemPrice: "",
    itemImage: ""
  });

  const [imageShow, setImageShow] = useState(null);

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setNewItem({ ...newItem, itemImage: file });
    setImageShow(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("itemName", newItem.itemName);
    formData.append("itemDescription", newItem.itemDescription);
    formData.append("itemPrice", newItem.itemPrice);
    formData.append("itemImage", newItem.itemImage);

    try {
      await axios.post("http://localhost:5000/createItem/", formData);
      nav("/readAllItem/");
    } catch (err) {
      console.error("Error creating item:", err);
    }
  };

  return (
    <Container className="pt-5 mt-5" style={{ minHeight: "100vh" }}>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h1 className="text-center mb-4">Create Item</h1>
          <Form onSubmit={handleSubmit} encType="multipart/form-data">

            <Form.Group className="mb-3" controlId="itemTitle">
              <Form.Label>Item Title</Form.Label>
              <Form.Control
                type="text"
                name="itemName"
                value={newItem.itemName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="itemPrice">
              <Form.Label>Item Price</Form.Label>
              <Form.Control
                type="number"
                name="itemPrice"
                value={newItem.itemPrice}
                onChange={handleChange}
                step="0.01"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="itemImage">
              <Form.Label>Item Image</Form.Label>
              <Form.Control
                type="file"
                name="itemImage"
                accept="image/*"
                onChange={handleImage}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="itemDescription">
              <Form.Label>Item Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="itemDescription"
                value={newItem.itemDescription}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button type="submit" variant="dark" className="w-100">
              Add Item
            </Button>
          </Form>

          {imageShow && (
            <div className="mt-4 text-center">
              <img
                src={imageShow}
                className="img-fluid rounded"
                alt="Preview"
                style={{ maxHeight: "300px", objectFit: "contain" }}
              />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CreateItem;
