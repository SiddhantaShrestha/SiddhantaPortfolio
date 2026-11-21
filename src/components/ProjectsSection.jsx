import { ArrowUpRight, Github } from "lucide-react";
import { RetrievalComparison } from "./RetrievalComparison";
import { RevisionPreview } from "./RevisionPreview";

const linkStyle = "inline-flex items-center gap-1.5 rounded-sm font-medium text-primary underline decoration-primary/50 underline-offset-4 hover:decoration-current";
const applicantReviewImage = "/projects/recruit-nepal-applicant-review.png";
const linkedInPostImage = "/projects/recruit-nepal-linkedin-post.png";

export const ProjectsSection = () => (
  <section id="projects" className="relative mx-auto max-w-6xl px-6 py-12 text-left sm:px-10">
    <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Selected work</h2>
    <article id="recruit-nepal" className="overflow-hidden rounded-2xl border bg-card md:grid md:grid-cols-2">
      <div className="flex items-center bg-linear-to-br from-violet-100 via-violet-200 to-indigo-300 p-4 sm:p-8">
        <img className="w-full rounded-lg border border-black/10 shadow-xl" src="/projects/recruitnepal.png" alt="Recruit Nepal homepage with job search and candidate sign-up" />
      </div>
      <div className="space-y-4 p-6 sm:p-8">
        <p className="text-sm font-semibold text-primary">Professional work · Full-stack developer</p>
        <h3 className="text-3xl font-bold">Recruit Nepal</h3>
        <p className="text-muted-foreground">Recruit Nepal connects candidates and employers across Nepal. As of November 2026, the platform has 7,597 unique users.</p>
        <div>
          <h4 className="mb-1 font-semibold">CV processing</h4>
          <p className="text-muted-foreground">I worked with Azure AI Document Intelligence to extract information from CVs and refined the prompts used in recruitment workflows.</p>
        </div>
        <div>
          <h4 className="mb-1 font-semibold">Candidate and recruiter tools</h4>
          <p className="text-muted-foreground">I built job listings, candidate workflows and recruiter dashboards with React and Next.js, and connected them to REST APIs using Node.js and Express.</p>
        </div>
        <div className="flex flex-wrap gap-5 pt-1">
          <a className={linkStyle} href="https://recruitnepal.com" target="_blank" rel="noreferrer">Visit Recruit Nepal <ArrowUpRight size={16}/></a>
        </div>
      </div>
      <figure className="min-w-0 border-t p-4 sm:p-8 md:col-span-2">
        <a href={applicantReviewImage} target="_blank" rel="noreferrer" className="group block rounded-lg" aria-label="Open the full-size applicant review screenshot in a new tab">
          <img
            src={applicantReviewImage}
            width={1577}
            height={541}
            loading="lazy"
            alt="Two demo applicants for a Motion Graphic Designer vacancy, with job matches, AI recommendations, and hiring-stage controls."
            className="block h-auto w-full rounded-lg border"
          />
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary underline underline-offset-4">
            View full size <ArrowUpRight size={15} aria-hidden="true" />
          </span>
        </a>
        <figcaption className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Recruit Nepal’s applicant review dashboard on the test server. Recruiters can review AI suggestions and update each applicant’s hiring stage.
        </figcaption>
      </figure>
    </article>
    <article id="citedocs" className="mt-6 grid gap-6 rounded-2xl border bg-card p-4 sm:p-8 md:grid-cols-2 md:gap-10">
      <div className="space-y-4">
        <p className="text-sm font-semibold text-primary">Personal project · AI document search</p>
        <h3 className="text-3xl font-bold">CiteDocs</h3>
        <p className="text-muted-foreground">I built a Q&amp;A app that searches documents a teammate has permission to read and cites the passage behind each answer.</p>
        <p className="text-muted-foreground">I tested how passage length affected retrieval. With pgvector and 300-character passages, the expected source appeared in the first five results for 36 of 41 questions (87.8% Hit@5).</p>
        <div className="flex flex-wrap gap-5">
          <a className={linkStyle} href="https://citedocs.vercel.app/" target="_blank" rel="noreferrer">Open CiteDocs (sign in) <ArrowUpRight size={16}/></a>
          <a className={linkStyle} href="https://github.com/SiddhantaShrestha/citedocs" target="_blank" rel="noreferrer">Source code <Github size={16}/></a>
        </div>
        <div className="border-l-2 border-primary pl-4">
          <h4 className="text-sm font-semibold text-primary">Example from the retrieval tests</h4>
          <p className="mt-2 font-semibold">When are engineering bonuses paid?</p>
          <p className="text-muted-foreground">On the last Friday of April.</p>
        </div>
      </div>
      <RetrievalComparison />
    </article>
    <div className="mt-6 grid gap-5 md:grid-cols-2">
      <article id="job-post-automation" className="flex flex-col gap-3 rounded-xl border bg-card p-6">
        <p className="text-sm font-semibold text-primary">Workflow automation · n8n and Gemini</p>
        <h3 className="text-2xl font-semibold">Job Post Automation</h3>
        <p className="text-muted-foreground">A vacancy arrives by webhook. The workflow checks the required fields, uses Gemini to write a caption and generate a poster with the company logo from Google Drive, then sends both to LinkedIn.</p>
        <figure>
          <a href={linkedInPostImage} target="_blank" rel="noreferrer" aria-label="View the published LinkedIn post at full size" className="flex justify-center rounded-lg border bg-background p-3 hover:border-primary">
            <img src={linkedInPostImage} width={573} height={708} loading="lazy" alt="Recruit Nepal’s LinkedIn caption and branded hiring poster for a remote Client Support & Sales Coordinator." className="block h-auto max-h-80 w-auto max-w-full rounded object-contain" />
          </a>
          <figcaption className="mt-2 text-sm text-muted-foreground">Published to Recruit Nepal’s LinkedIn page through this workflow.</figcaption>
        </figure>
        <div className="mt-auto flex flex-wrap gap-5 pt-2">
          <a href="/projects/job-post-automation.png" className={linkStyle} target="_blank" rel="noreferrer">View workflow diagram <ArrowUpRight size={16}/></a>
          <a href="https://github.com/SiddhantaShrestha/n8n-linkedin-job-post-automation" className={linkStyle} target="_blank" rel="noreferrer" aria-label="Job Post Automation repository">GitHub <Github size={16}/></a>
        </div>
      </article>
      <article id="research-eval-agent" className="flex flex-col gap-3 rounded-xl border bg-card p-6">
        <p className="text-sm font-semibold text-primary">Applied AI · Python and Groq</p>
        <h3 className="text-2xl font-semibold">Research Evaluation Agent</h3>
        <p className="text-muted-foreground">I built a Python pipeline that drafts research reports from source documents. An evaluator scores each draft on relevance, completeness, clarity, and use of evidence.</p>
        <RevisionPreview />
        <div className="mt-auto flex flex-wrap gap-5 pt-2">
          <a href="https://github.com/SiddhantaShrestha/autonomous-research-eval-agent/blob/main/src/pipeline.py" className={linkStyle} target="_blank" rel="noreferrer">Inspect the pipeline <ArrowUpRight size={16}/></a>
          <a href="https://github.com/SiddhantaShrestha/autonomous-research-eval-agent" className={linkStyle} target="_blank" rel="noreferrer" aria-label="Research Evaluation Agent repository">GitHub <Github size={16}/></a>
        </div>
      </article>
      <article id="youtube-transcript-qa" className="flex flex-col gap-3 rounded-xl border bg-card p-6">
        <img src="/projects/youtube-chatbot.png" width={1649} height={942} loading="lazy" alt="YouTube Chatbot’s Streamlit interface with the video URL field, Load video button, and chat input." className="h-auto w-full rounded-md border" />
        <p className="text-sm font-semibold text-primary">Video Q&amp;A · Streamlit and LangChain</p>
        <h3 className="text-2xl font-semibold">YouTube Chatbot</h3>
        <p className="text-muted-foreground">Paste a YouTube URL or video ID to summarize a video or ask what the speaker said about a specific topic. The app uses the video’s English captions as its source.</p>
        <p className="text-muted-foreground">Summaries draw on the broader transcript. For specific questions, the app searches a FAISS index built with Hugging Face embeddings and sends the four closest passages to the model through OpenRouter.</p>
        <div className="mt-auto flex flex-wrap gap-5 pt-2">
          <a href="https://youtube-chatbot-using-langchain-bqqidajkj5sc4kcenzlktw.streamlit.app/" className={linkStyle} target="_blank" rel="noreferrer">Try YouTube Chatbot <ArrowUpRight size={16}/></a>
          <a href="https://github.com/SiddhantaShrestha/YouTube-Chatbot-using-LangChain" className={linkStyle} target="_blank" rel="noreferrer" aria-label="YouTube Chatbot source code">Source code <Github size={16}/></a>
        </div>
      </article>
      <article id="recipenest" className="flex flex-col gap-3 rounded-xl border bg-card p-6">
        <img src="/projects/RecipeNest.png" alt="RecipeNest recipe browsing interface" loading="lazy" className="aspect-[3/1] w-full rounded-md object-cover object-top" />
        <h3 className="text-2xl font-semibold">RecipeNest</h3>
        <p className="text-muted-foreground">I built a recipe platform with paid subscriptions through eSewa. The Express backend handles payment initiation, verification, and transaction status.</p>
        <div className="mt-auto flex flex-wrap gap-5 pt-2">
          <a href="https://recipenest-nepal.onrender.com/" className={linkStyle} target="_blank" rel="noreferrer">Open RecipeNest <ArrowUpRight size={16}/></a>
          <a href="https://github.com/SiddhantaShrestha/RecipeNest-Nepal" className={linkStyle} target="_blank" rel="noreferrer" aria-label="RecipeNest repository">GitHub <Github size={16}/></a>
        </div>
      </article>
    </div>
  </section>
);
