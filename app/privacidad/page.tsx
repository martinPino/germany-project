import type { Metadata } from "next";
import { H2, LegalPage } from "@/components/Legal";
import { legal as l } from "@/content/site";

export const metadata: Metadata = { title: "Política de privacidad", alternates: { canonical: "/privacidad" } };

export default function Privacidad() {
  return (
    <LegalPage title="Política de privacidad">
      <H2>1. Responsable</H2>
      <p>{l.name}, {l.street}, {l.city}. Email: {l.email}.</p>
      <H2>2. Sin cookies ni analítica</H2>
      <p>Esta web no utiliza cookies ni herramientas de analítica o seguimiento de terceros, por lo que no muestra banner de cookies. La descarga de la guía no requiere registro ni datos personales.</p>
      <H2>3. Alojamiento</H2>
      <p>La web se aloja en Vercel Inc. Al visitarla, el servidor puede tratar temporalmente datos técnicos (dirección IP, fecha y hora, navegador) en archivos de registro para garantizar su seguridad y funcionamiento (art. 6.1.f RGPD).</p>
      <H2>4. Formulario de contacto</H2>
      <p>Si lo usas, tratamos nombre, email, interés, fase y mensaje para responderte (art. 6.1.b/f RGPD). Los datos se envían a través de: {l.formProvider}, que actúa como encargado del tratamiento. Si no hay proveedor configurado, el formulario abre tu programa de correo. Conservamos los datos mientras dure la conversación y los plazos legales aplicables.</p>
      <H2>5. Servicios externos a los que se enlaza</H2>
      <p><strong>PayPal:</strong> las donaciones son voluntarias, se realizan fuera de esta web en PayPal y se rigen por su política de privacidad. No recibimos ni almacenamos datos de pago en la web, ni dan acceso a contenido adicional.</p>
      <p><strong>TikTok y WhatsApp:</strong> son enlaces externos; al pulsarlos abandonas esta web y se aplican las políticas de cada servicio.</p>
      <H2>6. Tus derechos</H2>
      <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad escribiendo a {l.email}. También puedes reclamar ante la autoridad de control: {l.authority}.</p>
    </LegalPage>
  );
}
