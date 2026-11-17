import Image from "next/image";
import { site } from "@/content/site";
import { FlagDE, FlagES } from "./Icons";
import { GuideButton } from "./GuideDialog";

export default function Hero() {
  const h = site.hero;
  return (
    <section id="inicio" className="section grid items-center gap-10 md:grid-cols-2">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full bg-sage/15 px-4 py-1.5 text-sm font-semibold text-sagetext">
          <FlagES /> {h.tags} <FlagDE />
        </p>
        <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">{h.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{h.subtitle}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <GuideButton className="btn btn-terra">{h.primary}</GuideButton>
          <a href="#quien-soy" className="btn btn-outline">{h.secondary}</a>
        </div>
      </div>
      <div className="mx-auto w-full max-w-md">
        <Image src="/lena.jpg" alt="Retrato de Lena Ayza Moreno" width={800} height={800} priority sizes="(min-width: 768px) 28rem, 90vw" className="aspect-square w-full rounded-[2.5rem] object-cover shadow-xl" />
      </div>
    </section>
  );
}
