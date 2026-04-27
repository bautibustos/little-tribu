"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const validate = () => {
    const newErrors = { name: "", email: "", password: "" };
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

    if (!password) {
      newErrors.password = "La contraseña es obligatoria";
      valid = false;
    } else if (password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Registro con:", name, email, password);
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

          {/* Contraseña */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#1a1a1a]">Contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all
                  ${errors.password
                    ? "border-[#d90429] focus:ring-[#d90429]/30"
                    : "border-[#eee] focus:ring-[#ff4d6d]/30 focus:border-[#ff4d6d]"
                  }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6c757d] hover:text-[#1a1a1a] transition-colors"
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
            {errors.password && (
              <span className="text-[#d90429] text-xs">{errors.password}</span>
            )}
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