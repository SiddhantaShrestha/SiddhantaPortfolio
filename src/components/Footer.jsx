import { ArrowUp } from "lucide-react";
import { cvUrl } from "@/lib/portfolio";

export const Footer = () => (
  <footer className="border-t">
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-left text-sm sm:px-10">
      <p className="text-muted-foreground">© {new Date().getFullYear()} Siddhanta Shrestha</p>
      <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <a href="https://github.com/SiddhantaShrestha" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/siddhanta-shrestha-321207286/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={cvUrl} target="_blank" rel="noreferrer">View CV</a>
        <a href="#hero" className="inline-flex items-center gap-1">Back to top <ArrowUp size={15}/></a>
      </nav>
    </div>
  </footer>
);
