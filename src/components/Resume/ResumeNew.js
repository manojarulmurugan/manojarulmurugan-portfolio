import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Manoj_Arulmurugan.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <style>{`
        .resume-section .resume-download-cta.btn-primary {
          min-width: 280px;
          max-width: 420px;
          width: auto;
          padding: 14px 40px !important;
          font-size: 1.1rem !important;
          font-weight: 600 !important;
          border-radius: 12px !important;
          letter-spacing: 0.02em;
          color: #0a0a0a !important;
          background-color: #f59e0b !important;
          border: 2px solid #fbbf24 !important;
          box-shadow:
            0 10px 36px rgba(245, 158, 11, 0.5),
            0 2px 12px rgba(0, 0, 0, 0.35) !important;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease !important;
        }
        .resume-section .resume-download-cta.btn-primary:hover {
          color: #0a0a0a !important;
          background-color: #fbbf24 !important;
          border-color: #fcd34d !important;
          transform: translateY(-2px);
          box-shadow:
            0 14px 44px rgba(245, 158, 11, 0.55),
            0 4px 16px rgba(0, 0, 0, 0.4) !important;
        }
      `}</style>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            className="resume-download-cta"
            variant="primary"
            href={pdf}
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            className="resume-download-cta"
            variant="primary"
            href={pdf}
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            marginTop: "1.25rem",
            paddingBottom: "2.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: "#22c55e",
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <span
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255, 255, 255, 0.52)",
                lineHeight: 1.4,
              }}
            >
              Last updated{" "}
              <span style={{ color: "rgba(255, 255, 255, 0.92)", fontWeight: 600 }}>
                March 2026
              </span>
            </span>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
