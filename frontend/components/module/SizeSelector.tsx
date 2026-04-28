"use client";

import { useState } from "react";

const SIZES = ["S", "M", "L", "XL"];

export default function SizeSelector() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-[#1a1a1a]">Talle</label>
      <div className="flex gap-2">
        {SIZES.map((size) => (
          <button
            key={size}
            onClick={() => setSelected(size)}
            className={`w-12 h-12 rounded-lg border text-sm font-medium transition-all
              ${selected === size
                ? "bg-[#ff4d6d] text-white border-[#ff4d6d]"
                : "bg-white text-[#1a1a1a] border-[#eee] hover:border-[#ff4d6d]"
              }`}
          >
            {size}
          </button>
        ))}
      </div>
      {!selected && (
        <span className="text-[#6c757d] text-xs">Seleccioná un talle</span>
      )}
    </div>
  );
}