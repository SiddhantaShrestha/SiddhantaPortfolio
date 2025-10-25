import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Code2,
  Heart,
} from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative mt-24 border-t border-border bg-card/60">
      {/* top gradient line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container py-12 px-4">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand / Blurb */}
          <div className="space-y-4">
            <a href="#hero" className="inline-flex items-center gap-2">
              <span className="text-xl font-bold">
                <span className="text-glow">Siddhanta</span>{" "}
                <span className="text-primary">Shrestha</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-stack developer crafting responsive, reliable web apps. I
              care about clean code, performance, and delightful UX.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                Open to opportunities
              </span>
              <a
                href="/cv/Siddhanta-Shrestha-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-foreground/80 hover:text-primary transition-colors"
              >
                <ExternalLink size={14} />
                View CV
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:siddhanta.work@gmail.com"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  siddhanta.work@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-foreground/80">
                  Thasikhel, Lalitpur, Nepal
                </span>
              </li>
            </ul>

            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://github.com/SiddhantaShrestha"
                target="_blank"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/siddhanta-shrestha-321207286/"
                target="_blank"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Built With / Stack */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Built With</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "Tailwind CSS", "Vite", "Formspree"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Code2 className="h-4 w-4" />
              <span>Deployed & optimized for fast loads</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-border/60" />

        {/* Bottom Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {year} SiddhantaShrestha — Crafted with{" "}
            <Heart className="inline-block h-3 w-3 text-primary" /> and coffee.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/SiddhantaShrestha"
              target="_blank"
              className="text-xs text-foreground/70 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://chat-app-vx2yk.sevalla.app/"
              target="_blank"
              className="text-xs text-foreground/70 hover:text-primary transition-colors"
            >
              Live Project
            </a>

            <a
              href="#hero"
              className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 text-primary hover:bg-primary/20 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
