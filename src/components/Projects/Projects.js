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
        <Row
          className="align-items-stretch"
          style={{ justifyContent: "center", paddingBottom: "10px" }}
        >
          <Col md={4} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={timeAwareRag}
              isBlog={false}
              title="Time-Aware RAG"
              description="Temporal retrieval pipeline for 'as-of' QA. Fine-tuned Contriever with temporal hard negatives; built MRAG re-ranker with Sliding-Window MaxSim and temporal-decay fusion. Hit@1: 59% vs 40.4% baseline on CAQA."
              ghLink="https://github.com/manojarulmurugan/Time-Aware-Retrieval-Augmented-Generation"
              status="Research"
              tags={["PyTorch", "HuggingFace", "Contriever", "RAG", "NLP"]}
            />
          </Col>

          <Col md={4} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={hallucinationSteering}
              isBlog={false}
              title="Hallucination-Aware Steering for LLMs"
              description="Trained a Logistic Regression Truthfulness Separator Vector (TSV) on hidden states; built MLP hallucination-risk probe for per-token steering. Reduced hallucination rate on GPT-Neo-2.7B from 64.6% to 55.5% (TruthfulQA)."
              ghLink="https://github.com/manojarulmurugan/Probe-Controlled-TSV"
              status="Research"
              tags={["PyTorch", "GPT-Neo", "HuggingFace", "LLM Safety", "NLP"]}
            />
          </Col>

          <Col md={4} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={recosys}
              isBlog={false}
              title="E-Commerce Recommendation System"
              description="Engineered an end-to-end recommendation engine by processing 411M+ events (70GB) using BigQuery and Apache Spark on GCP. Developed collaborative filtering and sequential models, deploying a full MLOps pipeline via MLflow, FastAPI on Cloud Run, and automated retraining."
              ghLink="https://github.com/manojarulmurugan/RecoSys"
              status="Production"
              tags={["PySpark", "GCP", "BigQuery", "MLflow", "FastAPI"]}
            />
          </Col>

          <Col md={4} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={salesForecastingChurn}
              isBlog={false}
              title="Sales Forecasting & Customer Churn"
              description="ARIMA + LSTM on 370k-record sales dataset with under 5% forecast error; LightGBM and RandomForest churn prediction at 87% accuracy. ECDF-based churn definition and customer lifecycle analysis."
              ghLink="https://github.com/manojarulmurugan/Sales-Forecasting-and-Customer-Segmentation-on-Sales-Data"
              status="Production"
              tags={["ARIMA", "LSTM", "LightGBM", "Python", "Time-Series"]}
            />
          </Col>

          <Col md={4} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={creditRisk}
              isBlog={false}
              title="Credit Risk Analysis"
              description="Stacked ensemble (RF, Naive Bayes, SVM, XGBoost) on 30k loan records for credit risk prediction. Delivered actionable insights on safe loans and profit potential. 97.7% test set accuracy."
              ghLink="https://github.com/manojarulmurugan/Credit-Profit-Risk-Analysis"
              status="Production"
              tags={["XGBoost", "Scikit-Learn", "Python", "Ensemble ML"]}
            />
          </Col>

          <Col md={4} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={squadplanner}
              isBlog={false}
              title="SquadPlanner"
              description="Full-stack group trip planner powered by a LangGraph agent workflow. Scores US destinations, pauses for leader city approval, fetches live flights, hotels, activities, routes, and weather, then streams a constraint-aware day-by-day itinerary with budget and fairness checks."
              ghLink="https://github.com/manojarulmurugan/AI-Squad-Planner-v2.0"
              demoLink="https://ai-squad-planner-v2-0.vercel.app/"
              status="Live Demo"
              tags={["LangGraph", "FastAPI", "React", "MongoDB", "Agentic AI"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
