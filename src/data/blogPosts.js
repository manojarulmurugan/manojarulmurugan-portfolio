const blogPosts = [
  {
    title: "The Retriever Doesn't Know What Time It Is",
    summary:
      "Ask a standard RAG system 'who is the CEO of Twitter?' and it'll hand you back whatever answer is most semantically dominant in its corpus — it has no idea the answer depends on when you're asking. This is the system I built to fix that: fine-tuning Contriever with temporal hard negatives and an MRAG re-ranker to anchor retrieval to the correct historical era.",
    url: "https://medium.com/@manojarulmurugan/the-retriever-doesnt-know-what-time-it-is-40645263c975",
    date: "Jul 2026",
    tags: ["RAG", "NLP", "Temporal Retrieval"],
    projectSlug: "time-aware-rag",
  },
];

export default blogPosts;
