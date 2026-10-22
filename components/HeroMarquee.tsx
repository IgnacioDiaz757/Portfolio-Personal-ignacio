const PHRASES = {
  serif: ["Hecho a mano", "Full-stack", "Next.js", "Córdoba, AR"],
  sans: ["Código con criterio", "Diseño que convierte", "Productos reales"],
};

function Row({
  items,
  className,
  reverse,
}: {
  items: string[];
  className: string;
  reverse?: boolean;
}) {
  // se duplica el contenido para que el bucle de -50% no tenga saltos
  const loop = [...items, ...items];
  return (
    <div
      className={`flex w-max whitespace-nowrap ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      } ${className}`}
    >
      {loop.map((text, i) => (
        <span key={i} className="px-6 sm:px-10">
          {text}
          <span className="ml-6 sm:ml-10 opacity-60" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

// decorativo: dos filas que pasan por detrás del retrato
export default function HeroMarquee() {
  return (
    <div
      aria-hidden="true"
      style={{
        maskImage: "linear-gradient(to right, transparent, #000 18%, #000 82%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, #000 18%, #000 82%, transparent)",
      }}
      className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-screen -translate-x-1/2 lg:w-[130%] -translate-y-1/2 select-none overflow-hidden"
    >
      <Row
        items={PHRASES.serif}
        reverse
        className="[font-family:var(--font-serif),serif] text-6xl italic leading-[1.1] text-emerald-400/20 sm:text-7xl lg:text-8xl"
      />
      <Row
        items={PHRASES.sans}
        className="text-6xl font-bold leading-[1.1] text-white/[0.07] sm:text-7xl lg:text-8xl"
      />
    </div>
  );
}
