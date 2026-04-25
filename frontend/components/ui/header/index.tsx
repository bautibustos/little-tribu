"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import useScrollListener from "@/hooks/useScrollListener";

export interface HeaderContextType {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const HeaderContext = React.createContext<HeaderContextType | null>(
  null,
);

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
  openMenu?: boolean;
  onMenuChange?: (status: boolean) => void;
}

function HeaderRoot({
  children,
  className,
  onMenuChange,
  openMenu,
  ...props
}: RootProps) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [headerClass, setHeaderClass] = React.useState<string[]>([]);
  const scroll = useScrollListener();

  React.useEffect(() => {
    const class_list = [];

    if (scroll.y > 200 && scroll.y - scroll.lastY > 0) {
      class_list.push("translate-y-[-100%]");
    }

    if (scroll.y > 145) {
      class_list.push("header__scroll");
    }

    setHeaderClass(class_list);
  }, [scroll.y, scroll.lastY]);

  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    onMenuChange && onMenuChange(menuOpen);
  }, [menuOpen, onMenuChange]);

  React.useEffect(() => {
    setMenuOpen(openMenu as boolean);
  }, [openMenu]);

  return (
    <HeaderContext.Provider value={{ menuOpen, setMenuOpen }}>
      <header
        className={cn(
          "sticky top-0 z-100 transition-all duration-500 ease",
          headerClass.join(" "),
          className,
        )}
        {...props}
      >
        {children}
      </header>
    </HeaderContext.Provider>
  );
}

function HeaderContainer({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex", className)} {...props}>
      {children}
    </div>
  );
}

export interface LogoProps {
  children?: React.ReactNode;
  className?: string;
}

function HeaderLogo({ children, className, ...props }: LogoProps) {
  return (
    <Link href="/" className={cn("mr-auto", className)} {...props}>
      {children}
    </Link>
  );
}

export interface NavProps {
  children?: React.ReactNode;
  className?: string;
}

function HeaderNav({ children, className, ...props }: NavProps) {
  return (
    <nav
      className={cn("hidden lg:flex items-center gap-4", className)}
      {...props}
    >
      {children}
    </nav>
  );
}

export interface MenuButtonProps {
  children?: React.ReactNode;
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  size?: number;
}

function HeaderMenuButton({
  children,
  className,
  size,
  onClick,
  ...props
}: MenuButtonProps) {
  const { setMenuOpen, menuOpen } = React.useContext(
    HeaderContext,
  ) as HeaderContextType;

  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setMenuOpen(!menuOpen);
    if (onClick) onClick(evt);
  };

  return (
    <button
      aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
      className={cn("lg:hidden text-secondary", className)}
      {...props}
      onClick={handleClick}
    >
      {children || menuOpen ? <XIcon size={size} /> : <MenuIcon size={size} />}
    </button>
  );
}

export interface MenuProps {
  children?: React.ReactNode;
  className?: string;
}

function HeaderMenu({ children, className, ...props }: MenuProps) {
  const { menuOpen } = React.useContext(HeaderContext) as HeaderContextType;

  if (menuOpen)
    return (
      <div
        className={cn(
          "h-screen w-screen bg-white flex flex-col items-center fixed inset-0 z-menu-index py-24",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  else return null;
}

interface MenuLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement>, LinkProps {}

function HeaderMenuLink({ onClick, children, ...props }: MenuLinkProps) {
  const { setMenuOpen, menuOpen } = React.useContext(
    HeaderContext,
  ) as HeaderContextType;

  const handleClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(!menuOpen);
    if (onClick) onClick(evt);
  };
  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}

export {
  HeaderRoot,
  HeaderContainer,
  HeaderLogo,
  HeaderNav,
  HeaderMenuButton,
  HeaderMenu,
  HeaderMenuLink,
};
