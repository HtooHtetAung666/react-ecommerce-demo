import React, { useContext } from 'react'
import { PRODUCTS } from '../Products'
import { CartItems } from '../components/CartItems'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const { cartItems, totalCartAmount } = useContext(ShopContext);

  const totalAmount = totalCartAmount();

  const navigate = useNavigate();

  return (
    <div className='p-8 lg:p-20'>
      <h1 className='text-center text-3xl font-bold text-white mt-6'>Cart Items</h1>
      {
        totalAmount > 0 ?
        <div>
          <div className='mt-24'>
            {PRODUCTS.map((product)=>{
              if(cartItems[product.id] !== 0) {
                return <CartItems data={product} />
              }
            })}
          </div>
          <p className='text-center text-white text-lg'>Total Amount ${totalAmount}</p>
          <div className='mt-5 flex items-center justify-center text-white'>
            <div className='space-x-4'>
              <button 
                onClick={()=>navigate("/")}
                className='bg-fuchsia-400 p-2 rounded-xl hover:bg-fuchsia-300'
              >
                Continue Shopping
              </button>
              <button className='bg-fuchsia-400 p-2 rounded-xl hover:bg-fuchsia-300'>Checkout</button>
            </div>
          </div>  
        </div>
        : <h1 className='mt-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 to-fuchsia-200 text-lg'>Your Cart is empty</h1>
      }
    </div>
  )
}
