// firma que se dibuja sobre el retrato (decorativa)
export default function HeroSignature() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 520 190"
      className="pointer-events-none absolute bottom-[6%] left-1/2 z-20 w-[88%] -translate-x-1/2 -rotate-6 overflow-visible"
    >
      <text
        x="260"
        y="130"
        textAnchor="middle"
        className="signature-path"
        style={{
          fontFamily: "var(--font-signature), cursive",
          fontSize: 120,
          letterSpacing: 0,
          textTransform: "none",
          fill: "#a7f3d0",
          stroke: "#34d399",
          strokeWidth: 1.6,
          paintOrder: "stroke",
        }}
      >
        Ignacio Díaz
      </text>
    </svg>
  );
}
