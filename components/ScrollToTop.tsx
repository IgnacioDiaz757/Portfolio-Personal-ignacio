interface ScrollToTopProps {
  show: boolean;
}

export default function ScrollToTop({ show }: ScrollToTopProps) {
  if (!show) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      data-floating-ui
      onClick={scrollToTop}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          scrollToTop();
        }
      }}
      className="fixed right-4 bottom-28 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 p-0 text-black shadow-lg transition-all hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] sm:bottom-[7.5rem] sm:right-8 sm:h-14 sm:w-14"
      aria-label="Volver al inicio de la página"
    >
      <svg
        className="h-5 w-5 sm:h-6 sm:w-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}

