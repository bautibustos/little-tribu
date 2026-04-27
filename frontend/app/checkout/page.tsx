"use client";

import { useState } from "react";

export default function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", address: "" });

  const validate = () => {
    const newErrors = { name: "", email: "", address: "" };
    let valid = true;

    if (!name) {
      newErrors.name = "El nombre es obligatorio";
      valid = false;
    }

    if (!email) {
      newErrors.email = "El email es obligatorio";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "El email no es válido";
      valid = false;
    }

    if (!address) {
      newErrors.address = "La dirección es obligatoria";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Checkout con:", name, email, address);
    // acá después conectamos con ARCA
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
              className={`border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all
                ${errors.name
                  ? "border-[#d90429] focus:ring-[#d90429]/30"
                  : "border-[#eee] focus:ring-[#ff4d6d]/30 focus:border-[#ff4d6d]"
                }`}
            />
            {errors.name && (
              <span className="text-[#d90429] text-xs">{errors.name}</span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#1a1a1a]">Email</label>
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all
                ${errors.email
                  ? "border-[#d90429] focus:ring-[#d90429]/30"
                  : "border-[#eee] focus:ring-[#ff4d6d]/30 focus:border-[#ff4d6d]"
                }`}
            />
            {errors.email && (
              <span className="text-[#d90429] text-xs">{errors.email}</span>
            )}
          </div>

          {/* Dirección */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#1a1a1a]">Dirección</label>
            <input
              type="text"
              placeholder="Calle, número, ciudad"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all
                ${errors.address
                  ? "border-[#d90429] focus:ring-[#d90429]/30"
                  : "border-[#eee] focus:ring-[#ff4d6d]/30 focus:border-[#ff4d6d]"
                }`}
            />
            {errors.address && (
              <span className="text-[#d90429] text-xs">{errors.address}</span>
            )}
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