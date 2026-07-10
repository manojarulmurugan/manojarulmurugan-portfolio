import React from "react";

function BlogCards({ title, summary, url, date, tags }) {
  return (
    <article className="blog-entry">
      <div className="blog-entry-meta">
        <time>{date}</time>
        {tags && tags.length > 0 && (
          <div className="blog-entry-tags">
            {tags.map((tag) => (
              <span key={tag} className="blog-entry-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <h2 className="blog-entry-title">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
      <p className="blog-entry-summary">{summary}</p>
      <a
        className="blog-entry-cta"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read on Medium →
      </a>
    </article>
  );
}

export default BlogCards;
