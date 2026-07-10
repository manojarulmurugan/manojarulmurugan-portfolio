import React from "react";
import { Container } from "react-bootstrap";
import BlogCards from "./BlogCards";
import Particle from "../Particle";
import blogPosts from "../../data/blogPosts";

function Blog() {
  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Writings </strong>
        </h1>
        <p style={{ color: "white" }}>
          Articles about my projects and work in AI and data.
        </p>
        <div className="blog-list">
          {blogPosts.map((post) => (
            <BlogCards
              key={post.url}
              title={post.title}
              summary={post.summary}
              url={post.url}
              date={post.date}
              tags={post.tags}
            />
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Blog;
