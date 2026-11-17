"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { env, nav, site } from "@/content/site";
import { CloseIcon, MenuIcon, TikTokIcon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-cream focus:p-3">
        Saltar al contenido
      </a>
      <div className="bg-sagedeep text-white" style={{ paddingTop: "env(safe-area-inset-top)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-1.5 text-xs sm:px-8">
          <p>{site.topbar}</p>
          <a href={env.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok de Lena (se abre en una pestaña nueva)" className="shrink-0 hover:opacity-80">
            <TikTokIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-sage/25 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/lena.jpg" alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover" priority />
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold">{site.name}</span>
              <span className="block text-xs text-muted">{site.role}</span>
            </span>
          </Link>
          <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="text-sm font-medium hover:text-sagetext">{n.label}</Link>
            ))}
            <Link href="/#guia" className="btn btn-terra !px-5 !py-2 text-sm">{site.cta}</Link>
          </nav>
          <button
            ref={btn}
            type="button"
            className="rounded-full p-2 md:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <nav id="menu-movil" aria-label="Principal" className="border-t border-sage/25 bg-cream px-5 pb-5 md:hidden">
            <ul className="flex flex-col">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} onClick={() => setOpen(false)} className="block py-3 text-lg font-medium">{n.label}</Link>
                </li>
              ))}
            </ul>
            <Link href="/#guia" onClick={() => setOpen(false)} className="btn btn-terra mt-2 w-full">{site.cta}</Link>
          </nav>
        )}
      </header>
    </>
  );
}
