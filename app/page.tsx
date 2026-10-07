import ProductCard from "@/components/ProductCard";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import { productos } from "@/data/products";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Encabezado */}
      <header className="bg-black text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Image
          src="/logo-mb-time-claro.svg"
          alt="M&B Time"
          width={120}
          height={62}
          priority
        />
        <p className="text-gray-300">Relojes & accesorios</p>
        </div>
      </header>
      <section className="bg-black text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 pb-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold">Relojes con carácter</h2>
            <p className="mt-3 text-gray-300">
              Acero inoxidable, movimiento japonés y diseño atemporal.
            </p>
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
      {/* Contenido */}
      <div className="mx-auto max-w-6xl px-6 py-10">

        {/* Carrusel */}
        <FeaturedCarousel />

        {/* Título del catálogo */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Nuestros productos
          </h2>

          <p className="mt-2 text-gray-600">
            Encuentra relojes, ropa y accesorios.
          </p>
        </div>

        {/* Categorías */}
        <div className="mb-8 flex flex-wrap gap-3">
          <button className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white">
            Todos
          </button>

          <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow">
            Relojes
          </button>

          <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow">
            Casacas
          </button>

          <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow">
            Polos
          </button>

          <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow">
            Billeteras
          </button>
        </div>

        {/* Productos */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productos.map((producto) => (
            <ProductCard
              key={producto.id}
              producto={producto}
            />
          ))}
        </div>

      </div>
    </main>
  );
}
