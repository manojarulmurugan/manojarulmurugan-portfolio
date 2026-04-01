import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      className="justify-content-center align-items-center flex-column"
      style={{
        paddingBottom: "10px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="manojarulmurugan"
        blockSize={30}
        blockMargin={10}
        color="#f59e0b"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
