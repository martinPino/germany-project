import Link from "next/link";
import { site } from "@/content/site";
import { CheckIcon } from "./Icons";
import { GuideButton } from "./GuideDialog";

export default function Pricing() {
  return (
    <section id="servicios" className="section">
      <h2 className="h2 text-center">{site.services.title}</h2>
      <ul className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
        {site.services.items.map((s) => (
          <li key={s.id} className={`card relative flex flex-col ${s.featured ? "border-2 border-sagetext shadow-lg md:-translate-y-3" : ""}`}>
            {s.featured && (
              <span className="absolute -top-3 left-6 rounded-full bg-sagedeep px-3 py-1 text-xs font-bold text-white">Más elegida</span>
            )}
            <h3 className="font-display text-xl font-semibold">{s.name}</h3>
            <p className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-4xl font-semibold">{s.price}</span>
              {s.oldPrice && <span className="text-muted line-through"><span className="sr-only">Precio de referencia: </span>{s.oldPrice}</span>}
              {s.period && <span className="text-sm text-muted">{s.period}</span>}
            </p>
            <ul className="mt-5 flex-1 space-y-2 text-sm">
              {s.features.map((f) => (
                <li key={f} className="flex gap-2"><CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sagetext" />{f}</li>
              ))}
            </ul>
            {s.id === "guia" ? (
              <GuideButton className="btn btn-terra mt-6">{s.cta}</GuideButton>
            ) : (
              <Link href={`/?servicio=${s.id}#contacto`} className={`btn mt-6 ${s.featured ? "btn-terra" : "btn-outline"}`}>{s.cta}</Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
