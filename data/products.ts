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
    nombre: "Casio Edifice EFV-160D",
    categoria: "Relojes",
    marca: "Casio",
    linea: "Edifice",
    precio: 439,
    precioAnterior: 159,
    imagen: "/productos/casio-edifice-efv-160d.jpg",
    descripcion: "Diseño elegante y deportivo .",
    destacado: true,
    oferta: false,
  },

  {
    id: 2,
    nombre: "Casio Edifice EFV-620D-1A2V",
    categoria: "Relojes",
    marca: "Casio",
    linea: "Edifice",
    precio: 429,
    precioAnterior: 465,
    imagen: "/productos/casio-edifice-ef-620d-a.webp",
    descripcion: "Reloj moderno con diseño deportivo.",
    destacado: true,
    oferta: true,
  },

  {
    id: 3,
    nombre: "Pro driver Automatico ",
    categoria: "Relojes",
    marca: "Invicta",
    linea: "Pro Diver",
    precio: 439,
    precioAnterior: 250,
    imagen: "/productos/invicta-auto-nedor.jpg",
    descripcion: "Diseño elegante y sofisticado.",
    destacado: true,
    oferta: false,
  },

  {
    id: 4,
    nombre: "Tommy Hilfiger Puffer Jacket",
    categoria: "Casacas",
    marca: "Tommy Hilfiger",
    precio: 369,
    precioAnterior: 390,
    imagen: "/productos/casaca-tomy.jpg",
    descripcion: "Casaca cómoda para uso diario.",
    destacado: true,
    oferta: true,
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
    imagen: "/productos/billete-tomy.webp",
    descripcion: "Billetera clásica y resistente.",
    destacado: false,
    oferta: true,
  },
  {
    id: 7,
    nombre: "Marlin MDV-106",
    categoria: "Relojes",
    marca: "Casio",
    linea: "Marlin",
    precio: 429,
    precioAnterior: 159,
    imagen: "/productos/casio-marlin-mdv106.jpg",
    descripcion: "Reloj elegante para uso diario.",
    destacado: true,
    oferta: false,  
  },
];