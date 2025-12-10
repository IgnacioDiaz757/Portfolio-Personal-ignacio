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
      onClick={scrollToTop}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          scrollToTop();
        }
      }}
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 rounded-full bg-blue-600 p-2.5 sm:p-3 text-white shadow-lg transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
      aria-label="Volver al inicio de la página"
      type="button"
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

