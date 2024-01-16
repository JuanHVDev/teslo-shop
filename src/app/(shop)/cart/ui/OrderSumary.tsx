"use client"

import { useCartStore } from '@/store';
import React, { useEffect } from 'react'
import { useState } from 'react';

function OrderSumary()
{
  const [loaded, setLoaded] = useState(false)
  const {
    subTotal,
    tax,
    total,
    itemsInCart, } = useCartStore(state => state.getSummaryInformation())
  useEffect(() =>
  {

    setLoaded(true)
  }, [])
  if (!loaded) return <p>Loading...</p>
  return (
    <div className="grid grid-cols-2">
      <span>No. Productos</span>
      <span className="text-right">{itemsInCart === 1 ? '1 Articulo' : `${itemsInCart} articulos`}</span>
      <span>Subtotal</span>
      <span className="text-right">{subTotal.toLocaleString("es-MX", { style: 'currency', currency: 'MXN' })}</span>
      <span>Impuestos(15%)</span>
      <span className="text-right">{tax.toLocaleString("es-MX", { style: 'currency', currency: 'MXN' })}</span>
      <span className="text-2xl mt-5">Total:</span>
      <span className="mt-5 text-2xl">{total.toLocaleString("es-MX", { style: 'currency', currency: 'MXN' })}</span>
    </div>
  )
}

export default OrderSumary