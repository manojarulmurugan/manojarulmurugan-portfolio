import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import timeAwareRag from "../../Assets/Projects/time-aware-rag.png";
import hallucinationSteering from "../../Assets/Projects/hallucination-steering.png";
import squadplanner from "../../Assets/Projects/squadplanner.png";
import salesForecastingChurn from "../../Assets/Projects/sales-forecasting-churn.png";
import creditRisk from "../../Assets/Projects/credit-risk.png";
import recosys from "../../Assets/Projects/recosys.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timeAwareRag}
              isBlog={false}
              title="Time-Aware RAG"
              description="Temporal retrieval pipeline for 'as-of' QA. Fine-tuned Contriever with temporal hard negatives; built MRAG re-ranker with Sliding-Window MaxSim and temporal-decay fusion. Hit@1: 59% vs 40.4% baseline on CAQA."
              ghLink="https://github.com/manojarulmurugan/Time-Aware-Retrieval-Augmented-Generation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hallucinationSteering}
              isBlog={false}
              title="Hallucination-Aware Steering for LLMs"
              description="Trained a Logistic Regression Truthfulness Separator Vector (TSV) on hidden states; built MLP hallucination-risk probe for per-token steering. Reduced hallucination rate on GPT-Neo-2.7B from 64.6% to 55.5% (TruthfulQA)."
              ghLink="https://github.com/manojarulmurugan/Probe-Controlled-TSV"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recosys}
              isBlog={false}
              title="E-Commerce Recommendation System"
              description="Engineered an end-to-end recommendation engine by processing 411M+ events (70GB) using BigQuery and Apache Spark on GCP. Developed collaborative filtering and sequential models, deploying a full MLOps pipeline via MLflow, FastAPI on Cloud Run, and automated retraining."
              ghLink="https://github.com/manojarulmurugan/RecoSys"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salesForecastingChurn}
              isBlog={false}
              title="Sales Forecasting & Customer Churn"
              description="ARIMA + LSTM on 370k-record sales dataset with under 5% forecast error; LightGBM and RandomForest churn prediction at 87% accuracy. ECDF-based churn definition and customer lifecycle analysis."
              ghLink="https://github.com/manojarulmurugan/Sales-Forecasting-and-Customer-Segmentation-on-Sales-Data"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={creditRisk}
              isBlog={false}
              title="Credit Risk Analysis"
              description="Stacked ensemble (RF, Naive Bayes, SVM, XGBoost) on 30k loan records for credit risk prediction. Delivered actionable insights on safe loans and profit potential. 97.7% test set accuracy."
              ghLink="https://github.com/manojarulmurugan/Credit-Profit-Risk-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={squadplanner}
              isBlog={false}
              title="SquadPlanner"
              description="AI trip planning agent with LangChain and Gemini AI. Six custom tools over millions of Yelp records; flight and hotel API integration and budget fairness for groups of 2–10 travelers."
              ghLink="https://github.com/manojarulmurugan/AI-Squad-Planner"
              demoLink="https://ai-squad-planner-fzk9tarzmendo6eg9fynwj.streamlit.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
