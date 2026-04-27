"use client";

import { useState } from "react";

export default function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Checkout con:", name, email, address);
    // acá después conectamos con ARCA (Bauti)
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fff0f3]">
      <div className="bg-white rounded-2xl shadow-sm border border-[#eee] p-10 w-full max-w-md">

        {/* Título */}
        <h1 className="text-3xl font-black tracking-tighter text-[#1a1a1a] mb-2">
          Finalizar compra
        </h1>
        <p className="text-[#6c757d] text-sm mb-8">
          Completá tus datos para continuar con el pago
        </p>

        {/* Formulario */}
        <div className="flex flex-col gap-5">

          {/* Nombre */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#1a1a1a]">Nombre completo</label>
            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-[#eee] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff4d6d]/30 focus:border-[#ff4d6d] transition-all"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#1a1a1a]">Email</label>
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-[#eee] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff4d6d]/30 focus:border-[#ff4d6d] transition-all"
            />
          </div>

          {/* Dirección */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#1a1a1a]">Dirección</label>
            <input
              type="text"
              placeholder="Calle, número, ciudad"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border border-[#eee] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff4d6d]/30 focus:border-[#ff4d6d] transition-all"
            />
          </div>

          {/* Botón */}
          <button
            onClick={handleSubmit}
            className="bg-[#ff4d6d] hover:bg-[#e63956] text-white font-medium py-3 px-6 rounded-lg transition-colors mt-2"
          >
            Pagar con ARCA
          </button>

        </div>

      </div>
    </main>
  );
}