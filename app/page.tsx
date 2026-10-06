import ProductCard from "@/components/ProductCard";

const productos = [
  {
    id: 1,
    nombre: "Reloj Clásico",
    categoria: "Relojes",
    precio: 129,
  },
  {
    id: 2,
    nombre: "Reloj Deportivo",
    categoria: "Relojes",
    precio: 159,
  },
  {
    id: 3,
    nombre: "Casaca Urbana",
    categoria: "Casacas",
    precio: 119,
  },
  {
    id: 4,
    nombre: "Polo Básico",
    categoria: "Polos",
    precio: 49,
  },
  {
    id: 5,
    nombre: "Billetera Clásica",
    categoria: "Billeteras",
    precio: 59,
  },
];

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

        <h2 className="text-3xl font-bold text-gray-900">
          Nuestros productos
        </h2>

        <p className="mt-2 text-gray-600">
          Encuentra relojes, ropa y accesorios.
        </p>

        {/* Categorías */}
        <div className="mt-6 flex flex-wrap gap-3">
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
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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