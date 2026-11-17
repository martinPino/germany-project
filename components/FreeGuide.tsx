import Image from "next/image";
import { site } from "@/content/site";
import { CheckIcon } from "./Icons";
import { GuideButton } from "./GuideDialog";

export default function FreeGuide() {
  const g = site.guide;
  return (
    <section id="guia" className="section">
      <div className="grid items-center gap-10 rounded-[2.5rem] bg-sage/15 p-6 sm:p-10 md:grid-cols-2">
        <Image src="/portada-guia.jpg" alt="Portada de La Guía Práctica para educadoras en Alemania" width={600} height={800} sizes="(min-width: 768px) 20rem, 70vw" className="mx-auto w-full max-w-xs rounded-2xl shadow-xl md:-rotate-2" />
        <div>
          <h2 className="h2">{g.title}</h2>
          <p className="mt-4 text-muted">{g.intro}</p>
          <ul className="mt-4 space-y-2">
            {g.items.map((i) => (
              <li key={i} className="flex gap-2"><CheckIcon className="mt-1 h-5 w-5 shrink-0 text-sagetext" />{i}</li>
            ))}
          </ul>
          <GuideButton className="btn btn-terra mt-7">{g.cta}</GuideButton>
        </div>
      </div>
    </section>
  );
}
