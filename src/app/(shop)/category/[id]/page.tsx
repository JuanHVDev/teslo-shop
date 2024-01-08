import { Title } from "@/components";
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import { titleFont } from "@/config/font";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props
{
  params: {
    id: Category
  }
}

export default function ({ params }: Props)
{
  const { id } = params

  const products = initialData.products.filter(product => product.gender === id)

  const labels: Record<Category, string> = {
    'men': "Hombres",
    'women': "Mujeres",
    'kid': "Niños",
    "unisex": 'Para todos'
  }
  // if(id === 'kids'){
  //   notFound()
  // }

  return (
    <div>
      <Title title={`Articulos de ${labels[id]}`} className="mb-2" subtitle="Todos los productos" />
      <ProductGrid products={products} />
    </div>
  );
}