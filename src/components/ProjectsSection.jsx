import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Realtime Chat App",
    description:
      "Socket.io chat with typing indicators, sound notifications, DMs & groups.",
    image: "/projects/realtimechatapp.png", // add a screenshot to /public/projects
    tags: ["React", "Express", "Socket.io", "Zustand"],
    demoUrl: "https://chat-app-vx2yk.sevalla.app/",
    githubUrl: "https://github.com/SiddhantaShrestha/Chat-app",
  },
  {
    id: 2,
    title: "Google Drive Clone",
    description:
      "Next.js + Appwrite storage with upload, folders, and shareable links.",
    image: "/projects/storeit.png", // add a screenshot to /public/projects
    tags: ["Next.js", "Appwrite", "TailwindCSS"],
    demoUrl: "https://google-drive-clone-woad.vercel.app/",
    githubUrl: "https://github.com/SiddhantaShrestha/Google_Drive_clone",
  },
  {
    id: 3,
    title: "RecipeNest Nepal",
    description:
      "Full MERN web app combining recipes, blogs, e-commerce, admin panel, and payments.",
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
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

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
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

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
