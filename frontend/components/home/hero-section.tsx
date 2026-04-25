import Image from "next/image";
import Link from "next/link";
import heroBg from "@/assets/hero_bg.png";

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center py-6 aspect-auto md:aspect-video overflow-hidden mx-4 mt-4 rounded-[2rem] container">
      <Image
        src={heroBg}
        alt="Nueva Colección Fondo Abstracto"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 1280px) 100vw, 1280px"
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="container relative z-10 flex flex-col items-center text-center text-white">
        <span className="bg-primary px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest mb-6">
          Verano 2026
        </span>
        <h1 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-8 max-w-4xl text-shadow-lg">
          Nueva Colección
        </h1>
        <p className="text-lg md:text-xl font-medium max-w-lg mb-12 opacity-90 leading-relaxed">
          Descubre la fusión perfecta entre elegancia atemporal y funcionalidad
          moderna. Nuestra selección curada redefine el prestigio del comercio
          digital contemporáneo.
        </p>
        <div className="flex gap-4">
          <Link
            href="/shop"
            className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-md font-bold text-sm transition-smooth shadow-lg"
          >
            Comprar Ahora
          </Link>
          <Link
            href="/lookbook"
            className="glass hover:bg-white/20 text-white px-10 py-4 rounded-md font-bold text-sm transition-smooth border-white/40"
          >
            Ver Lookbook
          </Link>
        </div>
      </div>
    </section>
  );
}
