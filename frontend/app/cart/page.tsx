"use client";

import { useState } from "react";
import { CartItem } from "@/interfaces/Product";

const initialCart: CartItem[] = [
  {
    product: {
      slug_product: 1,
      name_product: "Remera básica blanca",
      precio: 21000,
      img: "/images/products/remera-blanca-mobile.webp",
      description: "Remera 100% algodón, corte oversize. Disponible en todos los talles.",
    },
    quantity: 2,
  },
  {
    product: {
      slug_product: 2,
      name_product: "Baggy Jeans",
      precio: 70000,
      img: "/images/products/jeans-mobile.webp",
      description: "Baggy jeans de corte relajado, cómodos y con estilo.",
    },
    quantity: 1,
  },
];

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  const total = cart.reduce((acc, item) => acc + item.product.precio * item.quantity, 0);

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.product.slug_product !== id));
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#1a1a1a] mb-8">Carrito de compras</h1>

      {cart.length === 0 ? (
        <p className="text-[#6c757d]">Tu carrito está vacío.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div key={item.product.slug_product} className="flex justify-between items-center border-b pb-4">
              <div className="flex items-center gap-4">
                <img src={item.product.img} alt={item.product.name_product} className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <p className="font-medium text-[#1a1a1a]">{item.product.name_product}</p>
                  <small className="text-[#6c757d]">Cantidad: {item.quantity}</small>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-[#1a1a1a]">${(item.product.precio * item.quantity).toLocaleString("es-AR")}</span>
                <button
                  onClick={() => removeItem(item.product.slug_product)}
                  className="text-[#d90429] hover:underline text-sm"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-[#1a1a1a]">Total</span>
            <span className="text-xl font-bold text-[#ff4d6d]">${total.toLocaleString()}</span>
          </div>

          <button className="mt-6 bg-[#ff4d6d] hover:bg-[#e63956] text-white font-medium py-3 px-6 rounded-lg transition-colors">
            Finalizar compra
          </button>
        </div>
      )}
    </main>
  );
}