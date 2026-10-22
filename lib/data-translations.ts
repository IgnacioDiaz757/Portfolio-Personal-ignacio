import type { Project, ProjectCategory, ProjectMetric, Experience } from "./types";

type Lang = "es" | "en" | "pt";

// Capturas de los sitios públicos; los sistemas privados no tienen imagen
const PROJECT_IMAGES: Record<string, string> = {
  "https://revistamaticescba.com": "/projects/matices.jpg",
  "https://riverasdelsuquia.com.ar": "/projects/riveras-web.jpg",
  "https://viverosunidos.com": "/projects/viveros-web.jpg",
  "https://coopyme.org": "/projects/coopyme.jpg",
  "https://el-portal-del-pirata.vercel.app": "/projects/portal-pirata.jpg",
  "https://vive-creaciones.vercel.app": "/projects/vive-creaciones.jpg",
  "https://barber-tomi.vercel.app": "/projects/tomi-barber.jpg",
  "https://generador-qr-arbtech.vercel.app": "/projects/qr-arbtech.jpg",
  "https://almeria-espa-a-pag-web.vercel.app": "/projects/almeria.jpg",
  "https://despensaelgringo.vercel.app": "/projects/despensa-gringo.jpg",
  "https://arbtech-orpin.vercel.app": "/projects/arbtech.jpg",
  "https://fecotrac.com.ar": "/projects/fecotrac.jpg",
  "https://fecotrac.vercel.app": "/projects/fecotrac-espana.jpg",
  "https://sweet-coco.vercel.app": "/projects/sweet-coco.jpg",
  "https://perfusky.vercel.app": "/projects/perfusky.jpg",
};

// lo que no figura acá es un sitio web
const PROJECT_CATEGORIES: Record<string, ProjectCategory> = {
  "https://riverasdelsuquia.com.ar/sistema": "sistemas",
  "https://viverosunidos.com/admin": "sistemas",
  "#sistema-fichaje-privado": "sistemas",
  "https://generador-qr-arbtech.vercel.app": "sistemas",
  "https://vive-creaciones.vercel.app": "tiendas",
  "https://despensaelgringo.vercel.app": "tiendas",
  "https://perfusky.vercel.app": "tiendas",
  "https://sweet-coco.vercel.app": "tiendas",
};

const PROJECT_METRICS: Record<string, Record<Lang, ProjectMetric>> = {
  "https://riverasdelsuquia.com.ar/sistema": {
    es: { value: "-70%", label: "carga operativa mensual al automatizar reportes y aprobaciones" },
    en: { value: "-70%", label: "monthly operational load by automating reports and approvals" },
    pt: { value: "-70%", label: "carga operacional mensal ao automatizar relatórios e aprovações" },
  },
  "https://riverasdelsuquia.com.ar": {
    es: { value: "x5", label: "visitas orgánicas gracias a SEO y contenido administrable" },
    en: { value: "x5", label: "organic visits thanks to SEO and manageable content" },
    pt: { value: "x5", label: "visitas orgânicas graças a SEO e conteúdo gerenciável" },
  },
  "https://viverosunidos.com": {
    es: { value: "+45%", label: "ventas B2B con pedidos online, seguimiento y alertas" },
    en: { value: "+45%", label: "B2B sales with online orders, tracking and alerts" },
    pt: { value: "+45%", label: "vendas B2B com pedidos online, acompanhamento e alertas" },
  },
  "https://viverosunidos.com/admin": {
    es: { value: "-30%", label: "tiempo de coordinación logística, con trazabilidad de lotes" },
    en: { value: "-30%", label: "logistics coordination time, with full batch traceability" },
    pt: { value: "-30%", label: "tempo de coordenação logística, com rastreabilidade de lotes" },
  },
  "https://coopyme.org": {
    es: { value: "150+", label: "asociados autogestionados con dashboards y automatizaciones" },
    en: { value: "150+", label: "self-managed members with dashboards and automations" },
    pt: { value: "150+", label: "associados autogerenciados com dashboards e automações" },
  },
};

export function getProjects(language: "es" | "en" | "pt"): Project[] {
  const projectsEs: Omit<Project, "category">[] = [
    {
      title: "Riveras del Suquía · Sistema de Gestión",
      summary:
        "Sistema Web para la gestión de la cooperativa Riveras del Suquía.",
      impact: "",
      stack: ["Next.js", "Node.js", "PostgreSQL", "Supabase", "Tailwind"],
      links: {
        live: "https://riverasdelsuquia.com.ar/sistema",
        repo: "https://github.com/IgnacioDiaz757/RiverasDelSuquiaSistema",
      },
      hideLinks: true,
    },
    {
      title: "Revista Matices · Noticias y Comercios",
      summary:
        "Sitio de la Revista Matices del Cerro de las Rosas (Córdoba), con noticias locales, artículos destacados, guía de comercios del barrio y formulario de contacto.",
      impact: "",
      stack: ["Next.js", "React", "Tailwind", "Supabase"],
      links: {
        live: "https://revistamaticescba.com",
        repo: "https://revistamaticescba.com",
      },
    },
    {
      title: "Riveras del Suquía · Plataforma Web",
      summary:
        "Sitio institucional de la cooperativa Riveras del Suquía, con servicios, galería de trabajos, mapa de ubicación y formulario de contacto.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
      links: {
        live: "https://riverasdelsuquia.com.ar",
        repo: "https://github.com/IgnacioDiaz757/RiverasDelSuquiaPagina",
      },
    },
    {
      title: "Viveros Unidos · Plataforma Web",
      summary:
        "Sitio institucional de la cooperativa Viveros Unidos: quiénes somos, producción de sustratos, capacitaciones e invitación a sumarse a la red.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
      links: {
        live: "https://viverosunidos.com",
        repo: "https://github.com/IgnacioDiaz757/ViverosUnidos",
      },
    },
    {
      title: "Viveros Unidos · Sistema de Gestión",
      summary:
        "Control de stock, producción y distribución con tableros personalizados y notificaciones para viveros asociados.",
      impact: "",
      stack: ["Next.js", "Node.js", "Supabase","Tailwind"],
      links: {
        live: "https://viverosunidos.com/admin",
        repo: "https://github.com/IgnacioDiaz757/ViverosUnidosGestion",
      },
      hideLinks: true,
    },
    {
      title: "Coopyme · Plataforma Cooperativa",
      summary:
        "Sitio institucional de Coopyme, que fomenta redes de trabajo colaborativo entre pequeñas y medianas empresas y cooperativas, con objetivos y formulario de contacto.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      links: {
        live: "https://coopyme.org",
        repo: "https://github.com/IgnacioDiaz757/Coopyme",
      },
    },
    {
      title: "El Portal del Pirata",
      summary:
        "Plataforma web hecha con Next.js con informacion de Belgrano y acceso para ver el partido.",
      impact: "",
      stack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind",
        "TypeScript",
        "Next.js",
        "Supabase",
      ],
      links: {
        live: "https://el-portal-del-pirata.vercel.app",
        repo: "https://el-portal-del-pirata.vercel.app",
      },
    },
    {
      title: "Vive Creaciones",
      summary:
        "Plataforma web de catalogo y ventas conectada a una base de datos autogestionable.",
      impact: "",
      stack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind",
        "TypeScript",
        "Next.js",
        "Supabase",
      ],
      links: {
        live: "https://vive-creaciones.vercel.app",
        repo: "https://vive-creaciones.vercel.app",
      },
    },
    {
      title: "Tomi Barber",
      summary:
        "Plataforma web para barberia autogestionable y administrable conectada a una base de datos.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "jQuery", "Swiper", "Supabase"],
      links: {
        live: "https://barber-tomi.vercel.app",
        repo: "https://barber-tomi.vercel.app",
      },
    },
    {
      title: "Generador QR Arbtech",
      summary:
        "Generador QR gratuito para diferentes URLs o usos, con login de usuario y limite de usos.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Next.js", "React", "Tailwind", "Supabase"],
      links: {
        live: "https://generador-qr-arbtech.vercel.app",
        repo: "https://generador-qr-arbtech.vercel.app",
      },
    },
    {
      title: "Plataforma Web Trabajo Almeria Espana",
      summary:
        "Plataforma web para contacto y oportunidades de trabajo en Almeria, Espana.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Next.js", "React", "Tailwind"],
      links: {
        live: "https://almeria-espa-a-pag-web.vercel.app",
        repo: "https://almeria-espa-a-pag-web.vercel.app",
      },
    },
    {
      title: "Despensa El Gringo",
      summary:
        "Plataforma para despensa autoadministrable con carga de productos, precios y canal de contacto.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Next.js", "React", "Tailwind", "Supabase"],
      links: {
        live: "https://despensaelgringo.vercel.app",
        repo: "https://despensaelgringo.vercel.app",
      },
    },
    {
      title: "Arbtech Plataforma",
      summary: "Plataforma web integral de Arbtech para presentar servicios y contacto.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Next.js", "React", "Tailwind"],
      links: {
        live: "https://arbtech-orpin.vercel.app",
        repo: "https://arbtech-orpin.vercel.app",
      },
    },
    {
      title: "Fecotrac · Federación de Cooperativas",
      summary:
        "Sitio institucional de la Federación de Cooperativas de Trabajo de Construcción, con información de cooperativas, servicios, noticias y capacitación.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Supabase"],
      links: {
        live: "https://fecotrac.com.ar",
        repo: "https://fecotrac.com.ar",
      },
    },
    {
      title: "Fecotrac España · Recursos Humanos",
      summary:
        "Sitio de la consultora de Recursos Humanos Fecotrac España, que conecta talento con empresas de construcción, gastronomía, agricultura y hotelería, con espacio para postulaciones y contratación.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript"],
      links: {
        live: "https://fecotrac.vercel.app",
        repo: "https://fecotrac.vercel.app",
      },
    },
    {
      title: "Swet Coco · Pastelería Artesanal",
      summary:
        "Sitio de pastelería artesanal con menú, pedidos por WhatsApp, reseñas de clientes, ubicación y preguntas frecuentes.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "React", "Supabase"],
      links: {
        live: "https://sweet-coco.vercel.app",
        repo: "https://sweet-coco.vercel.app",
      },
    },
    {
      title: "Sistema de Marcado para Empleados",
      summary:
        "Sistema de marcado de asistencia para empleados con registro geolocalizable y reconocimiento facial. Acceso privado.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Supabase", "face-api.js"],
      links: {
        live: "#sistema-fichaje-privado",
        repo: "#sistema-fichaje-privado",
      },
      hideLinks: true,
    },
    {
      title: "Perfusky · Tienda de Perfumes",
      summary:
        "Tienda online de perfumes con catálogo filtrable por precio y ofertas, buscador, carrito, panel de administración y contacto por WhatsApp.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Supabase"],
      links: {
        live: "https://perfusky.vercel.app",
        repo: "https://perfusky.vercel.app",
      },
    },
  ];

  const projectsEn: Omit<Project, "category">[] = [
    {
      title: "Riveras del Suquía · Management System",
      summary:
        "Cooperative ERP that centralizes collections, logistics, inventory and real-time indicators for the Riveras del Suquía cooperative.",
      impact: "",
      stack: ["Next.js", "Node.js", "PostgreSQL", "Supabase", "Tailwind"],
      links: {
        live: "https://riverasdelsuquia.com.ar/sistema",
        repo: "https://github.com/IgnacioDiaz757/RiverasDelSuquiaSistema",
      },
      hideLinks: true,
    },
    {
      title: "Matices Magazine · News and Local Businesses",
      summary:
        "Website for Matices Magazine in Cerro de las Rosas (Córdoba), with local news, featured articles, a neighborhood business guide and a contact form.",
      impact: "",
      stack: ["Next.js", "React", "Tailwind", "Supabase"],
      links: {
        live: "https://revistamaticescba.com",
        repo: "https://revistamaticescba.com",
      },
    },
    {
      title: "Riveras del Suquía · Web Platform",
      summary:
        "Institutional website for the Riveras del Suquía cooperative, with services, a gallery of work, a location map and a contact form.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
      links: {
        live: "https://riverasdelsuquia.com.ar",
        repo: "https://github.com/IgnacioDiaz757/RiverasDelSuquiaPagina",
      },
    },
    {
      title: "Viveros Unidos · Web Platform",
      summary:
        "Institutional website for the Viveros Unidos cooperative: about us, substrate production, training and an invitation to join the network.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
      links: {
        live: "https://viverosunidos.com",
        repo: "https://github.com/IgnacioDiaz757/ViverosUnidos",
      },
    },
    {
      title: "Viveros Unidos · Management System",
      summary:
        "Stock, production and distribution control with customized dashboards and notifications for associated nurseries.",
      impact: "",
      stack: ["Next.js", "Node.js", "MongoDB", "Supabase", "tRPC"],
      links: {
        live: "https://viverosunidos.com/admin",
        repo: "https://github.com/IgnacioDiaz757/ViverosUnidosGestion",
      },
      hideLinks: true,
    },
    {
      title: "Coopyme · Cooperative Platform",
      summary:
        "Institutional website for Coopyme, which promotes collaborative work networks between small and medium businesses and cooperatives, with goals and a contact form.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      links: {
        live: "https://coopyme.org",
        repo: "https://github.com/IgnacioDiaz757/Coopyme",
      },
    },
    {
      title: "El Portal del Pirata",
      summary:
        "Next.js web platform with Belgrano information and access to watch matches.",
      impact: "",
      stack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind",
        "TypeScript",
        "Next.js",
        "Supabase",
      ],
      links: {
        live: "https://el-portal-del-pirata.vercel.app",
        repo: "https://el-portal-del-pirata.vercel.app",
      },
    },
    {
      title: "Vive Creaciones",
      summary:
        "Web catalog and sales platform connected to a self-manageable database.",
      impact: "",
      stack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind",
        "TypeScript",
        "Next.js",
        "Supabase",
      ],
      links: {
        live: "https://vive-creaciones.vercel.app",
        repo: "https://vive-creaciones.vercel.app",
      },
    },
    {
      title: "Tomi Barber",
      summary:
        "Self-manageable and administrable barbershop web platform connected to a database.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "jQuery", "Swiper", "Supabase"],
      links: {
        live: "https://barber-tomi.vercel.app",
        repo: "https://barber-tomi.vercel.app",
      },
    },
    {
      title: "Arbtech QR Generator",
      summary:
        "Free QR generator for different URLs and use cases, with user login and usage limits.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Next.js", "React", "Tailwind", "Supabase"],
      links: {
        live: "https://generador-qr-arbtech.vercel.app",
        repo: "https://generador-qr-arbtech.vercel.app",
      },
    },
    {
      title: "Almeria Spain Jobs Web Platform",
      summary:
        "Web platform for contact and job opportunities in Almeria, Spain.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Next.js", "React", "Tailwind"],
      links: {
        live: "https://almeria-espa-a-pag-web.vercel.app",
        repo: "https://almeria-espa-a-pag-web.vercel.app",
      },
    },
    {
      title: "Despensa El Gringo",
      summary:
        "Self-manageable grocery platform with product and price management plus a contact channel.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Next.js", "React", "Tailwind", "Supabase"],
      links: {
        live: "https://despensaelgringo.vercel.app",
        repo: "https://despensaelgringo.vercel.app",
      },
    },
    {
      title: "Arbtech Platform",
      summary:
        "Comprehensive Arbtech web platform to showcase services and provide contact options.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Next.js", "React", "Tailwind"],
      links: {
        live: "https://arbtech-orpin.vercel.app",
        repo: "https://arbtech-orpin.vercel.app",
      },
    },
    {
      title: "Fecotrac · Cooperative Federation",
      summary:
        "Institutional website for the Federation of Construction Worker Cooperatives, with cooperative listings, services, news and training.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Supabase"],
      links: {
        live: "https://fecotrac.com.ar",
        repo: "https://fecotrac.com.ar",
      },
    },
    {
      title: "Fecotrac Spain · Human Resources",
      summary:
        "Website for the HR consultancy Fecotrac Spain, connecting talent with companies in construction, food service, agriculture and hospitality, with application and hiring sections.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript"],
      links: {
        live: "https://fecotrac.vercel.app",
        repo: "https://fecotrac.vercel.app",
      },
    },
    {
      title: "Swet Coco · Artisan Bakery",
      summary:
        "Artisan bakery website with a menu, WhatsApp ordering, customer reviews, location and FAQs.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "React", "Supabase"],
      links: {
        live: "https://sweet-coco.vercel.app",
        repo: "https://sweet-coco.vercel.app",
      },
    },
    {
      title: "Employee Time-Clock System",
      summary:
        "Employee attendance system with geolocated check-ins and facial recognition. Private access.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Supabase", "face-api.js"],
      links: {
        live: "#sistema-fichaje-privado",
        repo: "#sistema-fichaje-privado",
      },
      hideLinks: true,
    },
    {
      title: "Perfusky · Perfume Store",
      summary:
        "Online perfume store with price and offer filters, search, cart, admin panel and WhatsApp contact.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Supabase"],
      links: {
        live: "https://perfusky.vercel.app",
        repo: "https://perfusky.vercel.app",
      },
    },
  ];

  const projectsPt: Omit<Project, "category">[] = [
    {
      title: "Riveras del Suquía · Sistema de Gestão",
      summary:
        "ERP cooperativo que centraliza cobranças, logística, estoque e indicadores em tempo real para a cooperativa Riveras del Suquía.",
      impact: "",
      stack: ["Next.js", "Node.js", "PostgreSQL", "Supabase", "Tailwind"],
      links: {
        live: "https://riverasdelsuquia.com.ar/sistema",
        repo: "https://github.com/IgnacioDiaz757/RiverasDelSuquiaSistema",
      },
      hideLinks: true,
    },
    {
      title: "Revista Matices · Notícias e Comércios",
      summary:
        "Site da Revista Matices do Cerro de las Rosas (Córdoba), com notícias locais, artigos em destaque, guia de comércios do bairro e formulário de contato.",
      impact: "",
      stack: ["Next.js", "React", "Tailwind", "Supabase"],
      links: {
        live: "https://revistamaticescba.com",
        repo: "https://revistamaticescba.com",
      },
    },
    {
      title: "Riveras del Suquía · Plataforma Web",
      summary:
        "Site institucional da cooperativa Riveras del Suquía, com serviços, galeria de trabalhos, mapa de localização e formulário de contato.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
      links: {
        live: "https://riverasdelsuquia.com.ar",
        repo: "https://github.com/IgnacioDiaz757/RiverasDelSuquiaPagina",
      },
    },
    {
      title: "Viveros Unidos · Plataforma Web",
      summary:
        "Site institucional da cooperativa Viveros Unidos: quem somos, produção de substratos, capacitações e convite para entrar na rede.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
      links: {
        live: "https://viverosunidos.com",
        repo: "https://github.com/IgnacioDiaz757/ViverosUnidos",
      },
    },
    {
      title: "Viveros Unidos · Sistema de Gestão",
      summary:
        "Controle de estoque, produção e distribuição com painéis personalizados e notificações para viveiros associados.",
      impact: "",
      stack: ["Next.js", "Node.js", "MongoDB", "Supabase", "tRPC"],
      links: {
        live: "https://viverosunidos.com/admin",
        repo: "https://github.com/IgnacioDiaz757/ViverosUnidosGestion",
      },
      hideLinks: true,
    },
    {
      title: "Coopyme · Plataforma Cooperativa",
      summary:
        "Site institucional da Coopyme, que fomenta redes de trabalho colaborativo entre pequenas e médias empresas e cooperativas, com objetivos e formulário de contato.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      links: {
        live: "https://coopyme.org",
        repo: "https://github.com/IgnacioDiaz757/Coopyme",
      },
    },
    {
      title: "El Portal del Pirata",
      summary:
        "Plataforma web em Next.js com informacoes do Belgrano e acesso para assistir ao jogo.",
      impact: "",
      stack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind",
        "TypeScript",
        "Next.js",
        "Supabase",
      ],
      links: {
        live: "https://el-portal-del-pirata.vercel.app",
        repo: "https://el-portal-del-pirata.vercel.app",
      },
    },
    {
      title: "Vive Creaciones",
      summary:
        "Plataforma web de catalogo e vendas conectada a um banco de dados autogerenciavel.",
      impact: "",
      stack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind",
        "TypeScript",
        "Next.js",
        "Supabase",
      ],
      links: {
        live: "https://vive-creaciones.vercel.app",
        repo: "https://vive-creaciones.vercel.app",
      },
    },
    {
      title: "Tomi Barber",
      summary:
        "Plataforma web de barbearia autogerenciavel e administravel conectada a um banco de dados.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "jQuery", "Swiper", "Supabase"],
      links: {
        live: "https://barber-tomi.vercel.app",
        repo: "https://barber-tomi.vercel.app",
      },
    },
    {
      title: "Gerador QR Arbtech",
      summary:
        "Gerador QR gratuito para diferentes URLs e usos, com login de usuario e limite de usos.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Next.js", "React", "Tailwind", "Supabase"],
      links: {
        live: "https://generador-qr-arbtech.vercel.app",
        repo: "https://generador-qr-arbtech.vercel.app",
      },
    },
    {
      title: "Plataforma Web Trabalho Almeria Espanha",
      summary:
        "Plataforma web para contato e oportunidades de trabalho em Almeria, Espanha.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Next.js", "React", "Tailwind"],
      links: {
        live: "https://almeria-espa-a-pag-web.vercel.app",
        repo: "https://almeria-espa-a-pag-web.vercel.app",
      },
    },
    {
      title: "Despensa El Gringo",
      summary:
        "Plataforma de mercearia autogerenciavel com cadastro de produtos, precos e canal de contato.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Next.js", "React", "Tailwind", "Supabase"],
      links: {
        live: "https://despensaelgringo.vercel.app",
        repo: "https://despensaelgringo.vercel.app",
      },
    },
    {
      title: "Plataforma Arbtech",
      summary:
        "Plataforma web completa da Arbtech para apresentar servicos e facilitar o contato.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Next.js", "React", "Tailwind"],
      links: {
        live: "https://arbtech-orpin.vercel.app",
        repo: "https://arbtech-orpin.vercel.app",
      },
    },
    {
      title: "Fecotrac · Federação de Cooperativas",
      summary:
        "Site institucional da Federação de Cooperativas de Trabalho da Construção, com informações das cooperativas, serviços, notícias e capacitação.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Supabase"],
      links: {
        live: "https://fecotrac.com.ar",
        repo: "https://fecotrac.com.ar",
      },
    },
    {
      title: "Fecotrac Espanha · Recursos Humanos",
      summary:
        "Site da consultoria de Recursos Humanos Fecotrac Espanha, que conecta talentos a empresas de construção, gastronomia, agricultura e hotelaria, com espaço para candidaturas e contratação.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript"],
      links: {
        live: "https://fecotrac.vercel.app",
        repo: "https://fecotrac.vercel.app",
      },
    },
    {
      title: "Swet Coco · Confeitaria Artesanal",
      summary:
        "Site de confeitaria artesanal com cardápio, pedidos por WhatsApp, avaliações de clientes, localização e perguntas frequentes.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "React", "Supabase"],
      links: {
        live: "https://sweet-coco.vercel.app",
        repo: "https://sweet-coco.vercel.app",
      },
    },
    {
      title: "Sistema de Ponto para Funcionários",
      summary:
        "Sistema de registro de ponto para funcionários com marcação geolocalizada e reconhecimento facial. Acesso privado.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Supabase", "face-api.js"],
      links: {
        live: "#sistema-fichaje-privado",
        repo: "#sistema-fichaje-privado",
      },
      hideLinks: true,
    },
    {
      title: "Perfusky · Loja de Perfumes",
      summary:
        "Loja online de perfumes com filtros por preço e ofertas, busca, carrinho, painel de administração e contato por WhatsApp.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Supabase"],
      links: {
        live: "https://perfusky.vercel.app",
        repo: "https://perfusky.vercel.app",
      },
    },
  ];

  const list =
    language === "en" ? projectsEn : language === "pt" ? projectsPt : projectsEs;
  return list.map((project) => ({
    ...project,
    image: PROJECT_IMAGES[project.links.live],
    category: PROJECT_CATEGORIES[project.links.live] ?? "web",
    metric: PROJECT_METRICS[project.links.live]?.[language],
  }));
}

export function getExperience(language: "es" | "en" | "pt"): Experience[] {
  const experienceEs: Experience[] = [
    {
      role: "Desarrollador Full Stack",
      company: "Freelance / Independiente",
      period: "2020 — Actualidad",
      description:
        "Mi enfoque siempre estuvo puesto en crear soluciones eficientes, intuitivas y adaptadas a las necesidades reales de los usuarios. Cada proyecto fue un paso más en mi crecimiento profesional, combinando diseño, lógica, arquitectura y experiencia de usuario.",
      stages: [
        {
          label: "2020",
          title: "Primeros pasos",
          description:
            "Empecé a explorar la programación desde cero. Con HTML y CSS creé pequeñas interfaces y juegos simples que me permitieron comprender las bases del diseño web y la estructura de una página.",
          techs: ["HTML", "CSS"],
        },
        {
          label: "Platzi",
          title: "Cursos de desarrollo web y bases de datos",
          description:
            "Cursos que me ayudaron a consolidar fundamentos técnicos.",
        },
        {
          label: "Universidad Cervantes",
          title: "Tecnicatura en Desarrollo Web y Aplicaciones Digitales",
          description:
            "Profundicé mi formación académica en desarrollo web y aplicaciones digitales.",
        },
        {
          label: "Autodidacta",
          title: "Productos más complejos y escalables",
          description:
            "Seguí creciendo por mi cuenta incorporando JavaScript, React y Next.js para construir productos más complejos y escalables.",
          techs: ["JavaScript", "React", "Next.js"],
        },
        {
          label: "Hoy",
          title: "Mejora continua",
          description:
            "Sigo capacitándome y construyendo herramientas cada vez más completas, al día con las tecnologías más usadas del ecosistema JavaScript.",
        },
      ],
      achievements: [
        "Plataformas web completas",
        "Sistemas de gestión",
        "Generadores de QR",
        "Automatizaciones de procesos",
        "Integraciones con APIs",
        "Aplicaciones front-end modernas y optimizadas",
      ],
    },
  ];

  const experienceEn: Experience[] = [
    {
      role: "Full Stack Developer",
      company: "Freelance / Independent",
      period: "2020 — Present",
      description:
        "My approach has always been focused on creating efficient, intuitive solutions adapted to the real needs of users. Each project was another step in my professional growth, combining design, logic, architecture, and user experience.",
      stages: [
        {
          label: "2020",
          title: "First steps",
          description:
            "I started exploring programming from scratch. With HTML and CSS I built small interfaces and simple games that taught me the basics of web design and page structure.",
          techs: ["HTML", "CSS"],
        },
        {
          label: "Platzi",
          title: "Web development and database courses",
          description:
            "Courses that helped me consolidate my technical foundations.",
        },
        {
          label: "Universidad Cervantes",
          title: "Associate degree in Web Development and Digital Applications",
          description:
            "I deepened my academic training in web development and digital applications.",
        },
        {
          label: "Self-taught",
          title: "More complex, scalable products",
          description:
            "I kept growing on my own, adding JavaScript, React and Next.js to build more complex and scalable products.",
          techs: ["JavaScript", "React", "Next.js"],
        },
        {
          label: "Today",
          title: "Continuous improvement",
          description:
            "I keep training and building increasingly complete tools, up to date with the most widely used technologies in the JavaScript ecosystem.",
        },
      ],
      achievements: [
        "Complete web platforms",
        "Management systems",
        "QR generators",
        "Process automation",
        "API integrations",
        "Modern and optimized front-end applications",
      ],
    },
  ];

  const experiencePt: Experience[] = [
    {
      role: "Desenvolvedor Full Stack",
      company: "Freelance / Independente",
      period: "2020 — Atual",
      description:
        "Minha abordagem sempre esteve focada em criar soluções eficientes, intuitivas e adaptadas às necessidades reais dos usuários. Cada projeto foi mais um passo no meu crescimento profissional, combinando design, lógica, arquitetura e experiência do usuário.",
      stages: [
        {
          label: "2020",
          title: "Primeiros passos",
          description:
            "Comecei a explorar programação do zero. Com HTML e CSS criei pequenas interfaces e jogos simples que me permitiram entender as bases do design web e a estrutura de uma página.",
          techs: ["HTML", "CSS"],
        },
        {
          label: "Platzi",
          title: "Cursos de desenvolvimento web e bancos de dados",
          description:
            "Cursos que me ajudaram a consolidar fundamentos técnicos.",
        },
        {
          label: "Universidad Cervantes",
          title: "Tecnicatura em Desenvolvimento Web e Aplicações Digitais",
          description:
            "Aprofundei minha formação acadêmica em desenvolvimento web e aplicações digitais.",
        },
        {
          label: "Autodidata",
          title: "Produtos mais complexos e escaláveis",
          description:
            "Continuei crescendo por conta própria, incorporando JavaScript, React e Next.js para construir produtos mais complexos e escaláveis.",
          techs: ["JavaScript", "React", "Next.js"],
        },
        {
          label: "Hoje",
          title: "Melhoria contínua",
          description:
            "Continuo me capacitando e construindo ferramentas cada vez mais completas, atualizado com as tecnologias mais usadas do ecossistema JavaScript.",
        },
      ],
      achievements: [
        "Plataformas web completas",
        "Sistemas de gestão",
        "Geradores de QR",
        "Automações de processos",
        "Integrações com APIs",
        "Aplicações front-end modernas e otimizadas",
      ],
    },
  ];

  if (language === "en") return experienceEn;
  if (language === "pt") return experiencePt;
  return experienceEs;
}

