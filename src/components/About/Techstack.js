import React from "react";
import { Col, Row } from "react-bootstrap";
import Python from "../../Assets/TechIcons/Python.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import HuggingFaceIcon from "../../Assets/TechIcons/huggingface.svg";
import LangChainIcon from "../../Assets/TechIcons/langchain.svg";
import {
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiSnowflake,
  SiGooglecloud,
  SiGooglebigquery,
  SiMlflow,
  SiPowerbi,
  SiApachespark,
  SiR,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons tech-icon-python">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-sql">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-r">
        <SiR fontSize={"24px"} />
        <div className="tech-icons-text">R</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-pytorch">
        <SiPytorch fontSize={"24px"} />
        <div className="tech-icons-text">PyTorch</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-tensorflow">
        <SiTensorflow fontSize={"24px"} />
        <div className="tech-icons-text">TensorFlow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-scikitlearn">
        <SiScikitlearn fontSize={"24px"} />
        <div className="tech-icons-text">Scikit-learn</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-xgboost">
        <SiScikitlearn fontSize={"24px"} />
        <div className="tech-icons-text">XGBoost</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-huggingface">
        <img src={HuggingFaceIcon} alt="Hugging Face" />
        <div className="tech-icons-text">Hugging Face</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-langchain">
        <img src={LangChainIcon} alt="LangChain" />
        <div className="tech-icons-text">LangChain</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-snowflake">
        <SiSnowflake fontSize={"24px"} />
        <div className="tech-icons-text">Snowflake</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-gcp">
        <SiGooglecloud fontSize={"24px"} />
        <div className="tech-icons-text">GCP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-bigquery">
        <SiGooglebigquery fontSize={"24px"} />
        <div className="tech-icons-text">BigQuery</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-mlflow">
        <SiMlflow fontSize={"24px"} />
        <div className="tech-icons-text">MLflow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-docker">
        <img src={Docker} alt="Docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-powerbi">
        <SiPowerbi fontSize={"24px"} />
        <div className="tech-icons-text">Power BI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-git">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-spark">
        <SiApachespark fontSize={"24px"} />
        <div className="tech-icons-text">Apache Spark</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icon-vertex">
        <SiGooglecloud fontSize={"24px"} />
        <div className="tech-icons-text">Vertex AI</div>
      </Col>
    </Row>
  );
}

export default Techstack;
