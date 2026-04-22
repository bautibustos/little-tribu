import {
  HeaderContainer,
  HeaderLogo,
  HeaderMenu,
  HeaderMenuButton,
  HeaderMenuLink,
  HeaderNav,
  HeaderRoot,
} from "../../ui/header";
import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <HeaderRoot className="bg-white border-b border-card-border sticky top-0 z-50">
      <HeaderContainer className="container flex items-center justify-between py-4 lg:py-6">
        <div className="flex items-center gap-12">
          <HeaderLogo className="shrink-0 flex items-center">
            <span className="text-3xl font-black tracking-tighter text-secondary">
              StyleShop
            </span>
          </HeaderLogo>

          <HeaderNav className="hidden lg:flex gap-8">
            <Link
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors hover:underline decoration-2 underline-offset-8"
              href="/"
            >
              Inicio
            </Link>
            <Link
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors hover:underline decoration-2 underline-offset-8"
              href="/catalog"
            >
              Catálogo
            </Link>
            <Link
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors hover:underline decoration-2 underline-offset-8"
              href="/trending"
            >
              Tendencias
            </Link>
            <Link
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors hover:underline decoration-2 underline-offset-8"
              href="/deals"
            >
              Ofertas
            </Link>
          </HeaderNav>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center bg-muted px-4 py-2 rounded-lg border border-card-border focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar estilos premium..."
              className="bg-transparent border-none focus:outline-none text-sm ml-2 w-48 lg:w-64"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-secondary hover:text-primary transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white translate-x-1 -translate-y-1">
                2
              </span>
            </button>
            <button className="p-2 text-secondary hover:text-primary transition-colors">
              <User className="w-6 h-6" />
            </button>
            <HeaderMenuButton size={28} className="lg:hidden" />
          </div>
        </div>

        <HeaderMenu className="items-start px-8 flex flex-col gap-6 text-secondary text-2xl overflow-y-auto pt-24">
          <HeaderMenuButton
            size={36}
            className="absolute top-6 right-8 text-4xl hover:rotate-90 transition-transform duration-300"
          />
          <HeaderMenuLink href="/">Inicio</HeaderMenuLink>
          <HeaderMenuLink href="/catalog">Catálogo</HeaderMenuLink>
          <HeaderMenuLink href="/trending">Tendencias</HeaderMenuLink>
          <HeaderMenuLink href="/deals">Ofertas</HeaderMenuLink>
        </HeaderMenu>
      </HeaderContainer>
    </HeaderRoot>
  );
}
