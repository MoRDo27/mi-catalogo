type Producto = {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
};

type ProductCardProps = {
  producto: Producto;
};

export default function ProductCard({ producto }: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="flex h-64 items-center justify-center bg-gray-200">
        <span className="text-5xl">⌚</span>
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-500">
          {producto.categoria}
        </p>

        <h3 className="mt-1 text-xl font-semibold text-gray-900">
          {producto.nombre}
        </h3>

        <p className="mt-3 text-xl font-bold text-gray-900">
          S/ {producto.precio.toFixed(2)}
        </p>

        <button className="mt-5 w-full rounded-xl bg-black px-4 py-3 font-medium text-white">
          Ver producto
        </button>
      </div>
    </div>
  );
}
