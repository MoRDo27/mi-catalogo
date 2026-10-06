import ProductCard from "@/components/ProductCard";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import { productos } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Encabezado */}
      <header className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <h1 className="text-2xl font-bold">
            MI TIENDA
          </h1>

          <p className="mt-1 text-gray-300">
            Relojes & accesorios
          </p>
        </div>
      </header>

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
