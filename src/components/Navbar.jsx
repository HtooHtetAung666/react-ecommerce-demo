import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { DiReact } from "react-icons/di";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (    
    <nav className='w-full h-full flex items-center justify-between p-2 lg:p-3 bg-gray-800 border-b-4 border-fuchsia-800 sticky top-0'>
        <div className='pl-2 md:pl-8'>
            <DiReact className='w-16 h-16 text-fuchsia-900' />
        </div>
        <div className='flex items-center space-x-5 mr-5 md:mr-10'>
            <Link to="/">
                <h1 className='text-lg font-bold text-white hover:text-fuchsia-300'>Shop</h1>
            </Link>
            <Link to="/cart">
                <AiOutlineShoppingCart className='w-6 h-6 text-white hover:text-fuchsia-300'/>
            </Link>
        </div>
    </nav>
  )
}
