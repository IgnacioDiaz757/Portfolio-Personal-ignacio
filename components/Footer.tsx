export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 sm:py-12 text-center text-xs sm:text-sm text-zinc-500 px-4" role="contentinfo">
      <p>© {new Date().getFullYear()} Juan Ignacio Díaz. Todos los derechos reservados.</p>
      <p className="mt-2">
        Hecho con <span aria-label="amor">❤️</span> usando Next.js y TypeScript
      </p>
    </footer>
  );
}

