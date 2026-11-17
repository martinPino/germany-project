import Image from "next/image";
import { site } from "@/content/site";

export default function About() {
  const w = site.who;
  return (
    <section id="quien-soy" className="section grid items-center gap-10 md:grid-cols-5">
      <Image src="/lena.jpg" alt="Lena en su día a día en Alemania" width={800} height={800} sizes="(min-width: 768px) 24rem, 90vw" className="mx-auto aspect-[4/5] w-full max-w-sm rounded-[2.5rem] object-cover md:col-span-2" />
      <div className="md:col-span-3">
        <h2 className="h2">{w.title}</h2>
        <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
          {w.paragraphs.map((p) => (<p key={p}>{p}</p>))}
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {w.badges.map((b) => (
            <li key={b} className="rounded-full bg-sage/15 px-4 py-1.5 text-sm font-semibold text-sagetext">{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
