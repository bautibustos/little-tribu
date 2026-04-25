export interface Product {
  slug_product: string
  name_product: string
  img: string
  description: string
  precio: number
}

export interface CartItem {
  product: Product
  quantity: number
}