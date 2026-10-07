export type Producto = {
  id: number;
  nombre: string;
  categoria: string;   // Relojes, Casacas, Polos, Billeteras
  marca?: string;      // Casio, Invicta, Orient...
  linea?: string;      // Edifice, Marlin, Pro Diver...
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
    marca: "Casio",
    linea: "Edifice",
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
    marca: "Casio",
    linea: "Marlin",
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
    marca: "Invicta",
    linea: "Pro Diver",
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
    marca: "Columbia",
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
    marca: "Tommy Hilfiger",
    precio: 49,
    imagen: "/productos/polo-basico.jpg",
    descripcion: "Polo básico y cómodo.",
    destacado: false,
    oferta: false,
  },

  {
    id: 6,
    nombre: "Billetera Clásica",
    categoria: "Accesorios",
    marca: "Tommy Hilfiger",
    precio: 59,
    precioAnterior: 120,
    imagen: "/productos/billetera-clasica.jpg",
    descripcion: "Billetera clásica y resistente.",
    destacado: false,
    oferta: true,
  },
  {
    id: 7,
    nombre: "Reloj Marlin MDV-006",
    categoria: "Relojes",
    marca: "Casio",
    linea: "Marlin",
    precio: 129,
    precioAnterior: 159,
    imagen: "/productos/reloj-clasico.jpg",
    descripcion: "Reloj elegante para uso diario.",
    destacado: true,
    oferta: true,
  },
];