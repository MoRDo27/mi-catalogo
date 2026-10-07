import { Producto } from "@/data/products";
import Image from "next/image";

type ProductCardProps = {
  producto: Producto;
};

export default function ProductCard({ producto }: ProductCardProps) {
  const tieneDescuento =
    producto.oferta &&
    producto.precioAnterior !== undefined &&
    producto.precioAnterior > producto.precio;

  const porcentaje = tieneDescuento
    ? Math.round(
        ((producto.precioAnterior! - producto.precio) /
          producto.precioAnterior!) *
          100
      )
    : 0;

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="relative h-64 w-full overflow-hidden rounded-t-2xl bg-gray-100">
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
        />

        {tieneDescuento && (
          <span className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
            -{porcentaje}%
          </span>
        )}
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-500">{producto.categoria}</p>

        <h3 className="mt-1 text-xl font-semibold text-gray-900">
          {producto.nombre}
        </h3>

        <div className="mt-3 flex items-center gap-2">
          <p className="text-xl font-bold text-gray-900">
            S/ {producto.precio.toFixed(2)}
          </p>

          {tieneDescuento && (
            <p className="text-sm text-gray-400 line-through">
              S/ {producto.precioAnterior!.toFixed(2)}
            </p>
          )}
        </div>

        <button className="mt-5 w-full rounded-xl bg-black px-4 py-3 font-medium text-white">
          Ver producto
        </button>
      </div>
    </div>
  );
}