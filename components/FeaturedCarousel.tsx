"use client";

import { useState } from "react";
import { productos } from "@/data/products";

export default function FeaturedCarousel() {
  const destacados = productos.filter(
    (producto) => producto.destacado
  );

  const [actual, setActual] = useState(0);

  if (destacados.length === 0) {
    return null;
  }

  const producto = destacados[actual];

  const siguiente = () => {
    setActual((actual + 1) % destacados.length);
  };

  const anterior = () => {
    setActual(
      (actual - 1 + destacados.length) % destacados.length
    );
  };

  return (
    <section className="mb-12">
      
      {/* Título */}
      <div className="mb-5">
        <h2 className="text-3xl font-bold text-gray-900">
          Destacados
        </h2>

        <p className="mt-1 text-gray-600">
          Descubre nuestros productos destacados
        </p>
      </div>

      {/* Carrusel */}
      <div className="relative overflow-hidden rounded-3xl bg-black text-white">
        
        <div className="grid min-h-[350px] md:grid-cols-2">

          {/* Imagen temporal */}
          <div className="flex items-center justify-center bg-gray-900">
            <span className="text-8xl">
              ⌚
            </span>
          </div>

          {/* Información */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            
            <span className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Producto destacado
            </span>

            <h3 className="text-3xl font-bold md:text-4xl">
              {producto.nombre}
            </h3>

            <p className="mt-4 text-gray-300">
              {producto.descripcion}
            </p>

            <p className="mt-6 text-3xl font-bold">
              S/ {producto.precio.toFixed(2)}
            </p>

            <button className="mt-6 w-fit rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200">
              Ver producto
            </button>

          </div>
        </div>

        {/* Botón anterior */}
        <button
          onClick={anterior}
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-2xl backdrop-blur transition hover:bg-white/40"
          aria-label="Producto anterior"
        >
          ‹
        </button>

        {/* Botón siguiente */}
        <button
          onClick={siguiente}
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-2xl backdrop-blur transition hover:bg-white/40"
          aria-label="Producto siguiente"
        >
          ›
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {destacados.map((_, index) => (
            <button
              key={index}
              onClick={() => setActual(index)}
              className={`h-2 rounded-full transition-all ${
                index === actual
                  ? "w-6 bg-white"
                  : "w-2 bg-white/40"
              }`}
              aria-label={`Ir al producto ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}