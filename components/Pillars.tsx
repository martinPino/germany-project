import { site } from "@/content/site";
import { CalmIcon, HeartIcon, InfoIcon } from "./Icons";

const icons = { info: InfoIcon, calm: CalmIcon, heart: HeartIcon } as const;

export default function Pillars() {
  const a = site.about;
  return (
    <section id="de-que-va" className="section">
      <h2 className="h2 max-w-3xl">{a.title}</h2>
      <p className="mt-4 max-w-2xl text-lg text-muted">{a.text}</p>
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {a.pillars.map((p) => {
          const Icon = icons[p.icon as keyof typeof icons];
          return (
            <li key={p.title} className="card">
              <span className="inline-flex rounded-2xl bg-sage/20 p-3 text-sagetext"><Icon className="h-6 w-6" /></span>
              <h3 className="mt-4 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-muted">{p.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
