"use client"

import { QuantitySelector } from "@/components"
import { useCartStore } from "@/store"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"



export const ProductsInCart = () =>
{
  const removeProduct = useCartStore(state => state.removeProduct)
  const updateProductQuantity = useCartStore(state => state.updateProductQuantity)
  const productsInCart = useCartStore(state => state.cart)
  const [loaded, setLoaded] = useState(false)
  useEffect(() =>
  {
    setLoaded(true)
  }, [])
  if (!loaded)
  {
    return <p>Loading</p>
  }
  return (
    <>
      {/* Items */}
      {
        productsInCart.map(product => (
          <div className="flex mb-5" key={`${product.slug}-${product.size}`}>
            <Image src={`/products/${product.image}`} alt={product.title} width={100} height={100} className="mr-5 rounded" />
            <div>
              <Link href={`/product/${product.slug}`} className="hover:underline cursor-pointer">
                <p>{product.title}</p>
                <p>Size: {product.size}</p>
              </Link>
              <p>${product.price}</p>
              <QuantitySelector quantity={product.quantity} onQuantityChange={(value) => updateProductQuantity(product, value)} />
              <button onClick={() => removeProduct(product)} className="underline mt-3">Remover</button>
            </div>
          </div>
        ))
      }
    </>
  )
}
