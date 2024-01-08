"use client"
import { titleFont } from '@/config/font'
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5'
import Link from 'next/link'
import { useUIStore } from '@/store'

export const TopMenu = () =>
{
  const openSideMenu = useUIStore(state => state.openSideMenu)
  return (
    <nav className='flex px-5 justify-between items-center w-full'>
      {/* Logo */}
      <div>
        <Link href='/'>
          <span className={`${titleFont.className}`}>Teslo</span>
          <span> | Shop</span>
        </Link>
      </div>
      {/* Center Munu */}
      <div className='hidden sm:block'>
        <Link href='/category/men' className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>Hombres</Link>
        <Link href='/category/women' className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>Mujeres</Link>
        <Link href='/category/kid' className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>Niños</Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className='flex items-center'>
        <Link href='/search' className='mx-2'>
          <IoSearchOutline className='w-5 h-5' />
        </Link>
        <Link href='/cart' className='mx-2'>
          <div className="relative">
            <span className='absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white'>3</span>
            <IoCartOutline className='w-5 h-5' />
          </div>
        </Link>
        <button onClick={() => openSideMenu()} className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>Menu</button>
      </div>
    </nav >
  )
}
