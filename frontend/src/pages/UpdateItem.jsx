import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
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
      await axios
        .get("http://localhost:5000/readOneItem/" + id)
        .then((res) => {
          console.log(res);
          setUpdateItem(res.data);
        })
        .catch((err) => {
          console.log("Not read " + err);
        });
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

    await axios
      .patch("http://localhost:5000/updateItem/" + id, formData)
      .then((res) => {
        console.log(res);
        nav("/readAllItem/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <h1>Update Item</h1>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group className="mb-3" controlId="itemTitle">
          <Form.Label>Item Title</Form.Label>
          <Form.Control
            type="text"
            name="itemName"
            value={updateItem.itemName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="itemPrice">
          <Form.Label>Item Price</Form.Label>
          <Form.Control
            type="number"
            name="itemPrice"
            value={updateItem.itemPrice}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="itemImage">
          <Form.Label>Item Image</Form.Label>
          <Form.Control
            type="file"
            name="itemImage"
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
          />
        </Form.Group>

        <Button type="submit" variant="warning">
          Update Item
        </Button>
      </Form>

      {imageShow && <img src={imageShow} className="img-fluid" alt="Preview" />}
    </Container>
  );
};

export default UpdateItem;
