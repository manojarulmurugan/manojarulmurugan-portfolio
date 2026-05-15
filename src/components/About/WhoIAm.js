import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

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

const styles = {
  root: {
    width: "100%",
    maxWidth: "100%",
    paddingBottom: "0.25rem",
  },
  whoIamTopDivider: {
    borderBottom: "0.5px solid rgba(255,255,255,0.1)",
    margin: "1.5rem 0",
  },
  whoIamProfileBlock: {
    marginBottom: "2.5rem",
  },
  profileName: {
    fontSize: "2rem",
    fontWeight: "600",
    color: "#fff",
    margin: "0 0 0.25rem",
  },
  profileSubtitle: {
    fontSize: "0.875rem",
    color: "rgba(255,255,255,0.5)",
    margin: "0 0 0.25rem",
    lineHeight: "1.5",
  },
  profileOpenTo: {
    fontSize: "0.8rem",
    fontWeight: "500",
    color: "#f59e0b",
    margin: 0,
  },
  section: {
    marginBottom: "2.35rem",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
    marginBottom: "1.1rem",
    marginTop: "0.15rem",
    borderBottom: "0.5px solid rgba(255,255,255,0.12)",
    paddingBottom: "0.65rem",
  },
  sectionIcon: {
    width: "30px",
    height: "30px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    flexShrink: 0,
  },
  sectionTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#fff",
    margin: 0,
    textAlign: "left",
  },
  traitGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(148px, 1fr))",
    gap: "10px",
    marginBottom: "1.35rem",
  },
  weaknessGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "10px",
    marginBottom: "1.35rem",
  },
  traitCard: {
    background: "rgba(255,255,255,0.04)",
    border: "0.5px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "0.9rem 1rem",
  },
  traitLabel: {
    fontSize: "0.68rem",
    fontWeight: "600",
    color: "rgba(255,255,255,0.4)",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    marginBottom: "6px",
    textAlign: "left",
  },
  traitValue: {
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#e2e8f0",
    lineHeight: "1.4",
    textAlign: "left",
  },
  prose: {
    fontSize: "0.95rem",
    lineHeight: "1.78",
    color: "rgba(255,255,255,0.82)",
    marginBottom: "1.05rem",
    marginTop: 0,
    textAlign: "left",
  },
  pullQuote: {
    padding: "0.9rem 1.15rem",
    margin: "1.25rem 0 1.35rem",
    borderRadius: "0 8px 8px 0",
    maxWidth: "100%",
    width: "100%",
  },
  pullQuoteText: {
    fontSize: "0.95rem",
    fontStyle: "italic",
    color: "#fbbf24",
    margin: 0,
    lineHeight: "1.75",
    textAlign: "left",
  },
  weaknessCard: {
    background: "rgba(255,255,255,0.04)",
    border: "0.5px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "1rem 1.25rem",
    marginBottom: 0,
  },
  weaknessTitle: {
    fontSize: "0.8rem",
    fontWeight: "600",
    color: "rgba(255,255,255,0.4)",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    marginBottom: "8px",
    textAlign: "left",
  },
  weaknessBody: {
    fontSize: "0.9rem",
    color: "rgba(255,255,255,0.72)",
    lineHeight: "1.75",
    margin: 0,
    textAlign: "left",
  },
  outsideGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "11px",
  },
  outsideCard: {
    background: "rgba(255,255,255,0.04)",
    border: "0.5px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "1rem 1.25rem",
  },
  outsideCardTitle: {
    fontSize: "0.85rem",
    fontWeight: "600",
    color: "#e2e8f0",
    marginBottom: "6px",
    textAlign: "left",
  },
  outsideCardBody: {
    fontSize: "0.85rem",
    color: "rgba(255,255,255,0.6)",
    lineHeight: "1.65",
    margin: 0,
    textAlign: "left",
  },
};

const SECTION_NAV = [
  { id: "technical-identity", label: "Expertise" },
  { id: "who-i-am", label: "Who I Am" },
  { id: "how-i-work", label: "With People" },
  { id: "self-assessment", label: "Self Check" },
  { id: "outside-work", label: "Outside" },
];

const SECTION_IDS = SECTION_NAV.map((s) => s.id);

const traits = [
  { label: "Working style", value: "Ball knower. Goes all the way in." },
  { label: "What drives me", value: "The gap between notebook and production" },
  { label: "Competitive streak", value: "Makes everything more interesting" },
  { label: "Under pressure", value: "Focused, not rattled. Clutch." },
];

const expertiseCards = [
  {
    label: "ML End-to-End",
    value:
      "Raw data to deployed system. RecSys is the proof: 280M events, GCP, live FastAPI serving with automated retraining. Any problem, any domain. The method follows the problem.",
  },
  {
    label: "Forecasting and Time-Series",
    value:
      "My strongest production area. Regression ensembles, SARIMA, LSTM. 50% MAPE reduction at Calix, 76% to 95% at Sedin. Work I can defend deeply.",
  },
  {
    label: "Deep Learning, NLP and GenAI",
    value:
      "RAG pipelines, hallucination mitigation, hidden-state steering. Research-level depth with measurable results on real benchmarks.",
  },
  {
    label: "Agentic AI",
    value:
      "Built SquadPlanner as a stateful multi-agent system in LangGraph. Understand the architecture, the tooling, the tradeoffs. Curious about inference engineering and the GPU side next.",
  },
];

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

function WhoIAm() {
  const [techIdentityRef, techIdentityVisible] = useInViewOnce(0.15);
  const [s1Ref, s1Visible] = useInViewOnce(0.15);
  const [s2Ref, s2Visible] = useInViewOnce(0.15);
  const [s3Ref, s3Visible] = useInViewOnce(0.15);
  const [s5Ref, s5Visible] = useInViewOnce(0.15);
  const [pq1Ref, pq1Visible] = useInViewOnce(0.5);
  const [pq2Ref, pq2Visible] = useInViewOnce(0.5);

  const [activeSection, setActiveSection] = useState("who-i-am");

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    );
    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting && e.intersectionRatio > 0)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [
          0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,
          0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
        ],
        rootMargin: "-12% 0px -40% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="about-who-root who-iam-layout" style={styles.root}>
      <nav className="who-iam-sidebar" aria-label="Section navigation">
        {SECTION_NAV.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={`who-iam-sidebar-link ${
              activeSection === id ? "who-iam-sidebar-link--active" : ""
            }`}
            onClick={() => scrollToSection(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="who-iam-main">
        <header className="who-iam-page-title">
          <h1
            className="heading who-iam-page-heading"
            style={{ marginBottom: "0.25rem", paddingBottom: 0 }}
          >
            Know Who I <span style={{ color: "#f59e0b" }}>Am</span>
          </h1>
          <p
            className="about-who-tagline who-iam-page-subtitle"
            style={{ marginBottom: 0 }}
          >
            More than a resume. The story behind the work.
          </p>
        </header>

        <div style={styles.whoIamTopDivider} aria-hidden="true" />

        <div style={styles.whoIamProfileBlock}>
          <p style={styles.profileName}>Manoj Arulmurugan</p>
          <p style={styles.profileSubtitle}>
            MS Data Science, UW-Madison (May 2026) · Previously at Calix & Shell
            India
          </p>
          <p style={styles.profileOpenTo}>
            Open to full-time roles in Data Science, ML Engineering and Applied AI
          </p>
          <div
            style={{
              borderBottom: "0.5px solid rgba(255,255,255,0.08)",
              margin: "10px 0",
            }}
            aria-hidden="true"
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              columnGap: "24px",
              rowGap: "8px",
            }}
          >
            <a
              href="mailto:manojarulmurugan@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
              }}
            >
              <AiOutlineMail aria-hidden="true" />
              manojarulmurugan@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/manojarulmurugan"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
              }}
            >
              <AiFillLinkedin aria-hidden="true" />
              linkedin.com/in/manojarulmurugan
            </a>
          </div>
        </div>

        <section id="technical-identity">
          <ScrollBlock ref={techIdentityRef} visible={techIdentityVisible}>
            <div style={styles.section}>
              <StaggerChild delayIndex={0}>
                <div style={styles.sectionHeader}>
                  <div
                    style={{
                      ...styles.sectionIcon,
                      background: "rgba(245, 158, 11, 0.15)",
                      color: "#f59e0b",
                    }}
                  >
                    ⚡
                  </div>
                  <h2 style={styles.sectionTitle}>What I bring</h2>
                </div>
              </StaggerChild>

              <StaggerChild delayIndex={1}>
                <p style={styles.prose}>
                  End-to-end ML person. Not a specialist locked into one method or
                  domain, but someone who can take a problem from raw messy data to
                  a deployed system a business actually depends on.{" "}
                  <strong>
                    Classical ML, deep learning, time-series, NLP, GenAI
                  </strong>
                  . The method follows the problem, not the other way around. What
                  stays constant is the standard: models that hold up in production,
                  not just in evaluation.
                </p>
              </StaggerChild>

              <StaggerChild delayIndex={2}>
                <p style={styles.prose}>
                  The clearest proof of that is <strong>RecSys</strong>. After Calix,
                  I went back to my old GitHub and saw what I had built before: just
                  notebooks, no deployment, no serving, no monitoring. So I built a
                  recommendation system the right way.{" "}
                  <strong>280M events processed on GCP</strong>, GRU4Rec trained to
                  beat a published benchmark, FastAPI deployed on Cloud Run with
                  automated concept-drift retraining on Vertex AI. That project exists
                  because I wanted to know what end-to-end actually means in practice.
                </p>
              </StaggerChild>

              <StaggerChild delayIndex={3}>
                <p style={styles.prose}>
                  My deepest production expertise is <strong>forecasting</strong>. At
                  Calix I redesigned a regression model into 13 week-specific models
                  with algorithm-specific feature selection, hitting around{" "}
                  <strong>50% MAPE reduction</strong> and shipping it to production
                  under real warehouse constraints. At Sedin I took a loan disbursal
                  model from <strong>76% to 95%</strong>. This is the area I can
                  defend most deeply in any technical conversation.
                </p>
              </StaggerChild>

              <StaggerChild delayIndex={4}>
                <p style={styles.prose}>
                  On the research side I have gone deep on <strong>modern AI</strong>.
                  Time-Aware RAG with a custom re-ranker that hit{" "}
                  <strong>59% Hit@1</strong> against a 40.4% baseline. Hallucination
                  steering at the hidden-state level on GPT-Neo-2.7B, reducing
                  hallucination rate by <strong>9.1 percentage points</strong>. I built
                  SquadPlanner as a stateful multi-agent LangGraph system and learned a
                  lot about <strong>agentic architectures</strong> from that. The next
                  frontier I want to explore is{" "}
                  <strong>inference engineering and the GPU side of ML</strong>. I am
                  early in that journey and genuinely curious about where it leads.
                </p>
              </StaggerChild>

              <StaggerChild delayIndex={5}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "12px",
                    marginBottom: "1.35rem",
                  }}
                >
                  {expertiseCards.map((c) => (
                    <div
                      key={c.label}
                      style={{
                        ...styles.traitCard,
                        borderTop: "2px solid rgba(245, 158, 11, 0.4)",
                      }}
                      className="who-iam-trait-card"
                    >
                      <div style={styles.traitLabel}>{c.label}</div>
                      <div style={styles.traitValue}>{c.value}</div>
                    </div>
                  ))}
                </div>
              </StaggerChild>
            </div>
          </ScrollBlock>
        </section>

        <section id="who-i-am">
          <ScrollBlock ref={s1Ref} visible={s1Visible}>
        <div style={styles.section}>
          <StaggerChild delayIndex={0}>
            <div style={styles.sectionHeader}>
              <div
                style={{
                  ...styles.sectionIcon,
                  background: "rgba(245, 158, 11, 0.15)",
                  color: "#fbbf24",
                }}
              >
                ◈
              </div>
              <h2 style={styles.sectionTitle}>The kind of person I am</h2>
            </div>
          </StaggerChild>

          <StaggerChild delayIndex={1}>
            <div style={styles.traitGrid}>
              {traits.map((t) => (
                <div
                  key={t.label}
                  style={styles.traitCard}
                  className="who-iam-trait-card"
                >
                  <div style={styles.traitLabel}>{t.label}</div>
                  <div style={styles.traitValue}>{t.value}</div>
                </div>
              ))}
            </div>
          </StaggerChild>

          <StaggerChild delayIndex={2}>
            <p style={styles.prose}>
              ML and data person at heart. Not because it is a hot field, but
              because working with data is how I make sense of complex problems.
              When I can see a problem through{" "}
              <strong>numbers, patterns and structure</strong>, solving it becomes
              a competitive game. How do I get better accuracy? Better data, better
              model, better tuning? Every knob is something to explore and optimize.
            </p>
          </StaggerChild>
          <StaggerChild delayIndex={3}>
            <p style={styles.prose}>
              What has changed over time is{" "}
              <strong>how I approach that game</strong>. I used to get ahead of
              myself. On my <strong>churn project</strong> I started building models
              before I had defined what churn even meant for that dataset, or what
              metrics I was optimizing for. At <strong>Calix</strong> I kept jumping
              to methods before I had a gameplan, without knowing when to stop and
              switch tracks. On <strong>RecSys</strong> I built models without a
              properly defined baseline to beat, which made the results meaningless
              until I fixed that.
            </p>
          </StaggerChild>

          <StaggerChild delayIndex={4}>
            <div
              ref={pq1Ref}
              style={styles.pullQuote}
              className={`who-iam-pull-quote ${pq1Visible ? "who-iam-pull-quote-visible" : ""}`}
            >
              <p className="who-iam-pull-quote-text" style={styles.pullQuoteText}>
                "Define the problem. Define the metrics. Define the baseline. Then build."
              </p>
            </div>
          </StaggerChild>

          <StaggerChild delayIndex={5}>
            <p style={styles.prose}>
              Each of those experiences taught me the same lesson from a different
              angle:{" "}
              <strong>
                define the problem, define the metrics, define the baseline
              </strong>{" "}
              before you touch the data. My approach now is meticulous and iterative.
              Deep EDA, rigorous problem definition, exhaustive methods exploration
              with a clear experimentation plan. I know when to switch tracks and I
              do it with evidence, not frustration.
            </p>
          </StaggerChild>
          <StaggerChild delayIndex={6}>
            <p style={styles.prose}>
              I am also <strong>competitive by nature</strong>, but not in a
              zero-sum way. I just find that having something at stake makes
              everything more interesting, whether that is a pickup football match,
              a semester GPA, or a model accuracy benchmark.
            </p>
          </StaggerChild>
        </div>
      </ScrollBlock>
        </section>

        <section id="how-i-work">
      <ScrollBlock ref={s2Ref} visible={s2Visible}>
        <div style={styles.section}>
          <StaggerChild delayIndex={0}>
            <div style={styles.sectionHeader}>
              <div
                style={{
                  ...styles.sectionIcon,
                  background: "rgba(29, 158, 117, 0.15)",
                  color: "#34d399",
                }}
              >
                ⬡
              </div>
              <h2 style={styles.sectionTitle}>How I work with people</h2>
            </div>
          </StaggerChild>

          <StaggerChild delayIndex={1}>
            <p style={styles.prose}>
              Some of my best learning has come not from papers or courses but
              from the people I've worked alongside. At Shell, I was part of a
              cross-functional team building operational dashboards for B2C apps.
              Early on I noticed we had a bottleneck: everyone was siloed in their
              own lane. If I was deep in code, or someone from the business side
              was unavailable, progress froze. The team was functional but not
              resilient.
            </p>
          </StaggerChild>
          <StaggerChild delayIndex={2}>
            <p style={styles.prose}>
              I brought it up with our team lead and we agreed to try
              cross-training. I ran short workshops teaching teammates basic SQL
              and PowerBI. In return they taught me how to define business
              requirements, work with stakeholders directly, and navigate Shell's
              internal data systems. We rotated responsibilities every sprint so
              everyone understood each other's process. The result was a dashboard
              that became a go-to tool for several teams across the org. But the
              more lasting thing was what happened to the team itself. We got
              faster, more flexible, and more capable as a unit.
            </p>
          </StaggerChild>

          <StaggerChild delayIndex={3}>
            <div
              ref={pq2Ref}
              style={styles.pullQuote}
              className={`who-iam-pull-quote ${pq2Visible ? "who-iam-pull-quote-visible" : ""}`}
            >
              <p className="who-iam-pull-quote-text" style={styles.pullQuoteText}>
                "Asking 'what decision will this drive?' instead of 'is this the most elegant solution?' changed how I framed everything. Being technically correct stopped being the goal. Being actually useful became the goal."
              </p>
            </div>
          </StaggerChild>

          <StaggerChild delayIndex={4}>
            <p style={styles.prose}>
              That same environment taught me something about being right versus
              being useful. I came in with a lot of ideas. ML approaches, database
              optimizations, alternative visualizations. Some landed. Many got
              pushed back on, especially when they didn't align with what
              decision-makers actually needed. Stepping back and asking what
              decision a visualization would drive, rather than whether it was the
              most elegant, changed how I approached everything. That reframe has
              stuck with me ever since.
            </p>
          </StaggerChild>
        </div>
      </ScrollBlock>
        </section>

        <section id="self-assessment">
      <ScrollBlock ref={s3Ref} visible={s3Visible}>
        <div style={styles.section}>
          <StaggerChild delayIndex={0}>
            <div style={styles.sectionHeader}>
              <div
                style={{
                  ...styles.sectionIcon,
                  background: "rgba(251, 146, 60, 0.15)",
                  color: "#fb923c",
                }}
              >
                ▲
              </div>
              <h2 style={styles.sectionTitle}>Honest self-assessment</h2>
            </div>
          </StaggerChild>

          <StaggerChild delayIndex={1}>
            <div style={styles.weaknessGrid}>
              <div
                style={styles.weaknessCard}
                className="who-iam-weakness-card"
              >
                <div style={styles.weaknessTitle}>Going too deep</div>
                <p style={styles.weaknessBody}>
                  The same obsessiveness that makes me thorough can make me fixate
                  on making one thing work long after I should have pivoted. I've
                  sat at dead ends before because I was too committed to a
                  direction. I've gotten better at recognizing that signal early
                  and forcing myself to step back and explore alternatives, but
                  it's something I actively keep in check.
                </p>
              </div>
              <div
                style={styles.weaknessCard}
                className="who-iam-weakness-card"
              >
                <div style={styles.weaknessTitle}>Best under a deadline</div>
                <p style={styles.weaknessBody}>
                  Pressure doesn't rattle me, it focuses me. Some of my best
                  output has come in the final stretch before something was due.
                  The flip side is that without a real deadline, I can drift. Over
                  time I've learned to manufacture my own constraints, setting
                  personal deadlines and targets rather than waiting for external
                  pressure to kick in. It's made me significantly more consistent.
                </p>
              </div>
            </div>
          </StaggerChild>

          <StaggerChild delayIndex={2}>
            <p style={styles.prose}>
              Neither of these is a secret. Self-awareness about how you're wired
              is the first step to actually improving, and I'd rather be honest
              about it than pretend I'm a perfectly optimized machine.
            </p>
          </StaggerChild>
        </div>
      </ScrollBlock>
        </section>

        <section id="outside-work">
      <ScrollBlock ref={s5Ref} visible={s5Visible}>
        <div style={{ ...styles.section, marginBottom: "1rem" }}>
          <StaggerChild delayIndex={0}>
            <div style={styles.sectionHeader}>
              <div
                style={{
                  ...styles.sectionIcon,
                  background: "rgba(251, 191, 36, 0.15)",
                  color: "#fbbf24",
                }}
              >
                ✦
              </div>
              <h2 style={styles.sectionTitle}>Outside of work</h2>
            </div>
          </StaggerChild>

          <StaggerChild delayIndex={1}>
            <p style={styles.prose}>
              <span className="who-iam-outside-lead who-iam-outside-lead--tamil">
                தமிழன்
              </span>
              , proud Tamil from Chennai. Two things are non-negotiable: a good
              masala dosa and filter coffee. If we ever meet, I am taking you to a
              South Indian restaurant, no discussion.
            </p>
          </StaggerChild>

          <StaggerChild delayIndex={2}>
            <p style={styles.prose}>
              <span className="who-iam-outside-lead">Sports are a religion.</span>{" "}
              Lifelong Messi and Barcelona fan, still waiting for that UCL since
              2015. The 2022 World Cup final is the best thing I have ever watched.
              Bleed Yellow for CSK and Raina. Recently deep into the NBA, big
              Giannis and Wemby fan. Started following F1, tennis and just got into
              American football after watching the Wisconsin Badgers play. No NFL
              team yet, genuinely open to suggestions.
            </p>
          </StaggerChild>

          <StaggerChild delayIndex={3}>
            <p style={styles.prose}>
              <span className="who-iam-outside-lead">Outside the screen</span> I play
              football every chance I get. Box-to-box midfielder, love to run, love
              the chaos of a competitive match. Also a distance runner, you will find
              me on Strava if you want to connect. Pickleball and badminton too,
              though fair warning: I am annoyingly competitive at everything.
            </p>
          </StaggerChild>

          <StaggerChild delayIndex={4}>
            <p style={styles.prose}>
              <span className="who-iam-outside-lead">Films and anime</span> the way
              most people do not watch them. Huge Christopher Nolan fan, I can talk
              about his filmography for hours. One Piece is the greatest story ever
              told and I am current on both anime and manga. What I love is not just
              watching but the post-analysis, the lore diving, the reading up on every
              detail after. The world-building matters as much as the story.
            </p>
          </StaggerChild>

          <StaggerChild delayIndex={5}>
            <p style={styles.prose}>
              <span className="who-iam-outside-lead">History</span> the same way.
              Ancient Rome to the Ukraine war, I will read it all. In another life I
              was definitely a historian or a geopolitics analyst. The patterns
              across civilizations are endlessly fascinating, and honestly not that
              different from how I think about data.
            </p>
          </StaggerChild>

          <StaggerChild delayIndex={6}>
            <p style={styles.prose}>
              Travelled across India, the US, China, Thailand, Malaysia, Sri Lanka and
              Turkey. Not a photos-and-leave traveller. I want to understand the
              history, the geography, the culture of every place I visit. Currently
              working through US national parks and cities one by one.
            </p>
          </StaggerChild>
        </div>
      </ScrollBlock>
        </section>
      </div>
    </div>
  );
}

export default WhoIAm;
