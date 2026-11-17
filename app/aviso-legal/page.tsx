import type { Metadata } from "next";
import { H2, LegalPage } from "@/components/Legal";
import { legal as l } from "@/content/site";

export const metadata: Metadata = { title: "Aviso legal (Impressum)", alternates: { canonical: "/aviso-legal" } };

export default function AvisoLegal() {
  return (
    <LegalPage title="Aviso legal (Impressum)">
      <H2>Angaben gemäß § 5 DDG · Datos del responsable</H2>
      <p>{l.name}<br />{l.street}<br />{l.city}</p>
      <H2>Kontakt · Contacto</H2>
      <p>Email: {l.email}<br />Teléfono: {l.phone}</p>
      <H2>Umsatzsteuer · Información fiscal</H2>
      <p>{l.vatId}</p>
      <H2>Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)</H2>
      <p>{l.name}, dirección indicada arriba.</p>
      <H2>Donaciones voluntarias</H2>
      <p>La guía es gratuita. Las donaciones son voluntarias, se gestionan fuera de esta web, en PayPal, y no dan acceso a contenido adicional ni son requisito para la descarga.</p>
      <H2>Haftung für Inhalte y Links · Responsabilidad</H2>
      <p>Los contenidos se elaboran con el mayor cuidado, pero no se garantiza su exactitud ni actualidad; los requisitos de homologación y trámites pueden cambiar. No constituyen asesoramiento jurídico. No nos responsabilizamos del contenido de enlaces externos (TikTok, PayPal, WhatsApp).</p>
      <H2>Propiedad intelectual</H2>
      <p>Los textos, imágenes y la guía son propiedad de {l.name}, salvo indicación contraria. Queda prohibida su reproducción comercial sin autorización.</p>
    </LegalPage>
  );
}
