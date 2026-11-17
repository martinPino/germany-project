"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { env, site } from "@/content/site";
import { ChatIcon, TikTokIcon } from "./Icons";

type Status = "idle" | "sending" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const params = useSearchParams();
  const c = site.contact;
  const [service, setService] = useState("guia");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const p = params.get("servicio");
    if (p && c.services.some((s) => s.value === p)) setService(p);
  }, [params, c.services]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("website")) return; // honeypot
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phase = String(fd.get("phase") ?? "");
    const message = String(fd.get("message") ?? "").trim();
    const errs: Errors = {};
    if (name.length < 2) errs.name = "Escribe tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Escribe un email válido.";
    if (service === "duda" && message.length < 10) errs.message = "Cuéntame tu duda (mínimo 10 caracteres).";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const label = c.services.find((s) => s.value === service)?.label ?? service;
    const payload = { name, email, interes: label, fase: phase, message };

    if (env.formEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(env.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStatus("success");
        form.reset();
        setService("guia");
      } catch {
        setStatus("error");
      }
    } else {
      const body = `Nombre: ${name}\nEmail: ${email}\nMe interesa: ${label}\nFase: ${phase}\n\n${message}`;
      window.location.href = `mailto:${env.email}?subject=${encodeURIComponent("Consulta web: " + label)}&body=${encodeURIComponent(body)}`;
    }
  }

  const err = (id: keyof Errors) => (errors[id] ? `${id}-err` : undefined);

  return (
    <section id="contacto" className="section grid gap-10 md:grid-cols-5">
      <div className="md:col-span-2">
        <h2 className="h2">{c.title}</h2>
        <p className="mt-4 text-muted">{c.intro}</p>
        {env.whatsapp && (
          <a href={env.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-6">
            <ChatIcon /> Escríbeme por WhatsApp
          </a>
        )}
        <div className="card mt-6 flex gap-3">
          <TikTokIcon className="mt-1 h-6 w-6 shrink-0" />
          <p className="text-sm">
            <a href={env.tiktok} target="_blank" rel="noopener noreferrer" className="font-semibold text-sagetext underline underline-offset-4">{c.tiktok}</a>
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} noValidate className="card space-y-5 md:col-span-3">
        <div className="hidden" aria-hidden="true">
          <label>No rellenar<input name="website" tabIndex={-1} autoComplete="off" /></label>
        </div>
        <div>
          <label htmlFor="name" className="mb-1 block font-semibold">Nombre</label>
          <input id="name" name="name" autoComplete="name" required className="input" aria-invalid={!!errors.name} aria-describedby={err("name")} />
          {errors.name && <p id="name-err" role="alert" className="mt-1 text-sm text-red-700 dark:text-red-300">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block font-semibold">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required className="input" aria-invalid={!!errors.email} aria-describedby={err("email")} />
          {errors.email && <p id="email-err" role="alert" className="mt-1 text-sm text-red-700 dark:text-red-300">{errors.email}</p>}
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="service" className="mb-1 block font-semibold">¿Qué te interesa?</label>
            <select id="service" name="service" value={service} onChange={(e) => setService(e.target.value)} className="input">
              {c.services.map((s) => (<option key={s.value} value={s.value}>{s.label}</option>))}
            </select>
          </div>
          <div>
            <label htmlFor="phase" className="mb-1 block font-semibold">¿En qué fase estás?</label>
            <select id="phase" name="phase" className="input">
              {c.phases.map((p) => (<option key={p}>{p}</option>))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block font-semibold">Mensaje</label>
          <textarea id="message" name="message" rows={5} className="input" aria-invalid={!!errors.message} aria-describedby={err("message")} />
          {errors.message && <p id="message-err" role="alert" className="mt-1 text-sm text-red-700 dark:text-red-300">{errors.message}</p>}
        </div>
        <button type="submit" disabled={status === "sending"} className="btn btn-terra w-full disabled:opacity-60">
          {status === "sending" ? "Enviando…" : "Enviar mensaje"}
        </button>
        <div aria-live="polite">
          {status === "success" && <p className="font-semibold text-sagetext">¡Mensaje enviado! Te responderé lo antes posible.</p>}
          {status === "error" && <p role="alert" className="font-semibold text-red-700 dark:text-red-300">No se ha podido enviar. Inténtalo de nuevo o escríbeme por WhatsApp o email.</p>}
        </div>
      </form>
    </section>
  );
}
