import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Manoj Arulmurugan</span>.
            <br />
            I’m an{" "}
            <span className="purple">MS Data Science</span> student at{" "}
            <span className="purple">UW-Madison</span>, graduating May 2026.
            <br />
            Previously: <span className="purple">ML Intern at Calix</span>,{" "}
            <span className="purple">Operations Data Analyst at Shell India</span>.
            <br />
            <br />
            Outside of building models and pipelines, I like to stay active and
            follow sports:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Football, NBA, and cricket 🏀
            </li>
            <li className="about-activity">
              <ImPointRight /> Running and staying active 🏃
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new places and travel 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Manoj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
