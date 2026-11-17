import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <h1 className="font-display text-4xl font-semibold">{title}</h1>
      <p className="mt-3 rounded-xl bg-terra/20 p-3 text-sm">
        Plantilla: completa los datos en <code>content/site.ts</code> (objeto <code>legal</code>) y revísala con un profesional antes de publicar.
      </p>
      <div className="mt-8 space-y-4 leading-relaxed text-muted">{children}</div>
    </div>
  );
}
export const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="!mt-8 font-display text-2xl font-semibold text-ink">{children}</h2>
);
