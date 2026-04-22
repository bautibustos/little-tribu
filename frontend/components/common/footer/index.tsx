import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-card-border pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tighter text-secondary">
              StyleShop
            </h3>
            <p className="text-sm font-medium text-muted-foreground leading-relaxed">
              © 2026 StyleShop Premium Retail. Todos los derechos reservados.
              Definiendo el estándar del comercio digital contemporáneo.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-secondary mb-6">
              Compras
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/catalog"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Catálogo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-secondary mb-6">
              Soporte
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terms"
              className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              Términos de Servicio
            </Link>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
            Diseñado para la Excelencia
          </p>
        </div>
      </div>
    </footer>
  );
}
