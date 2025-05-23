import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./Navigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logocool from '../images/logocool.png'; 



const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar1" variant="dark">
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
            <Nav.Link href="/cart">
  <FontAwesomeIcon icon={faShoppingCart} /> 
</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
