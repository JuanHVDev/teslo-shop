import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, Title } from "@/components";
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import { titleFont } from "@/config/font";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { Gender } from "@prisma/client";
import { notFound } from "next/navigation";

export const revalidate = 60

interface Props
{
  params: {
    gender: string
  },
  searchParams: {
    page?: string
  }
}

export default async function GenderPage({ params, searchParams }: Props)
{
  const { gender } = params
  const page = searchParams.page ? parseInt(searchParams.page) : 1
  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page, gender: gender as Gender })


  // const products = initialData.products.filter(product => product.gender === gender)

  const labels: Record<string, string> = {
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
      <Title title={`Articulos de ${labels[gender]}`} className="mb-2" subtitle="Todos los productos" />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}