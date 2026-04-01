import React, { useState, useEffect, useRef } from "react";

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
    maxWidth: "min(100%, 42rem)",
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

const outsideItems = [
  {
    title: "Sports",
    body: "NBA, cricket, and football. Not casually, obsessively. Full context, strong opinions, genuine investment. I play everything competitively too — pickup soccer, padel, badminton. A game without stakes is just exercise.",
  },
  {
    title: "Going all the way in",
    body: "One Piece, a film I just watched, a podcast episode that caught my attention. I'm not satisfied until I have the full picture. Surface level has never been enough for me in anything I genuinely care about.",
  },
  {
    title: "Sunshine person",
    body: "I genuinely believe greeting people with a smile and making interactions warmer than they need to be matters. Not as a performance. Just as a baseline for how I want to move through the world.",
  },
  {
    title: "Wired to be clutch",
    body: "Tight deadline, high stakes, something that looks impossible on paper. That's when I'm most focused. It has helped me move mountains more than once.",
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
                  a deployed system a business actually depends on. Classical ML,
                  deep learning, time-series, NLP, GenAI — the method follows the
                  problem, not the other way around. What stays constant is the
                  standard: models that hold up in production, not just in
                  evaluation.
                </p>
              </StaggerChild>

              <StaggerChild delayIndex={2}>
                <p style={styles.prose}>
                  Where I have invested most of my recent project and coursework
                  depth is the modern AI stack. Time-Aware RAG, hallucination
                  steering at the hidden-state level, agentic systems with LangChain
                  and Gemini. Not surface-level implementations. I have read the
                  papers, understood the architecture, and built things that
                  produced numbers worth talking about. Hit@1 from 40.4% to 59%,
                  hallucination rate down 9.1 percentage points on GPT-Neo-2.7B.
                </p>
              </StaggerChild>

              <StaggerChild delayIndex={3}>
                <p style={styles.prose}>
                  The area I am most actively building toward is agentic AI.
                  SquadPlanner gave me real experience designing multi-tool LangChain
                  agents processing millions of Yelp records with live API
                  integrations. I am currently extending my RAG work with a
                  generation layer and studying agentic architectures seriously.
                  This is where the most interesting applied problems are right now
                  and where I want to be building.
                </p>
              </StaggerChild>

              <StaggerChild delayIndex={4}>
                <p style={styles.prose}>
                  My most production-hardened work has been in forecasting. At Calix
                  I built an ensemble combining regression, SARIMA and LSTM that
                  shipped to production and hit 50% accuracy improvement over
                  baseline. At Sedin I took a loan disbursal model from 76% to 95%.
                  This is where I have done the most rigorous end-to-end work under
                  real business constraints, and the area I can defend most deeply
                  in any technical conversation.
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
                  {[
                    {
                      label: "ML End-to-End",
                      value:
                        "Raw data to deployed system. Any problem, any domain. Classical ML, ensembles, recommender systems, MLOps. The method follows the problem.",
                    },
                    {
                      label: "Forecasting & Time-Series",
                      value:
                        "My strongest production area. SARIMA, LSTM, regression ensembles. 50% accuracy lift at Calix, 76% to 95% at Sedin. Work I can defend deeply.",
                    },
                    {
                      label: "Deep Learning, NLP & GenAI",
                      value:
                        "RAG pipelines, hallucination mitigation, hidden-state steering. Research-level depth with measurable results on real benchmarks.",
                    },
                    {
                      label: "Agentic AI",
                      value:
                        "Multi-tool LangChain agents, agentic architectures, MCP integrations. Actively building here. This is where I am heading.",
                    },
                  ].map((c) => (
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
              ML and data person at heart. Not because it's a hot field, though it
              is, but because working with data is how I make sense of complex
              problems. When I can see a problem through numbers, patterns and
              structure, solving it becomes a competitive game to me. How do I get
              better accuracy? Better data, better model, better tuning? Every
              knob is something to explore and optimize. That mindset has followed
              me from my first ML project to shipping production forecasting
              systems at Calix that an entire analytics team depended on.
            </p>
          </StaggerChild>
          <StaggerChild delayIndex={3}>
            <p style={styles.prose}>
              When I get into something, I really get into it. Not surface level,
              not good enough to get by. All the way in until I actually
              understand it. At Calix I was handed a forecasting problem with a
              clear path already laid out. I could have followed it. Instead I
              went back to the business analysts, spent days talking to data
              owners, read papers no one asked me to read, tested methods outside
              the original brief, and delivered something well past what was
              expected. Not because someone told me to. Because I physically
              cannot approach a problem I care about any other way.
            </p>
          </StaggerChild>

          <StaggerChild delayIndex={4}>
            <div
              ref={pq1Ref}
              style={styles.pullQuote}
              className={`who-iam-pull-quote ${pq1Visible ? "who-iam-pull-quote-visible" : ""}`}
            >
              <p style={styles.pullQuoteText}>
                "Once something earns my genuine interest, I go all the way in.
                The NBA, cricket, One Piece, a concept from an LLM paper I read in
                class today. I'm studying the entire history, the context, the
                details, until I actually feel like I know it."
              </p>
            </div>
          </StaggerChild>

          <StaggerChild delayIndex={5}>
            <p style={styles.prose}>
              What drives me in ML specifically is the gap between "works in a
              notebook" and "works when a business depends on it." At Calix I
              learned what it means to optimize not just for accuracy but for
              warehouse timeouts, pipeline costs, and real deployment constraints.
              At Shell I learned that a technically elegant solution means nothing
              if the business team cannot use it to make a decision. I care about
              both sides of that equation, always.
            </p>
          </StaggerChild>
          <StaggerChild delayIndex={6}>
            <p style={styles.prose}>
              I'm also competitive by nature, but not in a zero-sum way. I don't
              need to be the best person in the room. I just find that having
              something at stake makes everything more interesting, whether that's
              a pickup badminton game, a semester GPA, or a model accuracy
              benchmark. It sharpens my focus and usually makes the people around
              me more engaged too.
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
              <p style={styles.pullQuoteText}>
                "Asking 'what decision will this drive?' instead of 'is this the
                most elegant solution?' changed how I framed everything. Being
                technically correct stopped being the goal. Being actually useful
                became the goal."
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

          <div style={styles.outsideGrid}>
            {outsideItems.map((item, i) => (
              <StaggerChild key={item.title} delayIndex={i + 1}>
                <div style={styles.outsideCard} className="who-iam-outside-card">
                  <div style={styles.outsideCardTitle}>{item.title}</div>
                  <p style={styles.outsideCardBody}>{item.body}</p>
                </div>
              </StaggerChild>
            ))}
          </div>
        </div>
      </ScrollBlock>
        </section>
      </div>
    </div>
  );
}

export default WhoIAm;
