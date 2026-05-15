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
              I'm Manoj, an MS Data Science student at{" "}
              <span className="purple">UW-Madison</span> graduating May 2026,
              previously at <span className="purple">Calix</span> and{" "}
              <span className="purple">Shell India</span>. Some people push code
              to GitHub and call it done. For a long time, that was me too. What
              changed was watching MAPE numbers appear on a production dashboard
              for the first time, a model I had built actually running, being
              monitored, in front of my manager. That feeling is what I've been
              chasing ever since.
              <br />
              <br />
              At <span className="purple">Calix</span> I redesigned a forecasting
              pipeline and hit{" "}
              <span className="purple">~50% MAPE reduction</span> in production.
              At Shell, analytics I built drove{" "}
              <span className="purple">$250k in cost savings</span>. After that,
              I went back to my old GitHub, just notebooks with no deployment or
              monitoring, and built a production-grade recommendation system on{" "}
              <span className="purple">GCP</span> to fix that. Then a time-aware
              RAG pipeline. Then a deployed multi-agent AI trip planner.
              <br />
              <br />
              My approach isn't revolutionary. It's meticulous: deep EDA,
              rigorous baseline definition, exhaustive methods exploration
              before I call anything done.{" "}
              <span className="purple">
                I don't ship until I've tried what I haven't tried yet
              </span>
              .
              <br />
              <br />
              Targeting <span className="purple">Applied ML</span> roles across
              classical ML, deep learning, and LLMs. The inference engineering and
              GPU side has recently caught my eye too and I'm actively exploring
              it. On OPT, no sponsorship needed to start.
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
