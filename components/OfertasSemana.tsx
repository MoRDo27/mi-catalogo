
import ProductCard from "@/components/ProductCard";
import { productos } from "@/data/products";

export default function OfertasSemana() {
  const ofertas = productos.filter((producto) => producto.oferta);

  if (ofertas.length === 0) {
    return null;
  }

  return (
    <section className="mb-12">
      <div className="mb-5">
        <h2 className="text-3xl font-bold text-gray-900">
          Ofertas de la semana
        </h2>
        <p className="mt-1 text-gray-600">
          Precios especiales por tiempo limitado
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ofertas.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  );
}