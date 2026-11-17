import Link from "next/link";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-sagedeep text-white" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm sm:flex-row sm:px-8">
        <p>{site.footer}</p>
        <nav aria-label="Legal" className="flex gap-5 underline underline-offset-4">
          <Link href="/aviso-legal">Aviso legal (Impressum)</Link>
          <Link href="/privacidad">Política de privacidad</Link>
        </nav>
      </div>
    </footer>
  );
}
