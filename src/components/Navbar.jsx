import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const sections = [
  ["Home", "#hero"], ["Work", "#projects"], ["About", "#about"],
  ["Skills", "#skills"], ["Experience", "#experience"], ["Contact", "#contact"],
];

export const Navbar = () => {
  const dialog = useRef(null);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("#hero");

  useEffect(() => {
    const targets = sections.map(([, href]) => document.querySelector(href));
    let frame;
    const update = () => {
      const marker = Math.min(window.innerHeight * 0.35, 240);
      let active = "#hero";
      for (const target of targets) {
        if (target && target.getBoundingClientRect().top <= marker) active = "#" + target.id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) active = "#contact";
      setCurrent(active);
      frame = undefined;
    };
    const schedule = () => {
      if (frame === undefined) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = () => {
      if (desktop.matches) dialog.current?.close();
    };
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-3 sm:px-10">
        <a href="#hero" className="text-lg font-bold">Siddhanta<span className="text-primary"> Shrestha</span></a>
        <div className="flex items-center gap-2 md:gap-4">
          <nav aria-label="Main navigation" className="hidden items-center gap-4 text-sm md:flex lg:gap-6">
            {sections.map(([label, href]) => <a key={href} href={href} aria-current={current === href ? "location" : undefined} className="hover:text-primary">{label}</a>)}
          </nav>
          <ThemeToggle />
          <button aria-label="Open menu" aria-controls="mobile-menu" aria-expanded={open}
            onClick={() => { dialog.current.showModal(); setOpen(true); }}
            className="rounded-full p-2 md:hidden"><Menu /></button>
        </div>
      </div>
      <dialog ref={dialog} id="mobile-menu" aria-label="Navigation menu" onClose={() => setOpen(false)}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-background text-foreground">
        <button aria-label="Close menu" onClick={() => dialog.current.close()} className="absolute right-6 top-4 rounded-full p-2"><X /></button>
        <nav aria-label="Mobile navigation" className="flex min-h-full flex-col items-center justify-center gap-6 py-16 text-xl">
          {sections.map(([label, href]) => <a key={href} href={href} aria-current={current === href ? "location" : undefined} onClick={() => dialog.current.close()}>{label}</a>)}
        </nav>
      </dialog>
    </header>
  );
};
