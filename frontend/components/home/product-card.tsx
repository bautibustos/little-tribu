import Image, { StaticImageData } from "next/image";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  color: string;
  price: string;
  originalPrice?: string;
  image: string | StaticImageData;
  badge?: string;
}

export function ProductCard({
  name,
  category,
  color,
  price,
  originalPrice,
  image,
  badge,
}: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-4/5 rounded-[2rem] overflow-hidden bg-muted mb-6">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-all duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {badge && (
          <span
            className={`absolute top-6 left-6 px-3 py-1 rounded-sm text-[10px] font-black tracking-widest text-white ${
              badge === "OFERTA" ? "bg-red-500" : "bg-secondary"
            }`}
          >
            {badge}
          </span>
        )}
        <button className="absolute bottom-6 right-6 z-10 bg-white p-4 rounded-2xl shadow-xl translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary hover:text-white border-none cursor-pointer">
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-1 px-2">
        <h3 className="font-bold text-xl text-secondary">{name}</h3>
        <p className="text-sm font-medium text-muted-foreground">
          {category} • {color}
        </p>
        <div className="flex items-center gap-3 pt-2">
          <span className="text-2xl font-black text-primary">{price}</span>
          {originalPrice && (
            <span className="text-lg font-medium text-muted-foreground/50 line-through">
              {originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
