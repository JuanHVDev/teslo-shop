import { getPaginatedProductsWithImages } from '@/actions'
import { Pagination, Title } from '@/components'
import ProductGrid from '@/components/products/product-grid/ProductGrid'
import { redirect } from 'next/navigation'
// import { initialData } from '@/seed/seed'
// const products = initialData.products

export const revalidate = 60
interface Props
{
  searchParams: {
    page?: string
  }
}
export default async function Home({ searchParams }: Props)
{
  const page = searchParams.page ? parseInt(searchParams.page) : 1
  const { products, totalPages, currentPage, } = await getPaginatedProductsWithImages({ page })
  if (products.length === 0)
  {
    redirect('/')
  }
  return (
    <>
      <Title title='Tienda' subtitle='Todos los productos' className='mb-2' />

      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  )
}
