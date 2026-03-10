import React from "react";
import { Col, Row } from "react-bootstrap";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import ClaudeIcon from "../../Assets/TechIcons/claude.svg";
import CursorIcon from "../../Assets/TechIcons/cursor.svg";
import {
  SiJupyter,
  SiGithub,
  SiGooglecloud,
  SiGooglebigquery,
  SiMlflow,
  SiOpenai,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons tech-icon-vscode">
        <img src={vsCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-jupyter">
        <SiJupyter fontSize={"24px"} />
        <div className="tech-icons-text">Jupyter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-github">
        <SiGithub fontSize={"24px"} />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-gcs">
        <SiGooglecloud fontSize={"24px"} />
        <div className="tech-icons-text">GCS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-bigquery-tools">
        <SiGooglebigquery fontSize={"24px"} />
        <div className="tech-icons-text">BigQuery</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-dataproc">
        <SiGooglecloud fontSize={"24px"} />
        <div className="tech-icons-text">Dataproc</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-mlflow-tools">
        <SiMlflow fontSize={"24px"} />
        <div className="tech-icons-text">MLflow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-vertex-tools">
        <SiGooglecloud fontSize={"24px"} />
        <div className="tech-icons-text">Vertex AI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-docker-tools">
        <img src={Docker} alt="Docker" className="tech-icon-images" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-claude">
        <img src={ClaudeIcon} alt="Claude" className="tech-icon-images" />
        <div className="tech-icons-text">Claude</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-chatgpt">
        <SiOpenai fontSize={"24px"} />
        <div className="tech-icons-text">ChatGPT</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-cursor">
        <img src={CursorIcon} alt="Cursor" className="tech-icon-images" />
        <div className="tech-icons-text">Cursor</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-copilot">
        <SiGithub fontSize={"24px"} />
        <div className="tech-icons-text">GitHub Copilot</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
