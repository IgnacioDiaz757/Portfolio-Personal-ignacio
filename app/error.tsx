"use client";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-3xl sm:text-5xl font-bold text-white">Algo salió mal</h1>
      <p className="max-w-md text-zinc-300">Ocurrió un error inesperado. Intenta de nuevo.</p>
      <button
        type="button"
        onClick={reset}
        className="rounded-lg bg-emerald-500 px-8 py-3 text-sm font-semibold text-black hover:bg-emerald-400"
      >
        Reintentar
      </button>
    </main>
  );
}
