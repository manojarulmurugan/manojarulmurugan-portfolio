import React, { useState, useEffect } from "react";

const LINE_PAUSE_MS = 1500;
const CYCLE_PAUSE_MS = 3000;
const CHAR_DELAY_MS = 22;

function flattenSegments(segments) {
  return segments.flatMap((seg) =>
    [...seg.text].map((ch) => ({ ch, kind: seg.kind }))
  );
}

const LINE_SEGMENTS = [
  [
    { kind: "kw", text: "const " },
    { kind: "name", text: "engineer" },
    { kind: "punct", text: " = " },
    { kind: "str", text: "'Manoj Arulmurugan'" },
    { kind: "punct", text: ";" },
  ],
  [
    { kind: "kw", text: "const " },
    { kind: "name", text: "shipped" },
    { kind: "punct", text: " = " },
    {
      kind: "str",
      text: "'Forecasting ensemble → 50% accuracy lift'",
    },
    { kind: "punct", text: ";" },
  ],
  [
    { kind: "kw", text: "const " },
    { kind: "name", text: "built" },
    { kind: "punct", text: " = " },
    {
      kind: "str",
      text: "'Feature Store · 10+ sources · 100+ features'",
    },
    { kind: "punct", text: ";" },
  ],
  [
    { kind: "kw", text: "const " },
    { kind: "name", text: "research" },
    { kind: "punct", text: " = " },
    {
      kind: "str",
      text: "'RAG pipeline · Hit@1 59% vs 40.4% baseline'",
    },
    { kind: "punct", text: ";" },
  ],
  [
    { kind: "kw", text: "const " },
    { kind: "name", text: "stack" },
    { kind: "punct", text: " = [" },
    { kind: "str", text: "'PyTorch'" },
    { kind: "punct", text: ", " },
    { kind: "str", text: "'Snowflake'" },
    { kind: "punct", text: ", " },
    { kind: "str", text: "'LangChain'" },
    { kind: "punct", text: ", " },
    { kind: "str", text: "'GCP'" },
    { kind: "punct", text: "];" },
  ],
  [
    { kind: "kw", text: "const " },
    { kind: "name", text: "status" },
    { kind: "punct", text: " = " },
    {
      kind: "str",
      text: "'MS Data Science · UW-Madison · May 2026'",
    },
    { kind: "punct", text: ";" },
  ],
  [
    {
      kind: "comment",
      text: "// Open to: Data Scientist · ML Engineer · Applied AI",
    },
  ],
];

const LINES = LINE_SEGMENTS.map(flattenSegments);

function TerminalLine({ chars, visibleCount, showCursor }) {
  const slice = chars.slice(0, visibleCount);
  return (
    <div className="hero-terminal-line">
      {slice.map((c, i) => (
        <span key={i} className={`hero-terminal-ch hero-terminal-${c.kind}`}>
          {c.ch}
        </span>
      ))}
      {showCursor && (
        <span className="hero-terminal-cursor" aria-hidden="true">
          ▊
        </span>
      )}
    </div>
  );
}

function Terminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = LINES[lineIndex];
    if (!current) return undefined;

    let timeoutId;

    if (charIndex < current.length) {
      timeoutId = window.setTimeout(() => {
        setCharIndex((c) => c + 1);
      }, CHAR_DELAY_MS);
      return () => window.clearTimeout(timeoutId);
    }

    const isLast = lineIndex >= LINES.length - 1;
    timeoutId = window.setTimeout(() => {
      if (isLast) {
        setLineIndex(0);
        setCharIndex(0);
      } else {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }
    }, isLast ? CYCLE_PAUSE_MS : LINE_PAUSE_MS);

    return () => window.clearTimeout(timeoutId);
  }, [lineIndex, charIndex]);

  return (
    <div className="hero-terminal">
      <div className="hero-terminal-toolbar">
        <span className="hero-terminal-dot hero-terminal-dot--red" />
        <span className="hero-terminal-dot hero-terminal-dot--yellow" />
        <span className="hero-terminal-dot hero-terminal-dot--green" />
      </div>
      <div className="hero-terminal-body">
        {LINES.map((lineChars, i) => {
          if (i < lineIndex) {
            return (
              <TerminalLine
                key={i}
                chars={lineChars}
                visibleCount={lineChars.length}
                showCursor={false}
              />
            );
          }
          if (i === lineIndex) {
            return (
              <TerminalLine
                key={i}
                chars={lineChars}
                visibleCount={charIndex}
                showCursor
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Terminal;
