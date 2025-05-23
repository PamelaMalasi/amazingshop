import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
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
    Object.entries(newItem).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      await axios.post("http://localhost:5000/createItem/", formData);
      nav("/readAllItem/");
    } catch (err) {
      console.error("Error creating item:", err);
    }
  };

  return (
<div style={{ background: "#f9f9f9", minHeight: "100vh", paddingTop: "140px" }}>
      <Container className="pb-5">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <Card className="shadow-sm p-4">
              <h2 className="text-center mb-4">Create New Item</h2>

              <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <Form.Group className="mb-3" controlId="itemTitle">
                  <Form.Label>Item Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="itemName"
                    value={newItem.itemName}
                    onChange={handleChange}
                    placeholder="Enter item title"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="itemPrice">
                  <Form.Label>Item Price ($)</Form.Label>
                  <Form.Control
                    type="number"
                    name="itemPrice"
                    value={newItem.itemPrice}
                    onChange={handleChange}
                    step="0.01"
                    placeholder="Enter price"
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

                {imageShow && (
                  <div className="text-center mb-4">
                    <img
                      src={imageShow}
                      className="img-fluid rounded"
                      alt="Preview"
                      style={{ maxHeight: "250px", objectFit: "contain" }}
                    />
                  </div>
                )}

                <Form.Group className="mb-4" controlId="itemDescription">
                  <Form.Label>Item Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="itemDescription"
                    value={newItem.itemDescription}
                    onChange={handleChange}
                    placeholder="Enter item details"
                    required
                  />
                </Form.Group>

                <Button type="submit" variant="success" className="w-100">
                  ➕ Add Item
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateItem;
