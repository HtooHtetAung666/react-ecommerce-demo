import React from 'react'
import { PRODUCTS } from '../Products'
import { Product } from '../components/Product'

export const Shop = () => {
  return (
    <div className='w-full min-h-screen p-8 lg:p-20'>
      <h1 className='text-center text-3xl font-bold text-slate-800 mt-6'>Product Lists</h1>
      <div className='grid gap-10 md:gap-14 p-10 mt-5 md:grid-cols-2 md:p-14 lg:grid-cols-3 lg:p-24 lg:max-w-7xl lg:mx-auto'>
        {
          PRODUCTS.map((product)=>(
            <Product data={product} key={product.id} />
          ))
        }
      </div>
    </div>
  )
}
