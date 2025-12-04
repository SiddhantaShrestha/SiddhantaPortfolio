import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Junior Full Stack Developer & Tech Support",
    company: "Intern Nepal / Recruit Nepal",
    period: "2025",
    location: "Lalitpur, Nepal (Hybrid)",
    points: [
      "Build responsive, production-ready UIs with React and Tailwind CSS for Recruit Nepal's live platform.",
      "Connect frontend features to REST APIs and ship end-to-end user flows across the stack.",
      "Collaborate with the partner company on planning, breaking down tasks, and prioritising features.",
      "Assist with deployments, including hosting, domain configuration, and environment setup.",
    ], // derived from CV :contentReference[oaicite:0]{index=0}
  },
  {
    role: "Project Management & Tech Support Intern",
    company: "Intern Nepal / Recruit Nepal",
    period: "Aug 2024 - Feb 2025",
    location: "Lalitpur, Nepal",
    points: [
      "Coordinated a recruitment CRM project over ~6 months, from initiation to MVP delivery.",
      "Used Trello to manage workflows, track progress, and keep team responsibilities clear.",
      "Applied Agile practices (sprint planning, execution, retros) to keep the project on schedule.",
      "Maintained project documentation like charters and meeting notes for transparency.",
    ], // derived from CV :contentReference[oaicite:1]{index=1}
  },
  {
    role: "Customer Success Representative Intern",
    company: "ING Skill Academy",
    period: "Feb 2024 - Jun 2024",
    location: "New Baneshwor, Kathmandu",
    points: [
      "Supported customer relationships by addressing inquiries and assisting with onboarding.",
      "Gathered customer feedback and collaborated with the team to enhance satisfaction and retention.",
    ], // derived from CV :contentReference[oaicite:2]{index=2}
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Hands-on experience shipping real products, managing projects, and
          supporting users across tech and customer-facing roles.
        </p>

        <div className="relative border-l border-border/60 pl-6 space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* timeline dot */}
              <span className="absolute -left-[11px] flex h-5 w-5 items-center justify-center">
                <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
              </span>

              <div className="bg-card rounded-lg shadow-xs card-hover border border-border/70 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-right text-xs md:text-sm text-muted-foreground flex flex-col items-end gap-1">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 inline-flex items-center gap-2 text-xs text-primary/80">
                  <Briefcase className="h-4 w-4" />
                  <span>Full-stack & product-focused experience</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
