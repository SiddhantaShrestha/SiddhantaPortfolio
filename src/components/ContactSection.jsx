import { ArrowUpRight, Copy, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { cn } from "@/lib/utils";

const email = "siddhanta.work@gmail.com";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const [copyMessage, setCopyMessage] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyMessage("Email address copied.");
    } catch {
      setCopyMessage("Select the email address to copy it.");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage("");
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    //  spam honeypot
    if (formData.get("_gotcha")?.length) {
      setIsSubmitting(false);
      return;
    }

    const name = formData.get("name") || "New Contact";
    formData.set("_subject", `Portfolio contact from ${name}`);

    try {
      const res = await fetch("https://formspree.io/f/mblprwkz", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setSubmitMessage("Your message has been sent successfully!");
        form.reset();
      } else {
        let msg = "Something went wrong. Please try again.";
        try {
          const data = await res.json();
          if (data?.errors?.[0]?.message) msg = data.errors[0].message;
        } catch {
          // Keep default error message when response body is unavailable.
        }
        setSubmitMessage(msg);
      }
    } catch {
      setSubmitMessage("Your message could not be sent. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t bg-card/50">
      <div className="mx-auto grid max-w-6xl gap-7 px-6 py-12 text-left sm:px-10 md:grid-cols-2 md:gap-12 md:py-16">
        <div>
          <h2 id="contact-title" className="text-4xl font-semibold tracking-tight">Get in touch</h2>
          <p className="my-4 max-w-sm leading-relaxed text-muted-foreground">I’m open to full-stack development and applied AI opportunities.</p>
          <div className="flex flex-wrap items-center gap-2">
            <a className="font-semibold text-primary underline underline-offset-4" href={"mailto:" + email}>{email}</a>
            {navigator.clipboard?.writeText && (
              <button type="button" onClick={copyEmail} aria-label="Copy email address" className="rounded-lg border bg-card p-2 hover:border-primary"><Copy size={16}/></button>
            )}
          </div>
          <p role="status" className="text-sm text-muted-foreground">{copyMessage}</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href="tel:+9779803326254">+977 980 332 6254</a>
            <a href="https://www.linkedin.com/in/siddhanta-shrestha-321207286/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">LinkedIn <ArrowUpRight size={14}/></a>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-5 sm:p-7">
          <h3 className="mb-5 text-xl font-semibold">Send a message</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Honeypot */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                autoComplete="name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                autoComplete="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-y"
                placeholder="What would you like to work on?"
                rows={5}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2",
                isSubmitting && "opacity-80 cursor-not-allowed"
              )}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>

            {submitMessage && (
              <p role="status" className="text-sm text-primary">{submitMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
