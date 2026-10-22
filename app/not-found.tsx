import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-sm tracking-widest text-emerald-400">404</p>
      <h1 className="text-4xl sm:text-6xl font-bold text-white">Página no encontrada</h1>
      <p className="max-w-md text-zinc-300">
        La página que buscas no existe o fue movida.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-emerald-500 px-8 py-3 text-sm font-semibold text-black hover:bg-emerald-400"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
