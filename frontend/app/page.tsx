"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import productCoat from "@/assets/product_coat.png";
import productTop from "@/assets/product_top.png";
import productShoes from "@/assets/product_shoes.png";
import { HeroSection } from "@/components/home/hero-section";
import { ProductSidebar } from "@/components/home/product-sidebar";
import { ProductCard } from "@/components/home/product-card";

const PRODUCTS = [
  {
    id: 1,
    name: "Sobretodo de Lana Técnica",
    category: "Abrigos",
    color: "Gris Pizarra",
    price: "$349.00",
    image: productCoat,
    badge: "NUEVO",
  },
  {
    id: 2,
    name: "Top de Punto Performance",
    category: "Ropa Deportiva",
    color: "Negro Onice",
    price: "$89.00",
    image: productTop,
  },
  {
    id: 3,
    name: "Zapatillas Velocity Runner Pro",
    category: "Calzado",
    color: "Rojo Eléctrico",
    price: "$129.00",
    originalPrice: "$180.00",
    image: productShoes,
    badge: "OFERTA",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-24 bg-white">
      <HeroSection />

      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
        <ProductSidebar />

        <main className="lg:col-span-9 gap-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div className="gap-1">
              <h2 className="text-4xl font-bold text-secondary tracking-tight">
                Productos Destacados
              </h2>
              <p className="text-muted-foreground font-medium">
                Artículos seleccionados de nuestros socios creativos globales.
              </p>
            </div>
            <Link
              href="/shop"
              className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 group"
            >
              Ver todas las colecciones{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
