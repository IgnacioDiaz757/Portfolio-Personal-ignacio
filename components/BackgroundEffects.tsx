// curvas de nivel: anillos concéntricos con ondulación determinista (igual en servidor y cliente)
function contour(cx: number, cy: number, r: number, seed: number) {
  const steps = 48;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const a = (i / steps) * Math.PI * 2;
    const wobble =
      1 + 0.12 * Math.sin(a * 3 + seed) + 0.07 * Math.sin(a * 5 - seed * 1.7);
    const x = (cx + Math.cos(a) * r * wobble).toFixed(1);
    const y = (cy + Math.sin(a) * r * wobble).toFixed(1);
    d += `${i === 0 ? "M" : "L"}${x} ${y} `;
  }
  return `${d}Z`;
}

const CENTERS = [
  { cx: 220, cy: 260, seed: 0.6 },
  { cx: 1040, cy: 640, seed: 2.1 },
];
const PATHS = CENTERS.flatMap(({ cx, cy, seed }) =>
  Array.from({ length: 9 }, (_, i) => contour(cx, cy, 60 + i * 52, seed + i * 0.35))
);

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full text-white opacity-[0.07]"
        viewBox="0 0 1280 800"
        preserveAspectRatio="xMidYMid slice"
      >
        {PATHS.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="currentColor" strokeWidth="1" />
        ))}
      </svg>
      <div 
        className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl animate-float"
      />
      <div 
        className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />
    </div>
  );
}
