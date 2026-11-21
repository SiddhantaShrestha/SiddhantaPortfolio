const skills = [
  { title: "AI retrieval & evaluation", stack: "Embeddings, semantic search with pgvector, and retrieval testing for a RAG app using Ollama and Gemini.", project: "CiteDocs", href: "#citedocs" },
  { title: "Web interfaces & APIs", stack: "Responsive interfaces with React and Next.js, backed by Node.js and Express APIs.", project: "Recruit Nepal", href: "#recruit-nepal" },
  { title: "Document AI & prompting", stack: "CV extraction with Azure AI Document Intelligence and prompt refinement for recruitment workflows.", project: "Recruit Nepal", href: "#recruit-nepal" },
  { title: "Workflow automation", stack: "Connected vacancy webhooks, Gemini, Google Drive, and LinkedIn in n8n to turn job details into published hiring posts.", project: "Job Post Automation", href: "#job-post-automation" },
];

export const SkillsSection = () => (
  <section id="skills" className="relative mx-auto max-w-6xl px-6 py-12 text-left sm:px-10">
    <h2 className="mb-6 text-3xl font-bold">Technical skills</h2>
    <div className="grid gap-5 sm:grid-cols-2">
      {skills.map(({title, stack, project, href}) => (
        <div key={title} className="rounded-xl border bg-card p-5">
          <h3 className="font-semibold">{title}</h3>
          <p className="my-3 text-muted-foreground">{stack}</p>
          <a href={href} className="font-medium text-primary underline">{project}</a>
        </div>
      ))}
    </div>
  </section>
);
