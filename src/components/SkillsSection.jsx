import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  {
    name: "HTML/CSS",
    level: 95,
    category: "frontend",
    tooltip: "Expert in building responsive layouts with modern CSS.",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
    tooltip: "Strong ES6+ fundamentals for interactive web applications.",
  },
  {
    name: "React",
    level: 90,
    category: "frontend",
    tooltip: "Builds scalable, component-driven interfaces with hooks.",
  },
  {
    name: "TypeScript",
    level: 75,
    category: "frontend",
    tooltip: "Uses static typing to improve code safety and maintainability.",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    tooltip: "Rapidly crafts consistent and responsive design systems.",
  },
  {
    name: "Next.js",
    level: 95,
    category: "frontend",
    tooltip: "Develops production-ready React apps with App Router and SSR.",
  },

  // Backend
  {
    name: "Node.js",
    level: 85,
    category: "backend",
    tooltip: "Builds performant backend services and APIs in JavaScript.",
  },
  {
    name: "Express",
    level: 85,
    category: "backend",
    tooltip: "Designs RESTful APIs with middleware and clean routing.",
  },
  {
    name: "MongoDB",
    level: 70,
    category: "backend",
    tooltip: "Works with schema design and data modeling for NoSQL apps.",
  },
  {
    name: "PostgreSQL",
    level: 75,
    category: "backend",
    tooltip: "Uses relational databases for reliable, structured data storage.",
  },

  // Tools
  {
    name: "Git/GitHub",
    level: 90,
    category: "tools",
    tooltip: "Manages version control workflows, PRs, and collaboration.",
  },
  // { name: "Docker", level: 50, category: "tools" },
  {
    name: "Figma",
    level: 60,
    category: "tools",
    tooltip: "Collaborates on UI design and prototyping workflows.",
  },
  {
    name: "OpenClaw",
    level: 85,
    category: "tools",
    tooltip: "Uses OpenClaw tools and workflows for modern development tasks.",
  },
  {
    name: "Prisma",
    level: 75,
    category: "tools",
    tooltip: "Builds type-safe database access layers using Prisma ORM.",
  },
  {
    name: "Prompt Engineering",
    level: 80,
    category: "tools",
    tooltip: "Designs structured prompts for reliable AI-assisted outputs.",
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [shouldAnimateBars, setShouldAnimateBars] = useState(false);

  const triggerBarAnimation = () => {
    setShouldAnimateBars(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setShouldAnimateBars(true);
      });
    });
  };

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerBarAnimation();
        } else {
          setShouldAnimateBars(false);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(sectionEl);

    return () => observer.disconnect();
  }, []);

  const filteredSkills = skills
    .filter(
      (skill) => activeCategory === "all" || skill.category === activeCategory,
    )
    .sort((a, b) => b.level - a.level);
  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(category);
                triggerBarAnimation();
              }}
              aria-label={`Filter ${category} skills`}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="group relative bg-card p-6 rounded-lg shadow-xs card-hover"
              tabIndex={0}
              aria-label={`${skill.name}: ${skill.tooltip}`}
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left transition-[width] duration-1000 ease-out"
                  title={skill.tooltip}
                  style={{
                    width: shouldAnimateBars ? `${skill.level}%` : "0%",
                  }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>

              <div className="pointer-events-none absolute left-1/2 top-0 z-20 w-[90%] -translate-x-1/2 -translate-y-[110%] rounded-md border border-border bg-background/95 px-3 py-2 text-left text-xs text-foreground shadow-md opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                {skill.tooltip}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
