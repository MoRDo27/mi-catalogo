import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import OfertasSemana from "@/components/OfertasSemana";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />

      <section className="bg-black text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 pb-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold">Relojes con carácter</h2>
            <p className="mt-3 text-gray-300">
              Acero inoxidable, movimiento japonés y diseño atemporal.
            </p>
            <Link
              href="/catalogo"
              className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-black"
            >
              Ver catálogo
            </Link>
          </div>
          <Image
            src="/LOGO.jpeg"
            alt="Reverso de un reloj M&B Time"
            width={600}
            height={600}
            className="rounded-2xl"
          />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <FeaturedCarousel />
        <OfertasSemana />

        <div className="text-center">
          <Link
            href="/catalogo"
            className="inline-block rounded-full bg-black px-8 py-3 font-medium text-white"
          >
            Ver todo el catálogo
          </Link>
        </div>
      </div>
    </main>
  );
}