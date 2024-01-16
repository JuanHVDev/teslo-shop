import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ProductsInCart } from "./ui/ProductsInCart";
import OrderSumary from "./ui/OrderSumary";
export default function CartPage()
{

  // redirect('/empty')

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar más Items</span>
            <Link className="underline mb-5" href={'/'}>Continua comprando</Link>
            <ProductsInCart />

          </div>
          {/* Checkout o suma */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <OrderSumary />
            <div className="mt-5 mb-2 w-full">
              <Link className="flex btn-primary justify-center" href='/checkout/address'>
                Checkout
              </Link>
              O</div>
          </div>
        </div>
      </div>
    </div>
  );
}