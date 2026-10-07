"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { productos, type Producto } from "@/data/products";

type Grupo = "categoria" | "marca" | "linea";

const grupos: { clave: Grupo; titulo: string }[] = [
  { clave: "categoria", titulo: "Categoría" },
  { clave: "marca", titulo: "Marca" },
  { clave: "linea", titulo: "Línea" },
];

const sinFiltros: Record<Grupo, string[]> = {
  categoria: [],
  marca: [],
  linea: [],
};

const normalizar = (t: string) =>
  t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export default function Catalogo({ busqueda = "" }: { busqueda?: string }) {
  const [filtros, setFiltros] = useState(sinFiltros);
  const [mostrar, setMostrar] = useState(true);

  const alternar = (clave: Grupo, valor: string) => {
    setFiltros((prev) => {
      const actual = prev[clave];
      const nuevo = actual.includes(valor)
        ? actual.filter((v) => v !== valor)
        : [...actual, valor];
      const siguiente = { ...prev, [clave]: nuevo };
      if (clave === "marca") siguiente.linea = [];
      return siguiente;
    });
  };

  const limpiar = () => setFiltros(sinFiltros);

  const opciones = (clave: Grupo) => {
    const base =
      clave === "linea" && filtros.marca.length > 0
        ? productos.filter((p) => filtros.marca.includes(p.marca ?? ""))
        : productos;
    return Array.from(
      new Set(base.map((p) => p[clave]).filter((v): v is string => Boolean(v)))
    );
  };

  const termino = normalizar(busqueda.trim());
  const coincide = (p: Producto) =>
    termino === "" ||
    normalizar(
      `${p.nombre} ${p.marca ?? ""} ${p.linea ?? ""} ${p.categoria}`
    ).includes(termino);

  const visibles = productos.filter(
    (p) =>
      coincide(p) &&
      grupos.every(
        ({ clave }) =>
          filtros[clave].length === 0 || filtros[clave].includes(p[clave] ?? "")
      )
  );

  const activos = grupos.flatMap(({ clave }) =>
    filtros[clave].map((valor) => ({ clave, valor }))
  );

  return (
    <section>
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Nuestros productos
          </h2>
          <p className="mt-2 text-gray-600">
            {visibles.length}{" "}
            {visibles.length === 1 ? "producto" : "productos"}
          </p>
          {busqueda && (
            <p className="mt-1 text-sm text-gray-600">
              Resultados para “{busqueda}”.{" "}
              <Link href="/catalogo" className="underline">
                Ver todo
              </Link>
            </p>
          )}
        </div>

        <button
          onClick={() => setMostrar(!mostrar)}
          className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white"
        >
          {mostrar ? "Ocultar filtros" : "Mostrar filtros"}
        </button>
      </div>

      <div className={`grid gap-8 ${mostrar ? "lg:grid-cols-[240px_1fr]" : ""}`}>
        {mostrar && (
          <aside>
            {activos.length > 0 && (
              <div className="mb-4 border-b border-gray-300 pb-4">
                <p className="mb-2 text-sm font-semibold text-gray-900">
                  Filtrado por
                </p>
                <div className="flex flex-wrap gap-2">
                  {activos.map(({ clave, valor }) => (
                    <button
                      key={`${clave}-${valor}`}
                      onClick={() => alternar(clave, valor)}
                      className="rounded-full bg-black px-3 py-1 text-xs text-white"
                    >
                      {valor} ×
                    </button>
                  ))}
                </div>
                <button
                  onClick={limpiar}
                  className="mt-3 text-sm text-gray-600 underline"
                >
                  Limpiar filtros
                </button>
              </div>
            )}

            {grupos.map(({ clave, titulo }) => {
              const lista = opciones(clave);
              if (lista.length === 0) return null;

              return (
                <details
                  key={clave}
                  open
                  className="border-b border-gray-300 py-3"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-gray-900">
                    {titulo}
                  </summary>
                  <div className="mt-3 space-y-2">
                    {lista.map((valor) => (
                      <label
                        key={valor}
                        className="flex cursor-pointer items-center gap-2 text-sm text-gray-700"
                      >
                        <input
                          type="checkbox"
                          checked={filtros[clave].includes(valor)}
                          onChange={() => alternar(clave, valor)}
                          className="h-4 w-4 accent-black"
                        />
                        {valor}
                      </label>
                    ))}
                  </div>
                </details>
              );
            })}
          </aside>
        )}

        <div>
          {visibles.length === 0 ? (
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <p className="text-gray-700">
                No hay productos con esos filtros.
              </p>
              <button
                onClick={limpiar}
                className="mt-4 rounded-full bg-black px-5 py-2 text-sm font-medium text-white"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div
              className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${
                mostrar ? "xl:grid-cols-3" : "lg:grid-cols-3"
              }`}
            >
              {visibles.map((producto) => (
                <ProductCard key={producto.id} producto={producto} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}