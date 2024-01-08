import { Product } from "@/interfaces"
import { ProductGridItem } from "./ProductGridItem"

interface Props
{
  products: Product[]
}

const ProductGrid = ({ products }: Props) =>
{
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
      {products.map(producto => (
        <ProductGridItem key={producto.slug} product={producto} />
      ))}
    </div>
  )
}

export default ProductGrid