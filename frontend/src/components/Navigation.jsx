import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Nav, Navbar, Container } from "react-bootstrap";
import Cart from '../pages/Cart';
import "./Navigation.css";
import logocool from '../images/logocool.png'; 



const Navigation = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={logocool} alt="Logo" height="70" />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/readAllItem/">Shop</Nav.Link>
            <Nav.Link href="/about/">About</Nav.Link>
            <Nav.Link href="/contact/">Contact</Nav.Link>
            <Nav.Link href="/createItem/">Add Item</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
