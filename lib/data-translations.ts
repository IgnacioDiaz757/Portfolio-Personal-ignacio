import type { Project, Experience } from "./types";

export function getProjects(language: "es" | "en" | "pt"): Project[] {
  const projectsEs: Project[] = [
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
      title: "Plataforma Gastronómica · Revista Matices",
      summary:
        "Marketplace gastronómico con catálogo editable, formularios inteligentes y contenidos premium para la Revista Matices.",
      impact: "",
      stack: ["Next.js", "Supabase", "Stripe", "Tailwind", "IA Integrations"],
      links: {
        live: "https://revistamaticescba.com",
        repo: "https://github.com/IgnacioDiaz757/PlataformaMatices",
      },
    },
    {
      title: "Riveras del Suquía · Plataforma Web",
      summary:
        "Sitio público con mapas interactivos, agenda de eventos y CMS headless para comunicar actividades de la cooperativa.",
      impact: "",
      stack: ["Next.js","Typescript", "Tailwind"],
      links: {
        live: "https://riverasdelsuquia.com.ar",
        repo: "https://github.com/IgnacioDiaz757/RiverasDelSuquiaPagina",
      },
    },
    {
      title: "Viveros Unidos · Plataforma Web",
      summary:
        "Catálogo digital con filtros de especies, fichas técnicas descargables y pedidos mayoristas para la red Viveros Unidos.",
      impact: "",
      stack: ["React", "Next.js", "Supabase", "Tailwind"],
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
        "Portal integral para cooperativas pymes con módulos de membresías, capacitación y conexión con proveedores.",
      impact: "",
      stack: ["Next.js", "", "Node.js", "Tailwind", "Automations"],
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
        live: "https://barber-tomi.vercel.app",
        repo: "https://barber-tomi.vercel.app",
      },
    },
    {
      title: "Generador QR Arbtech",
      summary:
        "Generador QR gratuito para diferentes URLs o usos, con login de usuario y limite de usos.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Next.js", "Supabase"],
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
      stack: ["HTML", "CSS", "JavaScript", "Next.js"],
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
      stack: ["HTML", "CSS", "JavaScript", "Next.js"],
      links: {
        live: "https://despensaelgringo.vercel.app",
        repo: "https://despensaelgringo.vercel.app",
      },
    },
    {
      title: "Arbtech Plataforma",
      summary: "Plataforma web integral de Arbtech para presentar servicios y contacto.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Next.js"],
      links: {
        live: "https://arbtech-orpin.vercel.app",
        repo: "https://arbtech-orpin.vercel.app",
      },
    },
  ];

  const projectsEn: Project[] = [
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
      title: "Gastronomic Platform · Matices Magazine",
      summary:
        "Gastronomic marketplace with editable catalog, smart forms and premium content for Matices Magazine.",
      impact: "",
      stack: ["Next.js", "Supabase", "Stripe", "Tailwind", "AI Integrations"],
      links: {
        live: "https://revistamaticescba.com",
        repo: "https://github.com/IgnacioDiaz757/PlataformaMatices",
      },
    },
    {
      title: "Riveras del Suquía · Web Platform",
      summary:
        "Public site with interactive maps, event calendar and headless CMS to communicate cooperative activities.",
      impact: "",
      stack: ["Next.js", "Mapbox", "Contentful", "Tailwind"],
      links: {
        live: "https://riverasdelsuquia.com.ar",
        repo: "https://github.com/IgnacioDiaz757/RiverasDelSuquiaPagina",
      },
    },
    {
      title: "Viveros Unidos · Web Platform",
      summary:
        "Digital catalog with species filters, downloadable technical sheets and wholesale orders for the Viveros Unidos network.",
      impact: "",
      stack: ["React", "Next.js", "Supabase", "Tailwind"],
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
        "Comprehensive portal for SME cooperatives with membership modules, training and supplier connections.",
      impact: "",
      stack: ["Next.js", "Supabase", "Node.js", "Tailwind", "Automations"],
      links: {
        live: "https://coopyme.lat",
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
        live: "https://barber-tomi.vercel.app",
        repo: "https://barber-tomi.vercel.app",
      },
    },
    {
      title: "Arbtech QR Generator",
      summary:
        "Free QR generator for different URLs and use cases, with user login and usage limits.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Next.js", "Supabase"],
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
      stack: ["HTML", "CSS", "JavaScript", "Next.js"],
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
      stack: ["HTML", "CSS", "JavaScript", "Next.js"],
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
      stack: ["HTML", "CSS", "JavaScript", "Next.js"],
      links: {
        live: "https://arbtech-orpin.vercel.app",
        repo: "https://arbtech-orpin.vercel.app",
      },
    },
  ];

  const projectsPt: Project[] = [
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
      title: "Plataforma Gastronômica · Revista Matices",
      summary:
        "Marketplace gastronômico com catálogo editável, formulários inteligentes e conteúdo premium para a Revista Matices.",
      impact: "",
      stack: ["Next.js", "Supabase", "Stripe", "Tailwind", "Integrações IA"],
      links: {
        live: "https://revistamaticescba.com",
        repo: "https://github.com/IgnacioDiaz757/PlataformaMatices",
      },
    },
    {
      title: "Riveras del Suquía · Plataforma Web",
      summary:
        "Site público com mapas interativos, agenda de eventos e CMS headless para comunicar atividades da cooperativa.",
      impact: "",
      stack: ["Next.js", "Mapbox", "Contentful", "Tailwind"],
      links: {
        live: "https://riverasdelsuquia.com.ar",
        repo: "https://github.com/IgnacioDiaz757/RiverasDelSuquiaPagina",
      },
    },
    {
      title: "Viveros Unidos · Plataforma Web",
      summary:
        "Catálogo digital com filtros de espécies, fichas técnicas para download e pedidos atacadistas para a rede Viveros Unidos.",
      impact: "",
      stack: ["React", "Next.js", "Supabase", "Tailwind"],
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
        "Portal abrangente para cooperativas de PMEs com módulos de associações, treinamento e conexões com fornecedores.",
      impact: "",
      stack: ["Next.js", "Supabase", "Node.js", "Tailwind", "Automações"],
      links: {
        live: "https://coopyme.lat",
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
        live: "https://barber-tomi.vercel.app",
        repo: "https://barber-tomi.vercel.app",
      },
    },
    {
      title: "Gerador QR Arbtech",
      summary:
        "Gerador QR gratuito para diferentes URLs e usos, com login de usuario e limite de usos.",
      impact: "",
      stack: ["HTML", "CSS", "JavaScript", "Next.js", "Supabase"],
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
      stack: ["HTML", "CSS", "JavaScript", "Next.js"],
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
      stack: ["HTML", "CSS", "JavaScript", "Next.js"],
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
      stack: ["HTML", "CSS", "JavaScript", "Next.js"],
      links: {
        live: "https://arbtech-orpin.vercel.app",
        repo: "https://arbtech-orpin.vercel.app",
      },
    },
  ];

  if (language === "en") return projectsEn;
  if (language === "pt") return projectsPt;
  return projectsEs;
}

export function getExperience(language: "es" | "en" | "pt"): Experience[] {
  const experienceEs: Experience[] = [
    {
      role: "Desarrollador Full Stack",
      company: "Freelance / Independiente",
      period: "2020 — Actualidad",
      description:
        "Mi camino en el mundo del desarrollo comenzó en 2020, cuando empecé a explorar la programación desde cero. Al principio trabajaba únicamente con HTML y CSS, creando pequeñas interfaces y juegos simples que me permitieron comprender las bases del diseño web y la estructura de una página. En esa etapa también realicé cursos en Platzi de desarrollo web y bases de datos, que me ayudaron a consolidar fundamentos técnicos. Luego profundicé mi formación en la Universidad Cervantes, cursando la Tecnicatura en Desarrollo Web y Aplicaciones Digitales. A partir de ahí, continué mi crecimiento de forma autodidacta, incorporando JavaScript, React y Next.js para construir productos más complejos y escalables. Mi enfoque siempre estuvo puesto en crear soluciones eficientes, intuitivas y adaptadas a las necesidades reales de los usuarios. Cada proyecto fue un paso más en mi crecimiento profesional, combinando diseño, lógica, arquitectura y experiencia de usuario. Hoy continúo capacitándome y construyendo herramientas cada vez más completas, manteniéndome actualizado con las tecnologías más utilizadas del ecosistema JavaScript.",
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
        "My journey in the world of development began in 2020, when I started exploring programming from scratch. Initially, I worked only with HTML and CSS, creating small interfaces and simple games that allowed me to understand the basics of web design and page structure. Over time, I deepened and expanded my knowledge. Then I incorporated JavaScript, which opened the door to dynamic development and building much more interactive experiences. From there, my learning advanced rapidly. In the following years, I added modern technologies like React and Next.js, which allowed me to develop more complex and scalable projects. My approach has always been focused on creating efficient, intuitive solutions adapted to the real needs of users. Each project was another step in my professional growth, combining design, logic, architecture, and user experience. Today I continue to train and build increasingly complete tools, staying updated with the most used technologies in the JavaScript ecosystem.",
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
        "Minha jornada no mundo do desenvolvimento começou em 2020, quando comecei a explorar programação do zero. No início, trabalhava apenas com HTML e CSS, criando pequenas interfaces e jogos simples que me permitiram entender as bases do design web e a estrutura de uma página. Com o tempo, aprofundei e ampliei meus conhecimentos. Depois incorporei JavaScript, o que abriu a porta para o desenvolvimento dinâmico e para construir experiências muito mais interativas. A partir daí, meu aprendizado avançou rapidamente. Nos anos seguintes, adicionei tecnologias modernas como React e Next.js, que me permitiram desenvolver projetos mais complexos e escaláveis. Minha abordagem sempre esteve focada em criar soluções eficientes, intuitivas e adaptadas às necessidades reais dos usuários. Cada projeto foi mais um passo no meu crescimento profissional, combinando design, lógica, arquitetura e experiência do usuário. Hoje continuo me capacitando e construindo ferramentas cada vez mais completas, mantendo-me atualizado com as tecnologias mais utilizadas do ecossistema JavaScript.",
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

