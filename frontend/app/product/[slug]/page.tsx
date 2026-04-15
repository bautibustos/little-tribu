export default function ProductDetail({ params: { slug } }: { params: { slug: string } }) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-10">

        {/* Imagen */}
        <div className="w-full md:w-1/2">
          <img
            src="/next.svg"
            alt="producto"
            className="w-full rounded-xl object-cover"
          />
        </div>

        {/* Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-[#1a1a1a]">Nombre del producto</h1>
          <p className="text-[#6c757d]">Descripción del producto. Acá va el detalle ampliado.</p>
          <span className="text-2xl font-semibold text-[#ff4d6d]">$999</span>
          <button className="bg-[#ff4d6d] hover:bg-[#e63956] text-white font-medium py-3 px-6 rounded-lg transition-colors">
            Agregar al carrito
          </button>
        </div>

      </div>
    </main>
  );
}