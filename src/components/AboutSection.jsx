import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Curious Coder & Aspiring Full-Stack Developer
            </h3>

            <p className="text-muted-foreground">
              I'm a full-stack developer with a strong interest in building
              interactive, efficient, and user-friendly web applications. I love
              exploring both front-end and back-end technologies to bring ideas
              to life on the web.
            </p>

            <p className="text-muted-foreground">
              My journey in tech is fueled by curiosity — learning new
              frameworks, understanding how things work under the hood, and
              improving a little every day. I aim to write clean, maintainable
              code and create digital experiences that truly make an impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/cv/SiddhantaShrestha.pdf"
                download="Siddhanta-Shrestha-CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>

              <a
                href="/cv/SiddhantaShrestha.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 rounded-full border border-primary/40 text-primary/80 hover:bg-primary/10"
              >
                View CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and scalable web applications using
                    modern JavaScript frameworks and tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Developing server-side logic, working with APIs, and
                    managing databases to support smooth app performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Team Projects & Internships
                  </h4>
                  <p className="text-muted-foreground">
                    Collaborating in team environments, contributing to group
                    projects, and applying agile practices during internships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
