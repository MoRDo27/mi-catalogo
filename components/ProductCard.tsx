import type { Producto } from "@/data/products";

type ProductCardProps = {
  producto: Producto;
};

export default function ProductCard({ producto }: ProductCardProps) {
  const anterior = producto.oferta ? producto.precioAnterior : undefined;

  const descuento =
    anterior && anterior > producto.precio
      ? Math.round((1 - producto.precio / anterior) * 100)
      : 0;

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="relative flex h-64 items-center justify-center bg-gray-200">
        {descuento > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-sm font-semibold text-white">
            -{descuento}%
          </span>
        )}
        <span className="text-5xl">⌚</span>
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-500">{producto.categoria}</p>

        <h3 className="mt-1 text-xl font-semibold text-gray-900">
          {producto.nombre}
        </h3>

        <p className="mt-3 flex items-baseline gap-3">
          <span className="text-xl font-bold text-gray-900">
            S/ {producto.precio.toFixed(2)}
          </span>
          {anterior && descuento > 0 && (
            <span className="text-gray-500 line-through">
              S/ {anterior.toFixed(2)}
            </span>
          )}
        </p>

        <button className="mt-5 w-full rounded-xl bg-black px-4 py-3 font-medium text-white">
          Ver producto
        </button>
      </div>
    </div>
  );
}