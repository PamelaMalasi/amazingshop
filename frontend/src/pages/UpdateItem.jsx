import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const UpdateItem = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const [updateItem, setUpdateItem] = useState({
    itemName: "",
    itemDescription: "",
    itemPrice: "",
    itemImage: ""
  });

  const [imageShow, setImageShow] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/readOneItem/" + id);
        setUpdateItem(res.data);
      } catch (err) {
        console.error("Failed to fetch item:", err);
      }
    };
    getData();
  }, [id]);

  const handleChange = (e) => {
    setUpdateItem({ ...updateItem, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setUpdateItem({ ...updateItem, itemImage: e.target.files[0] });
    setImageShow(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(updateItem).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      await axios.patch("http://localhost:5000/updateItem/" + id, formData);
      nav("/readAllItem/");
    } catch (err) {
      console.error("Failed to update item:", err);
    }
  };

  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <Card className="shadow-sm p-4">
              <h2 className="text-center mb-4">Update Item</h2>
              <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <Form.Group className="mb-3" controlId="itemTitle">
                  <Form.Label>Item Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="itemName"
                    value={updateItem.itemName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="itemPrice">
                  <Form.Label>Item Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="itemPrice"
                    value={updateItem.itemPrice}
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
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="itemDescription">
                  <Form.Label>Item Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="itemDescription"
                    value={updateItem.itemDescription}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button type="submit" variant="warning" className="w-100">
                  Update Item
                </Button>
              </Form>

              {imageShow && (
                <div className="text-center mt-4">
                  <img
                    src={imageShow}
                    className="img-fluid rounded"
                    alt="Preview"
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                  />
                </div>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpdateItem;
