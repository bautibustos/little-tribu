import Link from "next/link";
import { Sparkles, Shirt, Footprints, Tag, Percent } from "lucide-react";

const CATEGORIES = [
  { name: "Novedades", icon: Sparkles, active: true },
  { name: "Indumentaria", icon: Shirt },
  { name: "Calzado", icon: Footprints },
  { name: "Accesorios", icon: Tag },
  { name: "Ofertas", icon: Percent },
];

export function ProductSidebar() {
  return (
    <aside className="lg:col-span-3 space-y-10">
      <div className="bg-sidebar p-8 rounded-2xl border border-card-border space-y-8">
        <div>
          <h3 className="text-xl font-bold text-secondary mb-2">Categorías</h3>
          <p className="text-xs text-muted-foreground font-medium mb-8">
            Selección Premium
          </p>

          <nav className="flex flex-col gap-1">
            {CATEGORIES.map((item) => (
              <Link
                key={item.name}
                href={`/category/${item.name.toLowerCase()}`}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-xs transition-all ${
                  item.active
                    ? "bg-white text-primary shadow-sm border-r-4 border-primary"
                    : "text-muted-foreground hover:bg-white/50 hover:text-secondary"
                }`}
              >
                <item.icon
                  className={`w-4 h-4 ${item.active ? "text-primary" : "text-muted-foreground"}`}
                />
                <span className="uppercase tracking-wider">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
