import { useId, useState } from "react";
import { ArrowUpRight } from "lucide-react";

// Counts from the CiteDocs README's Hit@5 evaluation on the same 41 questions.
const results = [
  { length: 300, Vector: 36, Keyword: 27 },
  { length: 500, Vector: 35, Keyword: 27 },
  { length: 800, Vector: 33, Keyword: 32 },
];
const total = 41;

export const RetrievalComparison = () => {
  const [method, setMethod] = useState("Vector");
  const groupName = useId();
  return (
    <figure className="retrieval-panel">
      <figcaption>
        <h4 className="text-2xl font-semibold tracking-tight">How often did search find the source?</h4>
        <p className="mt-2 text-sm leading-relaxed">Questions with the expected passage in the top five results, out of 41.</p>
      </figcaption>
      <fieldset className="method-picker">
        <legend className="sr-only">Search method</legend>
        {["Vector", "Keyword"].map(name => (
          <label key={name}>
            <input type="radio" name={groupName} value={name} checked={method === name} onChange={() => setMethod(name)} />
            <span>{name} search</span>
          </label>
        ))}
      </fieldset>
      <div aria-live="polite" aria-atomic="true">
        <span className="sr-only">{method} search results by passage length</span>
        <ul className="space-y-3">
          {results.map(row => (
            <li key={row.length} className="result-row">
              <span>{row.length} chars</span>
              <span aria-hidden="true" className="result-track"><span style={{width: `${100 * row[method] / total}%`}} /></span>
              <strong>{row[method]}/41</strong>
            </li>
          ))}
        </ul>
      </div>
      <a className="mt-5 inline-flex items-center gap-1 text-sm font-semibold underline underline-offset-4" href="https://github.com/SiddhantaShrestha/citedocs#how-we-tested" target="_blank" rel="noreferrer">Read the experiment <ArrowUpRight size={16} /></a>
    </figure>
  );
};
