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
    { kind: "name", text: "name" },
    { kind: "punct", text: "       = " },
    { kind: "str", text: "'Manoj Arulmurugan'" },
  ],
  [
    { kind: "kw", text: "const " },
    { kind: "name", text: "role" },
    { kind: "punct", text: "       = " },
    {
      kind: "str",
      text: "'Data Scientist · ML Engineer · Applied AI'",
    },
  ],
  [
    { kind: "kw", text: "const " },
    { kind: "name", text: "journey" },
    { kind: "punct", text: "    = " },
    { kind: "str", text: "'Chennai → Bangalore → Madison'" },
  ],
  [
    { kind: "kw", text: "const " },
    { kind: "name", text: "obsession" },
    { kind: "punct", text: "  = " },
    {
      kind: "str",
      text: "'the gap between notebook and production'",
    },
  ],
  [
    { kind: "kw", text: "const " },
    { kind: "name", text: "production" },
    { kind: "punct", text: " = { " },
    { kind: "name", text: "Calix" },
    { kind: "punct", text: ": " },
    { kind: "str", text: "'~50% MAPE reduction'" },
    { kind: "punct", text: ", " },
    { kind: "name", text: "Shell" },
    { kind: "punct", text: ": " },
    { kind: "str", text: "'$250k cost savings'" },
    { kind: "punct", text: " }" },
  ],
  [
    { kind: "kw", text: "const " },
    { kind: "name", text: "research" },
    { kind: "punct", text: "   = { " },
    { kind: "name", text: "RAG" },
    { kind: "punct", text: ": " },
    { kind: "str", text: "'Hit@1 40% → 59%'" },
    { kind: "punct", text: ", " },
    { kind: "name", text: "LLMs" },
    { kind: "punct", text: ": " },
    { kind: "str", text: "'−9.1pp hallucination rate'" },
    { kind: "punct", text: " }" },
  ],
  [
    { kind: "kw", text: "const " },
    { kind: "name", text: "built" },
    { kind: "punct", text: "      = [" },
    { kind: "str", text: "'RecoSys'" },
    { kind: "punct", text: ", " },
    { kind: "str", text: "'AI Trip Planner'" },
    { kind: "punct", text: ", " },
    { kind: "str", text: "'Churn Model'" },
    { kind: "punct", text: "]" },
  ],
  [
    { kind: "kw", text: "const " },
    { kind: "name", text: "status" },
    { kind: "punct", text: "     = " },
    {
      kind: "str",
      text: "'MS Data Science · UW-Madison · May 2026'",
    },
  ],
  [
    {
      kind: "comment",
      text: "// open to: Data Scientist · ML Engineer · Applied AI",
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
