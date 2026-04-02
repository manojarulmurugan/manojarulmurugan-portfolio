import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <style>{`
        .footer .footer-email-link:hover,
        .footer .footer-email-link:focus {
          color: rgba(245, 158, 11, 0.7) !important;
          text-decoration: none !important;
        }
      `}</style>
      <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Manoj Arulmurugan</h3>
          <a
            className="footer-email-link"
            href="mailto:manojarulmurugan@gmail.com"
            style={{
              display: "block",
              fontSize: "11px",
              color: "rgba(245, 158, 11, 0.7)",
              textDecoration: "none",
              marginTop: "4px",
            }}
          >
            manojarulmurugan@gmail.com
          </a>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} MA</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/manojarulmurugan"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/manojarulmurugan"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/manojarulmurugan"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Footer;
