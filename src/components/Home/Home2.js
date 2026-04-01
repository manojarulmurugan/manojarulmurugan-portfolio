import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import manojPhoto from "../../Assets/manoj.jpeg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m an MS Data Science student at UW-Madison (graduating May 2026)
              with a focus on forecasting and production ML. I’ve built systems
              that ship: a Feature Store on Snowflake at Calix, forecasting
              ensembles that improved accuracy by ~50%, and operational analytics
              that drove $250k in cost savings at Shell India.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, SQL, PyTorch, scikit-learn, and XGBoost{" "}
                </b>
              </i>
              — and I work across time-series, deep learning, and LLM/agentic AI.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  time-series forecasting, NLP & RAG,{" "}
                </b>
              </i>
              and building ML systems that run in production, not just in
              notebooks.
              <br />
              <br />
              I'm actively looking for full-time roles as a{" "}
              <b className="purple">Data Scientist</b>,{" "}
              <i>
                <b className="purple">ML Engineer</b>, or{" "}
                <b className="purple">Applied AI Engineer</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={manojPhoto}
                className="img-fluid home-about-profile-photo"
                alt="Manoj Arulmurugan"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
