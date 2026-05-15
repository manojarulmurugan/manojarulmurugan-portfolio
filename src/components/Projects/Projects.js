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
              description="Built a temporal retrieval pipeline for 'as-of' question answering on year-anchored passages. Fine-tuned Facebook Contriever with triplet margin loss using T5-generated temporal hard negatives to reduce time-mismatched retrieval. Built an MRAG re-ranker using Sliding-Window MaxSim with temporal-decay fusion. Hit@1 improved from 40.4% to 59% on CAQA, with in-domain performance reaching 84.9%."
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
              description="Processed 280M clickstream events on GCP Dataproc using PySpark, then trained a session-based GRU4Rec model that beat the published T4Rec XLNet benchmark by 5.1% NDCG@20. Scaled to 1M users on Vertex AI A100, deployed FastAPI on Cloud Run with FAISS ANN search, MLflow tracking, and automated concept-drift monitoring. Live demo with a full e-commerce frontend."
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
              description="Predicted customer churn for a printing company on 370k sales records in a non-contractual setting where churn has no fixed definition. Engineered dynamic churn labels using ECDF-based purchase-gap thresholds per customer-product pair. Benchmarked ARIMA, LSTM, and ECDF approaches — all failed. XGBoost and RandomForest achieved 87% accuracy, outperforming every forecasting baseline."
              ghLink="https://github.com/manojarulmurugan/Sales-Forecasting-and-Customer-Segmentation-on-Sales-Data"
              status="Production"
              tags={["XGBoost", "Scikit-learn", "Time-Series", "Python", "EDA"]}
            />
          </Col>

          <Col md={4} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={creditRisk}
              isBlog={false}
              title="Credit Risk Analysis"
              description="Built a stacked ensemble on 30k loan records to classify loans as good or bad and optimize lending profit. Handled class imbalance using SMOTE and Bootstrapping. Base learners across Logistic Regression, Random Forest, SVM, Naive Bayes and MLP were combined via XGBoost meta-learner, achieving 97.7% accuracy. Added a profit-risk layer using decile analysis to identify the lending threshold that maximizes revenue."
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
