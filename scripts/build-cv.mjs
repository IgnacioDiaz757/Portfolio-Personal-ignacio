// Genera el CV en PDF (es, en, pt) con la misma estética del portafolio.
// Uso: npm run cv   (necesita Google Chrome instalado; usa su modo headless para imprimir el PDF)
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const require = createRequire(import.meta.url);

const CHROME = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "/usr/bin/google-chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].find((p) => p && existsSync(p));
if (!CHROME) throw new Error("No se encontró Chrome. Definí CHROME_PATH con la ruta del ejecutable.");

// se compila lib/ a una carpeta temporal para reutilizar los mismos datos que muestra el sitio
const work = mkdtempSync(join(tmpdir(), "cv-"));
execFileSync(
  process.execPath,
  [
    require.resolve("typescript/bin/tsc"),
    join(root, "lib/data.ts"),
    join(root, "lib/data-translations.ts"),
    "--outDir", join(work, "lib"),
    "--module", "commonjs", "--target", "es2020", "--skipLibCheck",
  ],
  { stdio: "inherit" }
);
const { getProjects, getExperience } = require(join(work, "lib/data-translations.js"));
const data = require(join(work, "lib/data.js"));

const LABELS = {
  es: {
    profile: "Perfil", skills: "Habilidades", experience: "Experiencia", projects: "Proyectos destacados",
    others: "Otros proyectos", contact: "Contacto", private: "Proyecto privado", formation: "Formación y recorrido",
    groups: { Frontend: "Frontend", "Backend & Data": "Backend y datos", "Diseño & UX": "Diseño y UX", "IA & Media": "IA y media", Tooling: "Herramientas" },
    location: "Córdoba, Argentina · Remoto",
  },
  en: {
    profile: "Profile", skills: "Skills", experience: "Experience", projects: "Featured projects",
    others: "Other projects", contact: "Contact", private: "Private project", formation: "Education & path",
    groups: { Frontend: "Frontend", "Backend & Data": "Backend & data", "Diseño & UX": "Design & UX", "IA & Media": "AI & media", Tooling: "Tooling" },
    location: "Córdoba, Argentina · Remote",
  },
  pt: {
    profile: "Perfil", skills: "Habilidades", experience: "Experiência", projects: "Projetos em destaque",
    others: "Outros projetos", contact: "Contato", private: "Projeto privado", formation: "Formação e trajetória",
    groups: { Frontend: "Frontend", "Backend & Data": "Backend e dados", "Diseño & UX": "Design e UX", "IA & Media": "IA e mídia", Tooling: "Ferramentas" },
    location: "Córdoba, Argentina · Remoto",
  },
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const host = (u) => u.replace(/^https?:\/\//, "").replace(/\/$/, "");
const photo = pathToFileURL(join(root, "public/fotomar.jpeg")).href;

const CSS = `
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Oswald:wght@500;600;700&display=swap");
@page { size: A4; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
:root { --bg: #0a0a0a; --ink: #18181b; --muted: #52525b; --line: #e4e4e7; --em: #10b981; --em-d: #047857; }
body { font-family: "Inter", sans-serif; color: var(--ink); font-size: 9.4pt; line-height: 1.5; }
h1, h2, h3, .oswald { font-family: "Oswald", sans-serif; text-transform: uppercase; }
.page { width: 210mm; height: 297mm; display: grid; grid-template-columns: 68mm 1fr; overflow: hidden; page-break-after: always; position: relative; }
.page:last-child { page-break-after: auto; }
aside { background: var(--bg); color: #e4e4e7; padding: 14mm 8mm; position: relative; overflow: hidden; }
aside::before { content: ""; position: absolute; width: 90mm; height: 90mm; right: -45mm; top: -35mm; border-radius: 50%; background: radial-gradient(circle, rgba(16,185,129,.35), transparent 70%); }
aside::after { content: ""; position: absolute; width: 90mm; height: 90mm; left: -50mm; bottom: -40mm; border-radius: 50%; background: radial-gradient(circle, rgba(59,130,246,.3), transparent 70%); }
aside > * { position: relative; z-index: 1; }
.photo { width: 38mm; height: 38mm; border-radius: 50%; object-fit: cover; object-position: top; border: 1.2mm solid rgba(255,255,255,.12); display: block; margin: 0 auto 7mm; }
aside h2 { font-size: 10.5pt; letter-spacing: .14em; color: #6ee7b7; margin: 7mm 0 2.5mm; font-weight: 600; }
aside p, aside li { font-size: 8.6pt; color: #d4d4d8; }
aside ul { list-style: none; }
aside li { margin-bottom: 1.6mm; word-break: break-word; }
aside .skillgroup { margin-bottom: 3mm; }
aside .skillgroup b { display: block; font-size: 8pt; color: #a1a1aa; font-weight: 500; letter-spacing: .04em; margin-bottom: .6mm; }
.main { padding: 14mm 12mm 12mm 11mm; }
.name { font-size: 27pt; line-height: 1.02; font-weight: 700; letter-spacing: .02em; color: var(--bg); }
.role { font-size: 12pt; color: var(--em-d); font-weight: 600; letter-spacing: .12em; margin-top: 2mm; }
.sec { margin-top: 7mm; }
.sec > h2 { font-size: 11pt; letter-spacing: .14em; font-weight: 700; padding-bottom: 1.6mm; border-bottom: .35mm solid var(--em); margin-bottom: 3.5mm; display: flex; align-items: center; gap: 2mm; }
.sec > h2::before { content: ""; width: 2.4mm; height: 2.4mm; background: var(--em); border-radius: 50%; }
p.lead { margin-bottom: 2mm; }
.job h3 { font-size: 11pt; font-weight: 600; letter-spacing: .05em; }
.job .meta { color: var(--muted); font-size: 8.6pt; margin-bottom: 1.5mm; }
.tl { margin-top: 3mm; border-left: .4mm solid var(--line); padding-left: 4mm; }
.tl .step { position: relative; margin-bottom: 3.2mm; break-inside: avoid; }
.tl .step::before { content: ""; position: absolute; left: -5.1mm; top: 1.4mm; width: 1.9mm; height: 1.9mm; background: var(--em); border-radius: 50%; }
.tl .when { font-family: "Oswald", sans-serif; font-size: 8pt; letter-spacing: .12em; color: var(--em-d); text-transform: uppercase; }
.tl .what { font-weight: 600; }
.tl .desc { color: var(--muted); font-size: 8.8pt; }
.chips { display: flex; flex-wrap: wrap; gap: 1.2mm; margin-top: 1.4mm; }
.chip { font-size: 7.4pt; padding: .5mm 2mm; border: .25mm solid var(--line); border-radius: 1.2mm; color: #3f3f46; background: #fafafa; }
.ach { display: flex; flex-wrap: wrap; gap: 1.6mm; margin-top: 2mm; }
.ach span { font-size: 8.2pt; padding: .7mm 2.4mm; border-radius: 10mm; background: #ecfdf5; color: var(--em-d); border: .25mm solid #a7f3d0; }
.proj { display: grid; gap: 4mm; grid-template-columns: 1fr 1fr; }
.card { border: .3mm solid var(--line); border-radius: 2.4mm; padding: 3.2mm 3.6mm; break-inside: avoid; background: #fff; }
.card h3 { font-size: 9.8pt; font-weight: 600; letter-spacing: .04em; line-height: 1.15; }
.card .m { font-family: "Oswald", sans-serif; font-size: 15pt; font-weight: 700; color: var(--em-d); line-height: 1.1; margin-top: 1.2mm; }
.card .ml { font-size: 7.8pt; color: var(--muted); }
.card p { font-size: 8.4pt; color: #3f3f46; margin-top: 1.2mm; }
.card .url { font-size: 7.6pt; color: #1d4ed8; margin-top: 1.2mm; word-break: break-all; }
.card .url.priv { color: var(--muted); }
.others { columns: 2; column-gap: 6mm; }
.others li { font-size: 8.6pt; margin-bottom: 1.4mm; list-style: none; break-inside: avoid; }
.others li span { color: var(--muted); }
.head2 { background: var(--bg); color: #fff; padding: 8mm 12mm; grid-column: 1 / -1; display: flex; justify-content: space-between; align-items: baseline; }
.head2 .name { color: #fff; font-size: 17pt; }
.head2 .role { margin: 0; font-size: 9.5pt; color: #6ee7b7; }
.page2 { grid-template-columns: 1fr; grid-template-rows: auto 1fr; }
.page2 .main { padding-top: 6mm; }
`;

function projectCard(p, L) {
  const url = p.hideLinks ? `<div class="url priv">${esc(L.private)}</div>` : `<div class="url">${esc(host(p.links.live))}</div>`;
  const metric = p.metric ? `<div class="m">${esc(p.metric.value)}</div><div class="ml">${esc(p.metric.label)}</div>` : "";
  const chips = p.stack.filter(Boolean).map((s) => `<span class="chip">${esc(s)}</span>`).join("");
  return `<div class="card"><h3>${esc(p.title)}</h3>${metric}<p>${esc(p.summary)}</p><div class="chips">${chips}</div>${url}</div>`;
}

function build(lang) {
  const L = LABELS[lang];
  const t = JSON.parse(readFileSync(join(root, `translations/${lang}.json`), "utf8"));
  const exp = getExperience(lang)[0];
  const projects = getProjects(lang);
  // los de mayor peso (sistemas y con resultado medible) van en tarjetas; el resto, en lista compacta
  const featured = projects.filter((p) => p.metric || p.category === "sistemas").slice(0, 8);
  const others = projects.filter((p) => !featured.includes(p));
  const about = t.about;
  const profile = [`${about.parrafo1}${about.parrafo1Bold} ${about.parrafo1Cont}`.replace(/\s+/g, " "), about.parrafo2];
  const skills = data.skillGroups
    .map((g) => `<div class="skillgroup"><b>${esc(L.groups[g.label] ?? g.label)}</b><p>${esc(g.items.join(" · "))}</p></div>`)
    .join("");
  const steps = (exp.stages ?? [])
    .map((s) => `<div class="step"><div class="when">${esc(s.label)}</div><div class="what">${esc(s.title)}</div><div class="desc">${esc(s.description)}</div></div>`)
    .join("");
  const ach = (exp.achievements ?? []).map((a) => `<span>${esc(a)}</span>`).join("");
  const social = data.socialLinks.filter((s) => s.name !== "Instagram");

  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><title>Juan Ignacio Díaz — CV</title><style>${CSS}</style></head><body>
<section class="page">
  <aside>
    <img class="photo" src="${photo}" alt="">
    <h2>${esc(L.contact)}</h2>
    <ul>
      <li>${esc(data.EMAIL)}</li>
      <li>+54 9 351 260-6190</li>
      <li>${esc(L.location)}</li>
      ${social.map((s) => `<li>${esc(host(s.href))}</li>`).join("")}
      <li>${esc(host(data.SITE_URL))}</li>
    </ul>
    <h2>${esc(L.skills)}</h2>
    ${skills}
  </aside>
  <div class="main">
    <h1 class="name">Juan Ignacio<br>Díaz</h1>
    <div class="role oswald">${esc(t.hero.titulo)}</div>
    <div class="sec"><h2>${esc(L.profile)}</h2>${profile.map((x) => `<p class="lead">${esc(x)}</p>`).join("")}</div>
    <div class="sec"><h2>${esc(L.experience)}</h2>
      <div class="job"><h3>${esc(exp.role)} · ${esc(exp.company)}</h3><div class="meta">${esc(exp.period)}</div><p>${esc(exp.description)}</p>
      <div class="ach">${ach}</div>
      <div class="tl">${steps}</div></div>
    </div>
  </div>
</section>
<section class="page page2">
  <div class="head2"><div class="name oswald">Juan Ignacio Díaz</div><div class="role oswald">${esc(t.hero.titulo)}</div></div>
  <div class="main">
    <div class="sec" style="margin-top:0"><h2>${esc(L.projects)}</h2><div class="proj">${featured.map((p) => projectCard(p, L)).join("")}</div></div>
    <div class="sec"><h2>${esc(L.others)}</h2><ul class="others">${others
      .map((p) => `<li><b>${esc(p.title)}</b> <span>${p.hideLinks ? "· " + esc(L.private) : "· " + esc(host(p.links.live))}</span></li>`)
      .join("")}</ul></div>
  </div>
</section></body></html>`;
}

const outDir = join(root, "public/cv");
mkdirSync(outDir, { recursive: true });
for (const lang of ["es", "en", "pt"]) {
  const htmlPath = join(work, `cv-${lang}.html`);
  writeFileSync(htmlPath, build(lang), "utf8");
  const pdf = join(outDir, `Juan-Ignacio-Diaz-CV-${lang}.pdf`);
  execFileSync(CHROME, [
    "--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--virtual-time-budget=20000",
    `--print-to-pdf=${pdf}`, pathToFileURL(htmlPath).href,
  ], { stdio: "ignore" });
  console.log("CV generado:", pdf);
}
