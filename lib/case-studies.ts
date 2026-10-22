import type { CaseStudy } from "./types";

type Lang = "es" | "en" | "pt";

// casos de estudio por URL del proyecto; solo hay datos de los que se pueden contar sin inventar cifras
const CASE_STUDIES: Record<string, Record<Lang, CaseStudy>> = {
  "#sistema-fichaje-privado": {
    es: {
      role: "Diseño y desarrollo full stack",
      challenge:
        "Registrar la asistencia en obra con datos confiables: que cada persona marque ingreso y salida desde el lugar de trabajo y que quien marca sea realmente quien dice ser.",
      solution: [
        "Verificación de ubicación por GPS antes de permitir el marcado en la obra elegida.",
        "Identificación por reconocimiento facial en el navegador con face-api.js, a partir de una foto tomada en el momento.",
        "Registro de ingreso y salida con fecha y hora, asociado a la persona y a la obra, guardado en Supabase.",
        "Interfaz simple para usar desde el celular, con una guía para activar los permisos de ubicación y cámara.",
      ],
      result: [
        "Asistencia verificable por ubicación e identidad, no solo por declaración.",
        "Asistencias, empleados, obras y fotos centralizados en una única base de datos.",
      ],
    },
    en: {
      role: "Full stack design and development",
      challenge:
        "Record on-site attendance with reliable data: every person must check in and out from the work site, and the person checking in must really be who they claim to be.",
      solution: [
        "GPS location check before allowing a check-in at the selected work site.",
        "Facial recognition in the browser with face-api.js, using a photo taken on the spot.",
        "Check-in and check-out records with date and time, linked to the person and the site, stored in Supabase.",
        "Simple mobile-friendly interface with a guide to enable location and camera permissions.",
      ],
      result: [
        "Attendance that can be verified by location and identity, not just by declaration.",
        "Attendance, employees, sites and photos centralized in a single database.",
      ],
    },
    pt: {
      role: "Design e desenvolvimento full stack",
      challenge:
        "Registrar a presença em obra com dados confiáveis: cada pessoa deve marcar entrada e saída no local de trabalho, e quem marca deve ser realmente quem diz ser.",
      solution: [
        "Verificação de localização por GPS antes de permitir a marcação na obra escolhida.",
        "Identificação por reconhecimento facial no navegador com face-api.js, a partir de uma foto tirada na hora.",
        "Registro de entrada e saída com data e hora, associado à pessoa e à obra, salvo no Supabase.",
        "Interface simples para usar no celular, com um guia para ativar as permissões de localização e câmera.",
      ],
      result: [
        "Presença verificável por localização e identidade, não apenas por declaração.",
        "Presenças, funcionários, obras e fotos centralizados em um único banco de dados.",
      ],
    },
  },
  "https://riverasdelsuquia.com.ar/sistema": {
    es: {
      role: "Diseño y desarrollo full stack",
      challenge:
        "Centralizar la gestión de la cooperativa en un solo lugar: cobranzas, logística, stock e indicadores, con reportes financieros y aprobaciones recurrentes.",
      solution: [
        "ERP cooperativo que reúne cobranzas, logística y stock.",
        "Indicadores en tiempo real para el seguimiento de la operación.",
        "Automatización de reportes financieros y de los flujos de aprobación.",
      ],
      result: ["-70% de carga operativa mensual al automatizar reportes y aprobaciones."],
    },
    en: {
      role: "Full stack design and development",
      challenge:
        "Centralize the cooperative's management in one place: collections, logistics, inventory and indicators, with recurring financial reports and approvals.",
      solution: [
        "Cooperative ERP that brings together collections, logistics and inventory.",
        "Real-time indicators to follow the operation.",
        "Automation of financial reports and approval flows.",
      ],
      result: ["-70% monthly operational load by automating reports and approvals."],
    },
    pt: {
      role: "Design e desenvolvimento full stack",
      challenge:
        "Centralizar a gestão da cooperativa em um só lugar: cobranças, logística, estoque e indicadores, com relatórios financeiros e aprovações recorrentes.",
      solution: [
        "ERP cooperativo que reúne cobranças, logística e estoque.",
        "Indicadores em tempo real para acompanhar a operação.",
        "Automação de relatórios financeiros e dos fluxos de aprovação.",
      ],
      result: ["-70% de carga operacional mensal ao automatizar relatórios e aprovações."],
    },
  },
  "https://viverosunidos.com/admin": {
    es: {
      role: "Diseño y desarrollo full stack",
      challenge:
        "Coordinar stock, producción y distribución entre los viveros asociados, con trazabilidad de cada lote.",
      solution: [
        "Control de stock, producción y distribución en una única plataforma.",
        "Tableros personalizados para seguir la operación de cada vivero.",
        "Notificaciones para los viveros asociados.",
      ],
      result: ["Trazabilidad completa de lotes.", "-30% en el tiempo de coordinación logística."],
    },
    en: {
      role: "Full stack design and development",
      challenge:
        "Coordinate inventory, production and distribution across the associated nurseries, with traceability for every batch.",
      solution: [
        "Inventory, production and distribution control in a single platform.",
        "Custom dashboards to follow each nursery's operation.",
        "Notifications for the associated nurseries.",
      ],
      result: ["Full batch traceability.", "-30% logistics coordination time."],
    },
    pt: {
      role: "Design e desenvolvimento full stack",
      challenge:
        "Coordenar estoque, produção e distribuição entre os viveiros associados, com rastreabilidade de cada lote.",
      solution: [
        "Controle de estoque, produção e distribuição em uma única plataforma.",
        "Painéis personalizados para acompanhar a operação de cada viveiro.",
        "Notificações para os viveiros associados.",
      ],
      result: ["Rastreabilidade completa de lotes.", "-30% no tempo de coordenação logística."],
    },
  },
};

export function getCaseStudy(liveUrl: string, language: Lang): CaseStudy | undefined {
  return CASE_STUDIES[liveUrl]?.[language];
}
