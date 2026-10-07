export type Producto = {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  precioAnterior?: number;
  imagen: string;
  descripcion: string;
  destacado: boolean;
  oferta: boolean;
};

export const productos: Producto[] = [
  {
    id: 1,
    nombre: "Reloj Clásico",
    categoria: "Relojes",
    precio: 129,
    precioAnterior: 159,
    imagen: "/productos/reloj-clasico.jpg",
    descripcion: "Reloj elegante para uso diario.",
    destacado: true,
    oferta: true,
  },

  {
    id: 2,
    nombre: "Reloj Deportivo",
    categoria: "Relojes",
    precio: 159,
    precioAnterior: 190,
    imagen: "/productos/reloj-deportivo.jpg",
    descripcion: "Reloj moderno con diseño deportivo.",
    destacado: true,
    oferta: true,
  },

  {
    id: 3,
    nombre: "Reloj Premium",
    categoria: "Relojes",
    precio: 199,
    precioAnterior: 250,
    imagen: "/productos/reloj-premium.jpg",
    descripcion: "Diseño elegante y sofisticado.",
    destacado: true,
    oferta: true,
  },

  {
    id: 4,
    nombre: "Casaca Urbana",
    categoria: "Casacas",
    precio: 119,
    imagen: "/productos/casaca-urbana.jpg",
    descripcion: "Casaca cómoda para uso diario.",
    destacado: true,
    oferta: false,
  },

  {
    id: 5,
    nombre: "Polo Básico",
    categoria: "Polos",
    precio: 49,
    imagen: "/productos/polo-basico.jpg",
    descripcion: "Polo básico y cómodo.",
    destacado: false,
    oferta: false,
  },

  {
    id: 6,
    nombre: "Billetera Clásica",
    categoria: "Billeteras",
    precio: 59,
    precioAnterior: 120,
    imagen: "/productos/billetera-clasica.jpg",
    descripcion: "Billetera clásica y resistente.",
    destacado: false,
    oferta: true,
  },
];