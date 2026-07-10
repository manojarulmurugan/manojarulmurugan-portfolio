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
              description="Built a temporal retrieval pipeline for 'as-of' question answering on year-anchored passages. Fine-tuned Facebook Contriever on 20k FineWeb-Edu passages (1800–2024) with triplet margin loss and T5-generated temporal hard negatives. Built an MRAG re-ranker using Sliding-Window MaxSim with temporal-decay fusion. Hit@1 improved from 40.4% → 59.1% and MRR@10 to 65.7% on ChroniclingAmericaQA; SQuAD Temporal Subset reached 78.5% Hit@1. Served via FastAPI + FAISS with Groq LLM for grounded answer generation."
              ghLink="https://github.com/manojarulmurugan/Time-Aware-Retrieval-Augmented-Generation"
              demoLink="https://huggingface.co/spaces/manojarulmurugan/time-aware-rag"
              blogLink="https://medium.com/@manojarulmurugan/the-retriever-doesnt-know-what-time-it-is-40645263c975"
              status="Research"
              tags={["PyTorch", "HuggingFace", "Contriever", "FAISS", "FastAPI", "RAG", "NLP"]}
            />
          </Col>

          <Col md={4} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={hallucinationSteering}
              isBlog={false}
              title="Hallucination-Aware Steering for LLMs"
              description="Trained a Logistic Regression Truthfulness Separator Vector on GPT-Neo-2.7B hidden states to identify hallucination direction in activation space. Built a lightweight MLP hallucination-risk probe to adapt per-token steering strength, avoiding logit explosion from fixed-alpha methods. Reduced hallucination rate from 64.6% to 55.5% on TruthfulQA while steering only 75% of tokens, outperforming both fixed steering and ITI baselines."
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
              description="Processed 280M REES46 clickstream events on BigQuery and Dataproc, then trained session-based GRU4Rec V9 on 1M users via Vertex AI — beating the published T4Rec XLNet benchmark by 5.1% NDCG@20. Deployed on Cloud Run with FAISS ANN search, MLflow tracking, distribution drift monitoring, and a weekly fine-tuning pipeline. Live Vercel demo with full e-commerce frontend and model performance dashboard."
              ghLink="https://github.com/manojarulmurugan/RecoSys"
              demoLink="https://recosys.vercel.app/"
              status="Production"
              tags={["PySpark", "GCP", "Vertex AI", "FastAPI", "MLflow", "GRU4Rec"]}
            />
          </Col>

          <Col md={4} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={salesForecastingChurn}
              isBlog={false}
              title="Customer Churn Prediction"
              description="Predicted customer churn from 370k printing-company sales transactions in a non-contractual setting with no explicit cancellation event. Benchmarked ARIMA, LSTM, and ECDF heuristics — all failed (~28–50% accuracy). XGBoost and Random Forest reached 87% accuracy with 0.89 precision. Extended with segmentation, CLV, and sales forecasting to prioritize high-value at-risk customers for retention."
              ghLink="https://github.com/manojarulmurugan/Customer-Churn-Prediction-Sales-Data"
              status="Research"
              tags={["XGBoost", "Scikit-learn", "CLV", "Segmentation", "Python", "EDA"]}
            />
          </Col>

          <Col md={4} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={creditRisk}
              isBlog={false}
              title="Credit Risk Analysis"
              description="Investor portfolio selection on 2.26M LendingClub loans — ranking by predicted annualized net return instead of default probability alone. Built grade-blind PD, LGD, and ANR models with out-of-time validation across four vintages (2012–2015), beating LendingClub's grade ordering by 200–460 basis points. Deployed FastAPI scoring and Streamlit investor dashboard."
              ghLink="https://github.com/manojarulmurugan/Credit-Profit-Risk-Analysis"
              demoLink="https://loan-alpha.streamlit.app/"
              status="Live Demo"
              tags={["XGBoost", "LightGBM", "FastAPI", "Streamlit", "LendingClub", "Portfolio ML"]}
            />
          </Col>

          <Col md={4} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={squadplanner}
              isBlog={false}
              title="SquadPlanner"
              description="Stateful multi-agent trip planning system built on LangGraph. MongoDB-backed checkpointing pauses the graph for human destination approval and resumes exactly where it left off. Parallel fan-out fetches flights, hotels, activities, weather and routes across 5 live APIs. Post-generation natural language refinements re-enter the graph at the affected node and rerun only downstream. Deployed and live."
              ghLink="https://github.com/manojarulmurugan/AI-Squad-Planner-v2.0"
              demoLink="https://ai-squad-planner-v2-0.vercel.app/"
              status="Live Demo"
              tags={["LangGraph", "FastAPI", "MongoDB", "React", "Agentic AI", "SSE"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
