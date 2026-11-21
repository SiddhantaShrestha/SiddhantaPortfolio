import { cvUrl } from "@/lib/portfolio";

export const AboutSection = () => (
  <section id="about" className="relative mx-auto max-w-6xl px-6 py-12 text-left sm:px-10">
    <h2 className="text-3xl font-bold">About me</h2>
    <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
      I’m pursuing an MSc in IT in Artificial Intelligence at Islington College.
      My work spans the application and the AI behind it. On CiteDocs, that meant
      building document permissions and testing whether search found the right passage.
      Before moving into development, I worked in customer success and led a
      recruitment CRM project from planning to its first release.
    </p>
    <div className="mt-5 flex flex-wrap gap-5 font-medium text-primary">
      <a className="underline" href="#contact">Get in touch</a>
      <a className="underline" href={cvUrl} download="Siddhanta-Shrestha-CV.pdf">Download CV</a>
      <a className="underline" href={cvUrl} target="_blank" rel="noreferrer">View CV</a>
    </div>
  </section>
);
