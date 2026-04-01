import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function useInViewOnce(threshold) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (visible) return undefined;
    const el = ref.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [visible, threshold]);
  return [ref, visible];
}

function StaggerChild({ delayIndex, children }) {
  return (
    <div
      className="who-iam-stagger-child"
      style={{ transitionDelay: `${delayIndex * 100}ms` }}
    >
      {children}
    </div>
  );
}

const ScrollBlock = React.forwardRef(function ScrollBlock(
  { visible, children },
  ref
) {
  return (
    <div
      ref={ref}
      className={`who-iam-scroll-block ${visible ? "who-iam-visible" : ""}`}
    >
      {children}
    </div>
  );
});

const ENTRIES = [
  {
    year: "2019 — 2023",
    title: "B.Tech Computer Science, VIT Chennai",
    summary:
      "Where it started. Math, stats, and a slow realization that data was the direction.",
    body:
      "Started university with a broad interest in building things — websites, apps, anything tangible. The CSE curriculum covered DSA, DBMS, Operating Systems, Distributed Systems, Machine Learning, Web Mining, and Image Processing. What I was always quietly good at was the math and statistics underneath all of it. Toward the end of my degree I started noticing that the most interesting problems were about using data to understand the real world. That realization landed slowly, not all at once.",
    active: false,
  },
  {
    year: "2022",
    title: "iOS Development Intern, Radicosoft",
    summary:
      "Shipped a real app before ChatGPT. Then realized UI was not the direction.",
    body:
      "Went deep on iOS development entirely on my own initiative. Taught myself Swift, got an internship, and shipped a real mental wellness app called Mastering Emotions on an actual phone. No one asked me to do this. Every line of code was figured out the hard way. One of my best early achievements. Then about two months in, UI/UX coding started feeling like the wrong direction. That discomfort pointed me toward data.",
    active: false,
  },
  {
    year: "2022 — 2023",
    title: "First ML Project: Credit Risk Analysis",
    summary:
      "The project that made everything click. Found the right problem class.",
    body:
      "Picked a credit risk problem for my capstone mostly to see what it felt like. It felt like a competitive game where I controlled every knob. Better data, better model, better tuning — everything was a variable I could manipulate. Realized I was genuinely good at math and statistics, that I liked the uncertainty of it, and that this field had real momentum. Not a dramatic epiphany. Just a project that felt right in a way nothing else had.",
    active: false,
  },
  {
    year: "2023",
    title: "Diploma in Data Science, IIT Madras",
    summary:
      "Deliberate gap-filling. Built the foundation before going further.",
    body:
      "After my undergrad I started seriously exploring a data science career. Looking at job descriptions I noticed a gap — my UG had given me Machine Learning, Web Mining, and Statistics, but the foundational theoretical depth serious DS roles expected was not fully there. Enrolled at IIT Madras to close that gap: Statistics, ML foundations, Business Data Management, and Data Science tools. Did a real project on sales forecasting and customer churn using actual business data. Preparation for what came next.",
    active: false,
  },
  {
    year: "2023 — 2024",
    title: "Operations Data Analyst, Shell India",
    summary:
      "First industry data role. $250k impact. Shell Mobility Wall of Fame Award Q1 2024.",
    body:
      "Owned operational analytics for B2C downstream applications end to end. Built PowerBI dashboards querying a 10TB data lake that drove $250k in cost savings. Engineered automated ETL pipelines that cut data processing time by 3x and reduced team workload by 50%. What Shell really taught me was how data functions inside a large organization — technical work only lands when the people making decisions can understand and trust it. Also served as Operations Landscape Manager across multiple B2C apps, with exposure to stakeholder management and service operations at scale.",
    active: false,
  },
  {
    year: "2024 — May 2026",
    title: "MS Data Science, UW-Madison",
    summary:
      "Current. Going deep on ML, AI, and everything in between at one of the best in the world.",
    body:
      "Came to Madison with a clear goal: go deeper into ML and AI in a field that actually excites me. Coursework has covered Statistical Methods, Machine Learning, Advanced Deep Learning, NLP, Optimization, and DBMS. The real work has been in the projects: Time-Aware RAG, Hallucination Steering on LLM hidden states, SquadPlanner, and a production-grade recommendation engine on GCP. The masters confirmed the direction. This is the domain I want to build in.",
    active: true,
  },
  {
    year: "2025",
    title: "ML Intern, Calix Inc.",
    summary:
      "50% forecast accuracy lift. Shipped to production. Most rigorous end-to-end ML work to date.",
    body:
      "Shipped real ML systems under real production constraints. Built a Feature Store on Snowflake integrating 10+ data sources, a forecasting ensemble combining regression, SARIMA and LSTM that hit 50% accuracy improvement over baseline, and optimized pipelines to meet actual warehouse timeout and cost constraints. Learned what the gap between a model and a deployed solution actually looks like. Everything since has been chasing that feeling into harder problems.",
    active: false,
  },
];

function TimelineItem({ index, entry }) {
  const rowRef = useRef(null);
  const [rowVisible, setRowVisible] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setRowVisible(true);
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const cardDelayMs = index * 120;

  return (
    <div ref={rowRef} className="timeline-page-item">
      <div
        className={`timeline-page-dot ${entry.active ? "timeline-page-dot--current" : ""} ${rowVisible ? "timeline-page-dot--visible" : ""}`}
        style={
          rowVisible
            ? {
                "--timeline-dot-pop-delay": `${cardDelayMs + 150}ms`,
              }
            : undefined
        }
        aria-hidden="true"
      />
      <div
        className={`timeline-page-card ${entry.active ? "timeline-page-card--current" : ""} ${rowVisible ? "timeline-page-card--visible" : ""}`}
        style={{
          transitionDelay: rowVisible ? `${cardDelayMs}ms` : "0ms",
        }}
      >
        {entry.active ? (
          <span className="timeline-page-card__badge" aria-label="Current role">
            Current
          </span>
        ) : null}
        <div className="timeline-page-card__year">{entry.year}</div>
        <div className="timeline-page-card__title">{entry.title}</div>
        <div className="timeline-page-card__summary">{entry.summary}</div>
        <p className="timeline-page-card__body">{entry.body}</p>
      </div>
    </div>
  );
}

function TimelinePage() {
  const [blockRef, blockVisible] = useInViewOnce(0.15);
  const [spineWrapRef, spineVisible] = useInViewOnce(0.05);

  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={12}
              style={{
                paddingTop: "30px",
                paddingBottom: "50px",
                width: "100%",
                textAlign: "left",
              }}
            >
              <ScrollBlock ref={blockRef} visible={blockVisible}>
                <div className="timeline-page-column">
                  <StaggerChild delayIndex={0}>
                    <h1
                      className="project-heading timeline-page-heading"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      How I <strong className="purple">Got Here</strong>
                    </h1>
                    <p className="timeline-page-subtitle">
                      The journey from curious undergrad to production ML engineer.
                    </p>
                  </StaggerChild>

                  <StaggerChild delayIndex={1}>
                    <div ref={spineWrapRef} className="timeline-page-wrap">
                      <div className="timeline-page-spine-track" aria-hidden="true">
                        <div
                          className={`timeline-page-spine-line ${spineVisible ? "timeline-page-spine-line--drawn" : ""}`}
                        />
                      </div>
                      <div className="timeline-page-items">
                        {ENTRIES.map((entry, i) => (
                          <TimelineItem key={i} index={i} entry={entry} />
                        ))}
                      </div>
                    </div>
                  </StaggerChild>
                </div>
              </ScrollBlock>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default TimelinePage;
