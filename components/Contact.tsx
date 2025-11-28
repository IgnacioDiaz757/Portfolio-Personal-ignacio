import { GITHUB_URL, socialLinks } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
      aria-label="Contacto"
    >
      <div className="mx-auto max-w-2xl space-y-6 sm:space-y-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 sm:p-8 md:p-12 text-center backdrop-blur-sm px-4" data-animate>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          ¿Trabajamos juntos?
        </h2>
        <p className="text-base sm:text-lg text-zinc-400">
          Estoy siempre abierto a discutir nuevos proyectos, ideas creativas
          o oportunidades para ser parte de tus visiones.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
          <a
            href="mailto:hola@juanignaciodiaz.dev?subject=Consulta%20desde%20portfolio"
            className="w-full sm:w-auto rounded-lg bg-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Enviar email"
          >
            Enviar Email
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-lg border border-white/10 bg-white/5 px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Ver perfil de GitHub"
          >
            Ver GitHub
          </a>
        </div>
        <div className="pt-6 sm:pt-8">
          <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-zinc-500">También puedes encontrarme en:</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded text-sm sm:text-base"
                aria-label={`Visitar ${social.name}`}
              >
                <span className="sr-only">{social.name}</span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

