import { ArrowRight, ExternalLink, Github } from "lucide-react";

const professionalProjects = [
  {
    id: "recruit-nepal",
    title: "Recruit Nepal – AI-Powered Recruitment Platform",
    description:
      "A full-scale recruitment platform featuring AI-powered CV scoring, JD–CV matching, Easy Apply, recruiter dashboards, automated emails, and CV builder.",
    image: "/projects/recruitnepal.png", // add to /public/projects
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "AI/LLM",
    ],
    demoUrl: "https://recruitnepal.com",
    githubUrl: "https://github.com/recruitnepal",
    role: "Full-Stack Developer (Founding Team)",
  },
];

const projects = [
  {
    id: 1,
    title: "Realtime Chat App",
    description:
      "Built a real-time chat platform with direct messaging, typing indicators, sound alerts, and global state management.",
    image: "/projects/realtimechatapp.png",
    tags: ["React", "Express", "Socket.io", "Zustand"],
    demoUrl: "https://chat-app-vx2yk.sevalla.app/",
    githubUrl: "https://github.com/SiddhantaShrestha/Chat-app",
  },
  {
    id: 2,
    title: "Google Drive Clone",
    description:
      "Built a cloud storage app with upload, folder management, shareable links, and secure user-level file access.",
    image: "/projects/storeit.png",
    tags: ["Next.js", "Appwrite", "TailwindCSS"],
    demoUrl: "https://google-drive-clone-woad.vercel.app/",
    githubUrl: "https://github.com/SiddhantaShrestha/Google_Drive_clone",
  },
  {
    id: 3,
    title: "Recipe Platform (MERN Stack)",
    description:
      "Developed a full-stack recipe platform with personalized recommendations, secure auth with RBAC, subscriptions, payments, and admin/vendor dashboards.",
    image: "/projects/RecipeNest.png",
    tags: ["MongoDB", "Express", "React", "Node.js", "eSewa"],
    demoUrl: "https://recipenest-nepal.onrender.com/",
    githubUrl: "https://github.com/SiddhantaShrestha/RecipeNest-Nepal",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A mix of professional and personal projects, built with modern
          technologies and a focus on clean, scalable architecture.
        </p>

        {/* PROFESSIONAL PROJECT SECTION */}
        <h3 className="text-xl font-semibold mb-6">Professional Project</h3>

        <div className="max-w-3xl mx-auto mb-12">
          {professionalProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover border border-border"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
                  Professional
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">
                  {project.role}
                </p>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-1 text-sm text-muted-foreground mb-3 text-left">
                  <li>Technologies: {project.tags.join(", ")}</li>
                </ul>

                <div className="flex items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PERSONAL PROJECTS */}
        <h3 className="text-xl font-semibold mb-6">Personal Projects</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <ul className="space-y-1 text-sm text-muted-foreground mb-3 text-left">
                  <li>Technologies: {project.tags.join(", ")}</li>
                </ul>

                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/SiddhantaShrestha"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
