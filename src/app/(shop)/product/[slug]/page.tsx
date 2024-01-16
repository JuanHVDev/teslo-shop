export const revalidate = 604800

import { getProductBySlug } from "@/actions";
import { QuantitySelector, SizeSelector, ProductSlideShow, ProductMobileSlideShow, StockLabel } from "@/components";
import { titleFont } from "@/config/font";
import { initialData } from "@/seed/seed";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

interface Props
{
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata>
{
  // read route params
  const slug = params.slug

  // fetch data
  const product = await getProductBySlug(slug)

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: product?.title ?? "Producto no encontrado",
    description: product?.description ?? "",
    images: [`/products/${product?.images[1]}`],

  }
}

export default async function SlugPage({ params }: Props)
{
  const { slug } = params
  const product = await getProductBySlug(slug)
  if (!product)
  {
    notFound()
  }
  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2">
        {/* Mobile */}
        <ProductMobileSlideShow title={product.title} images={product.images} className="block md:hidden" />

        {/* Desktop Slideshow */}
        <ProductSlideShow title={product.title} images={product.images} className="hidden md:block" />
      </div>
      {/* Detalles */}
      <div className="col-span-1 px-5">
        <StockLabel slug={product.slug} />
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="mb-5 text-5xl">${product.price}</p>
        {/* Selector de talla */}
        <SizeSelector selectorSize={product.sizes[0]} availableSize={product.sizes} />
        {/* Selector de Cantidad */}
        <QuantitySelector quantity={2} />

        <button className="btn-primary my-5">Agregar al carrito</button>

        <h3 className="font-bold text-sm">
          Descripción del Producto
        </h3>
        <p className="font-light">
          {product.description}
        </p>
      </div>
    </div>
  );
}