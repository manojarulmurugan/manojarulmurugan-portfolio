import React from "react";

const styles = {
  root: {
    width: "100%",
    maxWidth: "100%",
    paddingBottom: "0.25rem",
  },
  profileHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1.25rem",
    marginBottom: "2rem",
    flexWrap: "wrap",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #a855f7, #7c3aed)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.6rem",
    fontWeight: "600",
    color: "#fff",
    flexShrink: 0,
    border: "2px solid rgba(168, 85, 247, 0.4)",
  },
  avatarInfo: {
    flex: 1,
    minWidth: "200px",
  },
  avatarName: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#fff",
    margin: "0 0 4px",
  },
  avatarSub: {
    fontSize: "0.875rem",
    color: "rgba(255,255,255,0.55)",
    margin: "0 0 12px",
    lineHeight: "1.6",
  },
  tagRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  tag: {
    fontSize: "0.75rem",
    padding: "3px 12px",
    borderRadius: "999px",
    background: "rgba(168, 85, 247, 0.15)",
    color: "#c084fc",
    border: "0.5px solid rgba(168, 85, 247, 0.35)",
  },
  section: {
    marginBottom: "2.35rem",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
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
  },
  traitGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(148px, 1fr))",
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
  },
  traitValue: {
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#e2e8f0",
    lineHeight: "1.4",
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
    borderLeft: "3px solid #a855f7",
    padding: "0.9rem 1.15rem",
    margin: "1.25rem 0 1.35rem",
    background: "rgba(168, 85, 247, 0.08)",
    borderRadius: "0 8px 8px 0",
  },
  pullQuoteText: {
    fontSize: "0.95rem",
    fontStyle: "italic",
    color: "#c084fc",
    margin: 0,
    lineHeight: "1.75",
  },
  weaknessCard: {
    background: "rgba(255,255,255,0.04)",
    border: "0.5px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "1rem 1.25rem",
    marginBottom: "1rem",
  },
  weaknessTitle: {
    fontSize: "0.8rem",
    fontWeight: "600",
    color: "rgba(255,255,255,0.4)",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    marginBottom: "8px",
  },
  weaknessBody: {
    fontSize: "0.9rem",
    color: "rgba(255,255,255,0.72)",
    lineHeight: "1.75",
    margin: 0,
  },
  timeline: {
    position: "relative",
    paddingLeft: "28px",
  },
  timelineLine: {
    position: "absolute",
    left: "7px",
    top: "8px",
    bottom: "8px",
    width: "1px",
    background: "rgba(168, 85, 247, 0.25)",
  },
  timelineItem: {
    position: "relative",
    marginBottom: "1.65rem",
  },
  timelineDot: {
    position: "absolute",
    left: "-23px",
    top: "5px",
    width: "13px",
    height: "13px",
    borderRadius: "50%",
    border: "2px solid #a855f7",
    background: "transparent",
  },
  timelineDotActive: {
    position: "absolute",
    left: "-23px",
    top: "5px",
    width: "13px",
    height: "13px",
    borderRadius: "50%",
    border: "2px solid #a855f7",
    background: "#a855f7",
  },
  timelineYear: {
    fontSize: "0.72rem",
    fontWeight: "600",
    color: "#a855f7",
    marginBottom: "4px",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },
  timelineTitle: {
    fontSize: "0.95rem",
    fontWeight: "600",
    color: "#e2e8f0",
    marginBottom: "5px",
  },
  timelineBody: {
    fontSize: "0.875rem",
    color: "rgba(255,255,255,0.6)",
    lineHeight: "1.7",
    margin: 0,
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
  },
  outsideCardBody: {
    fontSize: "0.85rem",
    color: "rgba(255,255,255,0.6)",
    lineHeight: "1.65",
    margin: 0,
  },
};

const traits = [
  { label: "Working style", value: "Ball knower. Goes all the way in." },
  { label: "What drives me", value: "The gap between notebook and production" },
  { label: "Competitive streak", value: "Makes everything more interesting" },
  { label: "Under pressure", value: "Focused, not rattled. Clutch." },
];

const timelineItems = [
  {
    year: "2019 — 2023",
    title: "B.Tech Computer Science, VIT Chennai",
    body: "Started with iOS development because I owned a Mac and wanted to build something people could hold in their hands. Shipped a real app during my internship, coded entirely without AI tools. One of my best early achievements. Then realized UI/UX coding was not for me, at all, and started looking for what else was out there.",
    active: false,
  },
  {
    year: "2022 — 2023",
    title: "First ML project: Credit Risk Analysis",
    body: "Picked a credit risk problem for my capstone mostly to see what it felt like. It felt like a competitive game where I controlled every knob. Realized I was genuinely good at math and statistics, that I liked the uncertainty of it, and that this field had real momentum. Not a dramatic epiphany. Just a project that felt right in a way nothing else had.",
    active: false,
  },
  {
    year: "2022 — 2023",
    title: "Data Science Intern, Sedin Technologies",
    body: "First real ML role. Improved forecasting accuracy for loan disbursal predictions from 76% to 95% using MLForecast, RandomForest, and XGBoost. First taste of what it means to build models for a business that depends on them.",
    active: false,
  },
  {
    year: "2023 — 2024",
    title: "Operations Data Analyst, Shell India",
    body: "Owned analytics for B2C apps. Built PowerBI dashboards on a 10TB data lake, drove $250k in cost savings, and learned what it means to make data useful to people who don't speak data. Won the Shell Mobility Wall of Fame Award Q1 2024.",
    active: false,
  },
  {
    year: "2024 — 2026",
    title: "MS Data Science, UW-Madison",
    body: "Going deep on NLP, deep learning, agentic AI and LLM systems. Not just coursework but projects built from scratch: Time-Aware RAG, Hallucination Steering, SquadPlanner, and a production-grade recommendation engine on GCP.",
    active: false,
  },
  {
    year: "2025",
    title: "ML Intern, Calix Inc.",
    body: "Shipped real ML systems under real production constraints. Built a Feature Store on Snowflake, a forecasting ensemble that hit 50% accuracy improvement, and learned what the gap between a model and a deployed solution actually looks like. Everything since has been chasing that feeling into harder problems.",
    active: true,
  },
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

function AboutCard() {
  return (
    <div className="about-who-root" style={styles.root}>
      <p className="about-who-tagline">
        More than a resume. The story behind the work.
      </p>

      {/* Profile Header */}
      <div style={styles.profileHeader}>
        <div style={styles.avatar}>mA</div>
        <div style={styles.avatarInfo}>
          <p style={styles.avatarName}>Manoj Arulmurugan</p>
          <p style={styles.avatarSub}>
            MS Data Science, UW-Madison (May 2026) · Previously at Calix &
            Shell India
            <br />
            Open to full-time roles in Data Science, ML Engineering, Applied AI
          </p>
          <div style={styles.tagRow}>
            {["Production ML", "Forecasting", "LLM Systems", "MLOps", "OPT"].map(
              (t) => (
                <span key={t} style={styles.tag}>
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Section 1: The kind of person I am */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <div
              style={{
                ...styles.sectionIcon,
                background: "rgba(168, 85, 247, 0.15)",
                color: "#c084fc",
              }}
            >
              ◈
            </div>
            <h2 style={styles.sectionTitle}>The kind of person I am</h2>
          </div>

          <div style={styles.traitGrid}>
            {traits.map((t) => (
              <div key={t.label} style={styles.traitCard}>
                <div style={styles.traitLabel}>{t.label}</div>
                <div style={styles.traitValue}>{t.value}</div>
              </div>
            ))}
          </div>

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

          <div style={styles.pullQuote}>
            <p style={styles.pullQuoteText}>
              "Once something earns my genuine interest, I go all the way in.
              The NBA, cricket, One Piece, a concept from an LLM paper I read in
              class today. I'm studying the entire history, the context, the
              details, until I actually feel like I know it."
            </p>
          </div>

          <p style={styles.prose}>
            What drives me in ML specifically is the gap between "works in a
            notebook" and "works when a business depends on it." At Calix I
            learned what it means to optimize not just for accuracy but for
            warehouse timeouts, pipeline costs, and real deployment constraints.
            At Shell I learned that a technically elegant solution means nothing
            if the business team cannot use it to make a decision. I care about
            both sides of that equation, always.
          </p>
          <p style={styles.prose}>
            I'm also competitive by nature, but not in a zero-sum way. I don't
            need to be the best person in the room. I just find that having
            something at stake makes everything more interesting, whether that's
            a pickup badminton game, a semester GPA, or a model accuracy
            benchmark. It sharpens my focus and usually makes the people around
            me more engaged too.
          </p>
        </div>

        {/* Section 2: How I work with people */}
        <div style={styles.section}>
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

          <p style={styles.prose}>
            Some of my best learning has come not from papers or courses but
            from the people I've worked alongside. At Shell, I was part of a
            cross-functional team building operational dashboards for B2C apps.
            Early on I noticed we had a bottleneck: everyone was siloed in their
            own lane. If I was deep in code, or someone from the business side
            was unavailable, progress froze. The team was functional but not
            resilient.
          </p>
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

          <div style={styles.pullQuote}>
            <p style={styles.pullQuoteText}>
              "Asking 'what decision will this drive?' instead of 'is this the
              most elegant solution?' changed how I framed everything. Being
              technically correct stopped being the goal. Being actually useful
              became the goal."
            </p>
          </div>

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
        </div>

        {/* Section 3: Honest self-assessment */}
        <div style={styles.section}>
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

          <div style={styles.weaknessCard}>
            <div style={styles.weaknessTitle}>Going too deep</div>
            <p style={styles.weaknessBody}>
              The same obsessiveness that makes me thorough can make me fixate
              on making one thing work long after I should have pivoted. I've
              sat at dead ends before because I was too committed to a
              direction. I've gotten better at recognizing that signal early and
              forcing myself to step back and explore alternatives, but it's
              something I actively keep in check.
            </p>
          </div>

          <div style={styles.weaknessCard}>
            <div style={styles.weaknessTitle}>Best under a deadline</div>
            <p style={styles.weaknessBody}>
              Pressure doesn't rattle me, it focuses me. Some of my best output
              has come in the final stretch before something was due. The flip
              side is that without a real deadline, I can drift. Over time I've
              learned to manufacture my own constraints, setting personal
              deadlines and targets rather than waiting for external pressure to
              kick in. It's made me significantly more consistent.
            </p>
          </div>

          <p style={styles.prose}>
            Neither of these is a secret. Self-awareness about how you're wired
            is the first step to actually improving, and I'd rather be honest
            about it than pretend I'm a perfectly optimized machine.
          </p>
        </div>

        {/* Section 4: How I got here */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <div
              style={{
                ...styles.sectionIcon,
                background: "rgba(56, 139, 253, 0.15)",
                color: "#60a5fa",
              }}
            >
              →
            </div>
            <h2 style={styles.sectionTitle}>How I got here</h2>
          </div>

          <div style={styles.timeline}>
            <div style={styles.timelineLine} />
            {timelineItems.map((item, i) => (
              <div
                key={i}
                style={{
                  ...styles.timelineItem,
                  marginBottom:
                    i === timelineItems.length - 1 ? "0" : styles.timelineItem.marginBottom,
                }}
              >
                <div
                  style={item.active ? styles.timelineDotActive : styles.timelineDot}
                />
                <div style={styles.timelineYear}>{item.year}</div>
                <div style={styles.timelineTitle}>{item.title}</div>
                <p style={styles.timelineBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Outside of work */}
        <div style={{ ...styles.section, marginBottom: "1rem" }}>
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

          <div style={styles.outsideGrid}>
            {outsideItems.map((item) => (
              <div key={item.title} style={styles.outsideCard}>
                <div style={styles.outsideCardTitle}>{item.title}</div>
                <p style={styles.outsideCardBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default AboutCard;