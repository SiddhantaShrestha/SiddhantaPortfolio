import { useState } from "react";
import { FilePenLine, FileCheck2, ListChecks } from "lucide-react";

export const RevisionPreview = () => {
  const [score, setScore] = useState(7);
  const needsRevision = score < 8;
  const ReportIcon = needsRevision ? FilePenLine : FileCheck2;

  return (
    <div className="rounded-xl border bg-background p-5 text-left">
      <h4 className="text-lg font-semibold">When does a draft get revised?</h4>
      <p className="mt-1 text-sm text-muted-foreground">Try an example score to follow the pipeline’s decision.</p>
      <div className="mt-5 flex items-baseline justify-between gap-3">
        <label htmlFor="draft-score" className="text-sm font-medium">Example evaluation score</label>
        <span aria-hidden="true" className="font-mono text-xl font-semibold text-primary">{score}/10</span>
      </div>
      <input id="draft-score" type="range" min="1" max="10" step="1" value={score}
        onChange={event => setScore(Number(event.target.value))}
        aria-valuetext={score + " out of 10"} className="h-8 w-full cursor-pointer accent-primary" />
      <div className="mt-3 border-t pt-4" aria-live="polite">
        <p className="flex items-center gap-2 font-semibold">
          <ReportIcon size={18} aria-hidden="true" className="shrink-0 text-primary" />
          {needsRevision ? "Revise the draft" : "Keep the draft"}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {needsRevision
            ? "Below 8, the revision agent uses the evaluator’s critique to edit the report."
            : "At 8 or above, the draft becomes the final report and the extra model call is skipped."}
        </p>
      </div>
      <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
        <ListChecks size={18} aria-hidden="true" className="shrink-0 text-primary" />
        Both paths end with a check of the report’s claims against the retrieved passages.
      </p>
    </div>
  );
};
