import Image from "next/image";

const productos: Record<string, { name_product: string; description: string; precio: number; imgDesktop: string; imgMobile: string }> = {
  "remera-blanca": {
    name_product: "Remera básica blanca",
    description: "Remera 100% algodón, corte oversize. Disponible en todos los talles.",
    precio: 20000,
    imgDesktop: "/images/products/remera-blanca-desktop.webp",
    imgMobile: "/images/products/remera-blanca-mobile.webp",
  },
  "remera-negra": {
    name_product: "Remera básica negra",
    description: "Remera 100% algodón, corte oversize. Disponible en todos los talles.",
    precio: 20000,
    imgDesktop: "/images/products/remera-negra-desktop.webp",
    imgMobile: "/images/products/remera-negra-mobile.webp",
  },
  "hoodie": {
    name_product: "Hoodie Daisies",
    description: "Hoodie Daisies 100% algodón, ideal para los días frescos.",
    precio: 55000,
    imgDesktop: "/images/products/hoodie-desktop.webp",
    imgMobile: "/images/products/hoodie-mobile.webp",
  },
  "jeans": {
    name_product: "Baggy Jeans",
    description: "Baggy jeans de corte relajado, cómodos y con estilo.",
    precio: 70000,
    imgDesktop: "/images/products/jeans-desktop.webp",
    imgMobile: "/images/products/jeans-mobile.webp",
  },
  "camisa": {
    name_product: "Camisa Swag",
    description: "Camisa Swag 100% algodón, perfecta para cualquier ocasión.",
    precio: 57000,
    imgDesktop: "/images/products/camisa-desktop.webp",
    imgMobile: "/images/products/camisa-mobile.webp",
  },
  "pollera": {
    name_product: "Pollera Venecia",
    description: "Pollera Venecia, liviana y elegante para el día a día.",
    precio: 40000,
    imgDesktop: "/images/products/pollera-desktop.webp",
    imgMobile: "/images/products/pollera-mobile.webp",
  },
  "sweater": {
    name_product: "Sweater Rania",
    description: "Sweater Rania, abrigado y suave, ideal para el invierno.",
    precio: 50000,
    imgDesktop: "/images/products/sweater-desktop.webp",
    imgMobile: "/images/products/sweater-mobile.webp",
  },
  "vestido": {
    name_product: "Vestido Roma",
    description: "Vestido Roma, corte fluido y femenino para cualquier ocasión.",
    precio: 62000,
    imgDesktop: "/images/products/vestido-desktop.webp",
    imgMobile: "/images/products/vestido-mobile.webp",
  },
};

export default async function ProductDetail({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const product = productos[slug];

  if (!product) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-10">
        <p className="text-[#6c757d]">Producto no encontrado.</p>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-10">

        {/* Imagen */}
        <div className="w-full md:w-1/2">
          <Image
            src={product.imgMobile}
            alt={product.name_product}
            width={400}
            height={400}
            className="w-full rounded-xl object-cover md:hidden"
          />
          <Image
            src={product.imgDesktop}
            alt={product.name_product}
            width={600}
            height={600}
            className="w-full rounded-xl object-cover hidden md:block"
          />
        </div>

        {/* Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-[#1a1a1a]">{product.name_product}</h1>
          <p className="text-[#6c757d]">{product.description}</p>
          <span className="text-2xl font-semibold text-[#ff4d6d]">${product.precio.toLocaleString("es-AR")}</span>
          <button className="bg-[#ff4d6d] hover:bg-[#e63956] text-white font-medium py-3 px-6 rounded-lg transition-colors">
            Agregar al carrito
          </button>
        </div>

      </div>
    </main>
  );
}