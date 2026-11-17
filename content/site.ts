export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL ?? "https://www.tiktok.com/@lena.en.alemania",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "",
  paypal: process.env.NEXT_PUBLIC_PAYPAL_URL ?? "",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
};

export const GUIDE_PDF = "/guia-practica-erzieherin.pdf";

export const nav = [
  { label: "Inicio", href: "/#inicio" },
  { label: "De qué va", href: "/#de-que-va" },
  { label: "Quién soy", href: "/#quien-soy" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Contacto", href: "/#contacto" },
];

export const site = {
  name: "Lena Ayza Moreno",
  role: "Erzieherin en Alemania",
  topbar: "Acompañamiento para educadoras y educadores que emigran a Alemania",
  cta: "Quiero empezar",
  hero: {
    title: "Tu puente tranquilo para trabajar como educadora infantil (Erzieherin) en Alemania.",
    subtitle:
      "Soy Lena, maestra de Valencia y llevo 5 años viviendo y trabajando en Kitas alemanas. Te cuento la verdad sin filtros, desde la burocracia hasta el choque del idioma, para que des el paso con seguridad, claridad y sin sentirte sola.",
    tags: "Valencia ··· Alemania",
    primary: "Descargar la guía gratis",
    secondary: "Conoce mi historia",
  },
  about: {
    title: "Emigrar como educadora da vértigo. Hacerlo a ciegas, mucho más.",
    text: "Hay mucha información suelta, muchas promesas y poca honestidad sobre cómo es de verdad empezar en una Kita alemana. Aquí encontrarás recursos claros y acompañamiento real, de alguien que ya hizo el camino.",
    pillars: [
      { icon: "info", title: "Información real", text: "Trámites, sueldos y plazos tal y como los viví, sin adornos ni letra pequeña." },
      { icon: "calm", title: "Tranquilidad", text: "Un paso cada vez y con hoja de ruta, para que el vértigo no decida por ti." },
      { icon: "heart", title: "Cercanía", text: "De tú a tú, de maestra a maestra. Sin sentirte sola en el proceso." },
    ],
  },
  who: {
    title: "Quién soy",
    paragraphs: [
      "Me llamo Lena, soy de Valencia y llegué a Alemania con un proyecto de contratación para trabajar como educadora infantil. Llegué con ilusión, con un alemán que todavía se me atascaba y con muchas preguntas sin respuesta.",
      "Pasé por el proceso de homologación (Anerkennung) de mi título, que fue lento y exigió paciencia, y viví unas primeras semanas en la Kita intensas: nuevo idioma, nuevas rutinas y una forma distinta de entender la pedagogía.",
      "Hoy tengo una vida estable aquí y sigo trabajando con niñas y niños cada día. Comparto lo que aprendí para que tú lo tengas más fácil que yo.",
    ],
    badges: ["+5 años en Alemania", "Llegada con proyecto", "Título homologado"],
  },
  guide: {
    title: "La Guía Práctica · Gratis por tiempo limitado",
    intro: "Todo lo que me habría gustado saber antes de hacer la maleta:",
    items: [
      "Burocracia, homologación y vivienda",
      "Salario neto real",
      "Choque cultural y pedagógico",
      "Vocabulario clave del día a día",
      "Checklists de maleta y trámites",
    ],
    cta: "Quiero mi guía",
  },
  services: {
    title: "Servicios",
    items: [
      {
        id: "guia",
        name: "La Guía Práctica",
        price: "Gratis",
        oldPrice: "9,99 €",
        period: "",
        features: ["Burocracia, homologación y vivienda", "Salario neto real", "Vocabulario y checklists"],
        cta: "Quiero mi guía",
        featured: false,
      },
      {
        id: "charla",
        name: "Charla de Asesoramiento 1 a 1",
        price: "49 €",
        oldPrice: "",
        period: "por 60 min",
        features: ["Videollamada", "Análisis de perfil y nivel de alemán", "Revisión de contratos de proyecto o entrevistas", "Hoja de ruta personalizada"],
        cta: "Reservar charla",
        featured: true,
      },
      {
        id: "primer-mes",
        name: "Acompañamiento Primer Mes",
        price: "179 €",
        oldPrice: "",
        period: "por 30 días",
        features: ["Incluye la guía", "2 videollamadas", "Soporte por WhatsApp de lunes a viernes", "Ayuda con cartas en alemán y trámites iniciales"],
        cta: "Quiero acompañamiento",
        featured: false,
      },
    ],
  },
  faq: [
    {
      q: "¿Necesito B2?",
      a: "Depende del Land, del empleador y de tu situación. Para la homologación y para trabajar con autonomía suele pedirse un nivel B2, aunque algunos proyectos admiten niveles inferiores con compromiso de seguir estudiando. En la charla 1 a 1 revisamos tu caso concreto.",
    },
    {
      q: "¿Trabajas para algún proyecto o agencia?",
      a: "No. Trabajo por mi cuenta y no cobro comisión de ninguna agencia ni empleador. Por eso puedo contarte lo bueno y lo menos bueno de cada opción.",
    },
    {
      q: "¿Cómo funciona el WhatsApp del Primer Mes?",
      a: "Durante 30 días puedes escribirme de lunes a viernes con tus dudas de trámites, cartas o del día a día. Te respondo en horario laborable; no es un servicio de urgencias.",
    },
    {
      q: "¿Por qué la guía es gratis?",
      a: "Porque quiero que nadie emigre a ciegas. Si te resulta útil y quieres colaborar, puedes hacer una donación voluntaria por PayPal; si no, la guía es tuya igualmente.",
    },
  ],
  contact: {
    title: "Hablemos",
    intro: "Cuéntame en qué punto estás y te responderé personalmente.",
    services: [
      { value: "guia", label: "Guía" },
      { value: "charla", label: "Charla 1 a 1" },
      { value: "primer-mes", label: "Primer Mes" },
      { value: "duda", label: "Solo una duda" },
    ],
    phases: ["Solo informándome", "Estudiando alemán", "Buscando proyecto o entrevista", "Ya tengo fecha de viaje"],
    tiktok: "Sígueme en TikTok para ver mis vídeos diarios sobre la vida real como Erzieherin en Alemania",
  },
  dialog: {
    title: "Esta guía es mi regalo para ti 🌿",
    text: "Me habría encantado tener algo así antes de salir de casa. Puedes descargarla gratis ahora mismo. Si te resulta útil y quieres ayudarme a seguir creando contenido y recursos para otras educadoras, también puedes colaborar con una donación voluntaria por PayPal.",
    donate: "Colaborar con una donación",
    free: "Seguir y descargar gratis",
    thanks: "¡Muchas gracias por tu apoyo!",
    done: "¡Listo! Si la descarga no empieza, pulsa aquí",
    email: "¿Prefieres recibir la guía por email? Escríbeme",
  },
  footer: "De Valencia a Alemania con cariño · Lena Ayza Moreno © 2026",
};

/** Rellena estos datos antes de publicar. */
export const legal = {
  name: "[Nombre y apellidos completos]",
  street: "[Calle y número]",
  city: "[Código postal y ciudad], Alemania",
  email: "[email de contacto]",
  phone: "[teléfono]",
  vatId: "[USt-IdNr. o Steuernummer, si aplica / o indicar Kleinunternehmer según § 19 UStG]",
  authority: "[Autoridad de protección de datos competente de tu Land]",
  formProvider: "[Formspree / Web3Forms / otro, con su sede y enlace a su política]",
};
