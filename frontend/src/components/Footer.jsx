import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#ffdf2b" }}>
      <footer className="footer container d-flex flex-wrap justify-content-between align-items-center py-3 border-top">

        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-dark text-decoration-none lh-1"
          >
            <strong>CoolShop</strong>
          </a>
          <span className="mb-3 mb-md-0 text-dark">
            © 2025 CoolShop, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark fs-4"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="ms-3">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark fs-4"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
