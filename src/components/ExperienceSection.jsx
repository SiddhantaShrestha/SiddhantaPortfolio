import { Calendar } from "lucide-react";

const experiences = [
  {
    "role": "Full Stack Developer",
    "company": "Intern Nepal / Recruit Nepal",
    "period": "Jun 2025 – present",
    "location": "Lalitpur, Nepal",
    "points": [
      "Built job listings, candidate workflows, and recruiter dashboards with React, Next.js, Tailwind CSS, and shadcn/ui for Recruit Nepal, a platform with 7,597 unique users as of November 2026.",
      "Developed and integrated the Node.js and Express REST APIs behind candidate and recruiter workflows.",
      "Worked with Azure AI Document Intelligence to extract information from CVs and refined prompts used in AI-assisted recruitment."
    ]
  },
  {
    "role": "Frontend and Project Tech Support Intern",
    "company": "Intern Nepal / Recruit Nepal",
    "period": "Jul 2024 – Jan 2025",
    "location": "Lalitpur, Nepal",
    "points": [
      "Led a six-month recruitment CRM project from planning through delivery of its first working version.",
      "Tracked tasks and ownership in Trello throughout each sprint, from planning through the team retrospective.",
      "Maintained the project charter and meeting reports to keep developers and non-technical stakeholders aligned on decisions."
    ]
  },
  {
    "role": "Customer Success Representative",
    "company": "ING Skill Academy",
    "period": "Sep 2023 – Feb 2024",
    "location": "Kathmandu, Nepal",
    "points": [
      "Guided customers through onboarding and answered questions as they started using the service.",
      "Collected customer feedback and shared it with internal teams to inform service improvements and retention efforts."
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-12 text-left sm:px-10">
      <div className="w-full">
        <h2 className="mb-6 text-3xl font-bold">
          Work <span className="text-primary">Experience</span>
        </h2>

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

                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
