import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const STATUS_STYLES = {
  "Live Demo": { labelColor: "#34d399", dotColor: "#34d399", pulse: true },
  Research: { labelColor: "#60a5fa", dotColor: "#60a5fa", pulse: false },
  Production: { labelColor: "#f59e0b", dotColor: "#f59e0b", pulse: false },
  "In Progress": { labelColor: "#fb923c", dotColor: "#fb923c", pulse: false },
};

const STATUS_FALLBACK = {
  labelColor: "#94a3b8",
  dotColor: "#94a3b8",
  pulse: false,
};

function ProjectCards(props) {
  const statusCfg =
    props.status != null
      ? STATUS_STYLES[props.status] ?? STATUS_FALLBACK
      : null;

  return (
    <Card className="project-card-view" style={{ height: "100%" }}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        {props.status != null && (
          <span
            className="project-card-status-row"
            style={{ color: statusCfg.labelColor }}
          >
            <span
              className={
                statusCfg.pulse
                  ? "project-card-status-dot project-card-status-dot--live-pulse"
                  : "project-card-status-dot"
              }
              style={{ background: statusCfg.dotColor }}
            />
            {props.status}
          </span>
        )}
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.tags && props.tags.length > 0 && (
          <div className="project-card-tags">
            {props.tags.map((tag, i) => (
              <span
                key={tag}
                className={
                  i < 2
                    ? "project-card-tag-pill project-card-tag-pill--accent"
                    : "project-card-tag-pill project-card-tag-pill--muted"
                }
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="project-card-actions">
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
