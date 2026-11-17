"use client";

import Link from "next/link";
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { env, GUIDE_PDF, site } from "@/content/site";
import { CloseIcon, DownloadIcon, PayPalIcon } from "./Icons";

const GuideContext = createContext<() => void>(() => {});
export const useGuide = () => useContext(GuideContext);

export function GuideProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLElement | null>(null);
  const openDialog = useCallback(() => {
    trigger.current = document.activeElement as HTMLElement | null;
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    setOpen(false);
    trigger.current?.focus();
  }, []);
  return (
    <GuideContext.Provider value={openDialog}>
      {children}
      {open && <GuideDialog onClose={close} />}
    </GuideContext.Provider>
  );
}

export function GuideButton({ children, className }: { children: ReactNode; className: string }) {
  const open = useGuide();
  return (
    <button type="button" onClick={open} className={className} aria-haspopup="dialog">
      {children}
    </button>
  );
}

function GuideDialog({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [donated, setDonated] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const d = site.dialog;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    el.focus();
    const sel = "a[href],button:not([disabled])";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const f = Array.from(el.querySelectorAll<HTMLElement>(sel));
      const first = f[0];
      const last = f[f.length - 1];
      if (!first || !last) return;
      const a = document.activeElement;
      if (e.shiftKey && (a === first || a === el)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && a === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex animate-fade items-end justify-center bg-black/50 p-4 sm:items-center"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="guide-title"
        aria-describedby="guide-desc"
        tabIndex={-1}
        className="relative max-h-full w-full max-w-lg animate-pop overflow-y-auto rounded-3xl bg-cream p-6 shadow-2xl outline-none sm:p-8"
      >
        <button type="button" onClick={onClose} aria-label="Cerrar ventana" className="absolute right-4 top-4 rounded-full p-2 hover:bg-sage/20">
          <CloseIcon />
        </button>
        <h2 id="guide-title" className="pr-8 font-display text-2xl font-semibold sm:text-3xl">{d.title}</h2>
        <p id="guide-desc" className="mt-4 leading-relaxed text-muted">{d.text}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {env.paypal && (
            <a href={env.paypal} target="_blank" rel="noopener noreferrer" onClick={() => setDonated(true)} className="btn btn-terra">
              <PayPalIcon /> {d.donate}
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          )}
          <a
            href={GUIDE_PDF}
            download
            onClick={() => setDownloaded(true)}
            className={`btn btn-outline ${env.paypal ? "" : "sm:col-span-2"}`}
          >
            <DownloadIcon /> {d.free}
          </a>
        </div>

        <div aria-live="polite" className="mt-4 space-y-2 text-sm">
          {donated && <p className="font-semibold text-sagetext">{d.thanks}</p>}
          {(downloaded || donated) && (
            <p>
              <a href={GUIDE_PDF} download className="font-semibold text-sagetext underline underline-offset-4">
                {downloaded ? d.done : "Descargar la guía"}
              </a>
            </p>
          )}
        </div>

        <p className="mt-5 text-center text-sm">
          <Link href="/?servicio=guia#contacto" onClick={onClose} className="text-muted underline underline-offset-4">
            {d.email}
          </Link>
        </p>
      </div>
    </div>
  );
}
