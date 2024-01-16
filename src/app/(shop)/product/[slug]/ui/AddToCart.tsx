"use client"

import { QuantitySelector, SizeSelector } from '@/components'
import { CartProduct, Product } from '@/interfaces'
import React, { useState } from 'react'
import { Size } from '@/interfaces/index';
import { useCartStore } from '@/store';


interface Props
{
  product: Product
}


export const AddToCart = ({ product }: Props) =>
{
  const addProductToCart = useCartStore(state => state.addProductToCart)
  const [size, setSize] = useState<Size | undefined>()
  const [quantity, setQuantity] = useState<number>(1)
  const [posted, setPosted] = useState(false)
  const addToCart = () =>
  {
    setPosted(true)
    if (!size) return
    const cartProduct: CartProduct = {
      id: product.id,
      quantity,
      size,
      image: product.images[0],
      price: product.price,
      slug: product.slug,
      title: product.title
    }
    addProductToCart(cartProduct)
    setPosted(false)
    setQuantity(1)
    setSize(undefined)

  }

  return (
    <>
      {
        posted && !size && (
          <span className='text-red-500 mt-2 fade-in'>Debe de seleccionar una talla</span>
        )
      }

      {/* Selector de talla */}
      <SizeSelector selectorSize={size} availableSize={product.sizes} onSizeChange={setSize} />
      {/* Selector de Cantidad */}
      <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />

      <button onClick={addToCart} className="btn-primary my-5">Agregar al carrito</button>

    </>
  )
}
