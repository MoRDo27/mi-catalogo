import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/">
          <Image
            src="/logo-mb-time-claro.svg"
            alt="M&B Time"
            width={120}
            height={62}
            priority
          />
        </Link>

        <form action="/catalogo" className="flex w-full max-w-md">
          <input
            type="search"
            name="q"
            placeholder="¿Qué estás buscando?"
            className="w-full rounded-l-full bg-white px-5 py-2 text-sm text-gray-900 outline-none"
          />
          <button
            type="submit"
            className="rounded-r-full bg-gray-200 px-5 text-sm font-medium text-black"
          >
            Buscar
          </button>
        </form>

        <Link href="/catalogo" className="text-sm text-gray-300 hover:text-white">
          Catálogo
        </Link>
      </div>
    </header>
  );
}