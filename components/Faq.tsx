import { site } from "@/content/site";
import { ChevronIcon } from "./Icons";

export default function Faq() {
  return (
    <section id="faq" className="section max-w-3xl">
      <h2 className="h2">Preguntas frecuentes</h2>
      <div className="mt-8 space-y-3">
        {site.faq.map((f) => (
          <details key={f.q} className="group card !p-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-3xl p-5 font-semibold [&::-webkit-details-marker]:hidden">
              {f.q}
              <ChevronIcon className="h-5 w-5 shrink-0 transition group-open:rotate-180" />
            </summary>
            <p className="px-5 pb-5 text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
