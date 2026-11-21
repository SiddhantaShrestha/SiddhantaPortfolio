import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { cvUrl } from "@/lib/portfolio";

export const HeroSection = () => (
  <section id="hero" aria-labelledby="intro-title" className="intro-section">
    <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-10 text-left sm:px-10 md:py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
      <div>
        <p className="text-sm font-semibold text-primary">Full-stack development &amp; applied AI</p>
        <h1 id="intro-title" className="hero-name">Siddhanta <span>Shrestha</span></h1>
      </div>
      <div>
        <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
          I build hiring software at <a className="intro-link" href="#recruit-nepal">Recruit Nepal</a> and built <a className="intro-link" href="#citedocs">CiteDocs</a> to help teams find answers they can trace back to a source.
        </p>
        <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin size={15} /> Lalitpur, Nepal</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="cosmic-button inline-flex items-center gap-2" href="#projects">View my work <ArrowDown size={16} /></a>
          <a className="inline-flex items-center gap-2 rounded-full border bg-card px-5 py-2 font-medium hover:border-primary" href={cvUrl} target="_blank" rel="noreferrer">View CV <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </div>
  </section>
);
