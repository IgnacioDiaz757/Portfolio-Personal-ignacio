export default function About() {
  return (
    <section
      id="sobre-mi"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
      aria-label="Sobre mí"
    >
      <div className="mx-auto max-w-3xl space-y-4 sm:space-y-6 px-4 sm:px-6" data-animate>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Sobre mí
        </h2>
        <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-zinc-400">
          <p>
            Con más de <strong className="text-white">3 años de experiencia</strong> en desarrollo web, me
            especializo en crear soluciones digitales que combinan diseño
            elegante con funcionalidad robusta.
          </p>
          <p>
            Mi enfoque se centra en construir productos que no solo se
            vean bien, sino que también ofrezcan una experiencia excepcional
            y resultados medibles para los usuarios y el negocio.
          </p>
          <p>
            Trabajo principalmente con tecnologías modernas como{" "}
            <strong className="text-white">Next.js, React, TypeScript y Node.js</strong>, siempre buscando las mejores
            prácticas y las últimas tendencias en desarrollo web.
          </p>
        </div>
      </div>
    </section>
  );
}

