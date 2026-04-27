"use client";

import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registro con:", name, email, password);
    // acá después conectamos con el backend de Bauti
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fff0f3]">
      <div className="bg-white rounded-2xl shadow-sm border border-[#eee] p-10 w-full max-w-md">

        {/* Logo */}
        <h1 className="text-3xl font-black tracking-tighter text-[#1a1a1a] mb-2">
          StyleShop
        </h1>
        <p className="text-[#6c757d] text-sm mb-8">
          Creá tu cuenta para empezar a comprar
        </p>

        {/* Formulario */}
        <div className="flex flex-col gap-5">

          {/* Nombre */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#1a1a1a]">Nombre</label>
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

          {/* Contraseña */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#1a1a1a]">Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-[#eee] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff4d6d]/30 focus:border-[#ff4d6d] transition-all"
            />
          </div>

          {/* Botón */}
          <button
            onClick={handleSubmit}
            className="bg-[#ff4d6d] hover:bg-[#e63956] text-white font-medium py-3 px-6 rounded-lg transition-colors mt-2"
          >
            Registrarse
          </button>

        </div>

        {/* Link a login */}
        <p className="text-sm text-[#6c757d] text-center mt-6">
          ¿Ya tenés cuenta?{" "}
          <a href="/login" className="text-[#ff4d6d] font-medium hover:underline">
            Ingresá
          </a>
        </p>

      </div>
    </main>
  );
}