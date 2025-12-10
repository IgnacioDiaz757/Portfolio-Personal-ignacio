"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 sm:py-12 text-center text-xs sm:text-sm text-zinc-400 px-4" role="contentinfo">
      <p className="mb-3 sm:mb-4">
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=IGNADIAZCAB1905@GMAIL.COM"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label="Enviar email a IGNADIAZCAB1905@GMAIL.COM usando Gmail"
        >
          IGNADIAZCAB1905@GMAIL.COM
        </a>
      </p>
      <p>
        hecho con <span aria-label="amor">❤️</span> por ignacio diaz
      </p>
    </footer>
  );
}

