"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Tone = "kw" | "name" | "key" | "str" | "punc" | "com" | "bool";
type Token = { text: string; tone: Tone };
type Line = Token[];

const TONE_CLASS: Record<Tone, string> = {
  kw: "text-purple-400",
  name: "text-yellow-200",
  key: "text-sky-300",
  str: "text-emerald-300",
  punc: "text-zinc-400",
  com: "text-zinc-500 italic",
  bool: "text-orange-300",
};

const STACK = ["HTML", "CSS", "JavaScript", "SQL", "PostgreSQL", "React", "Next.js", "Node.js", "IA"];
const TYPE_INTERVAL_MS = 14;
const CHARS_PER_TICK = 2;

export default function About() {
  const { t } = useLanguage();
  const windowRef = useRef<HTMLDivElement>(null);
  const [typed, setTyped] = useState(0);
  const [started, setStarted] = useState(false);

  const lines = useMemo<Line[]>(() => {
    const key = (k: string): Token => ({ text: `  ${k}`, tone: "key" });
    const colon: Token = { text: ": ", tone: "punc" };
    const str = (s: string): Token => ({ text: `"${s}"`, tone: "str" });
    const comma: Token = { text: ",", tone: "punc" };

    const stackTokens: Token[] = [{ text: "[", tone: "punc" }];
    STACK.forEach((s, i) => {
      stackTokens.push(str(s));
      if (i < STACK.length - 1) stackTokens.push({ text: ", ", tone: "punc" });
    });
    stackTokens.push({ text: "]", tone: "punc" });

    return [
      [{ text: `// ${t("about.titulo")}`, tone: "com" }],
      [
        { text: "const ", tone: "kw" },
        { text: "ignacio", tone: "name" },
        { text: " = {", tone: "punc" },
      ],
      [key("experiencia"), colon, str(t("about.parrafo1Bold")), comma],
      [
        key("descripcion"),
        colon,
        str(`${t("about.parrafo1")}${t("about.parrafo1Bold")} ${t("about.parrafo1Cont")}`),
        comma,
      ],
      [key("enfoque"), colon, str(t("about.parrafo2")), comma],
      [key("stack"), colon, ...stackTokens, comma],
      [key("buenasPracticas"), colon, str(t("about.parrafo3Cont").replace(/^[,\s]+/, "")), comma],
      [key("disponible"), colon, { text: "true", tone: "bool" }, comma],
      [{ text: "};", tone: "punc" }],
    ];
  }, [t]);

  const total = useMemo(
    () => lines.reduce((sum, line) => sum + line.reduce((s, tk) => s + tk.text.length, 0) + 1, 0),
    [lines]
  );

  // arranca al entrar en pantalla; con reduced-motion se muestra completo
  useEffect(() => {
    const el = windowRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setTyped(Number.MAX_SAFE_INTEGER);
          }
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started || typed >= total) return;
    const id = window.setInterval(() => {
      setTyped((n) => n + CHARS_PER_TICK);
    }, TYPE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [started, typed, total]);

  const done = typed >= total;

  // recorta las líneas según los caracteres escritos
  const visible: Line[] = [];
  let remaining = typed;
  for (const line of lines) {
    if (remaining <= 0) break;
    const shown: Line = [];
    for (const tk of line) {
      if (remaining <= 0) break;
      const text = tk.text.slice(0, remaining);
      remaining -= tk.text.length;
      shown.push({ ...tk, text });
    }
    remaining -= 1; // salto de línea
    visible.push(shown);
  }

  return (
    <section
      id="sobre-mi"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 id="about-heading" className="sr-only">
          {t("about.titulo")}
        </h2>

        {/* versión accesible del contenido */}
        <div className="sr-only">
          <p>
            {t("about.parrafo1")} {t("about.parrafo1Bold")} {t("about.parrafo1Cont")}
          </p>
          <p>{t("about.parrafo2")}</p>
          <p>
            {t("about.parrafo3")} {t("about.parrafo3Bold")} {t("about.parrafo3Cont")}
          </p>
        </div>

        <div
          ref={windowRef}
          aria-hidden="true"
          data-animate="fade-in-up"
          className="force-dark overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] shadow-2xl shadow-black/50"
        >
          <div className="flex items-center gap-3 border-b border-white/10 bg-white/5 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <span className="font-mono text-xs text-zinc-400">sobre-mi.ts</span>
          </div>

          <div className="min-h-[22rem] overflow-x-auto p-4 sm:p-6 font-mono text-xs sm:text-sm md:text-base leading-relaxed">
            {visible.map((line, i) => {
              const isLast = i === visible.length - 1;
              return (
                <div key={i} className="flex gap-4">
                  <span className="w-5 shrink-0 select-none text-right text-zinc-600">{i + 1}</span>
                  <span className="min-w-0 whitespace-pre-wrap break-words">
                    {line.map((tk, j) => (
                      <span key={j} className={TONE_CLASS[tk.tone]}>
                        {tk.text}
                      </span>
                    ))}
                    {isLast && (
                      <span
                        className={`ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.2em] bg-emerald-400 ${
                          done ? "animate-pulse" : ""
                        }`}
                      />
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
