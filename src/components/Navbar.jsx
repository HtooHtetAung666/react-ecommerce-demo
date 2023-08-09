import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { DiReact } from "react-icons/di";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (    
    <nav className=' bg-white border-b-2 border-slate-400 shadow-md sticky top-0'>
        <div className='w-full h-full flex items-center justify-between p-2 lg:p-3 lg:max-w-7xl lg:mx-auto'>
            <div className=''>
                <DiReact className='w-12 h-12 md:w-16 md:h-16 text-indigo-500 hover:scale-110' />
            </div>
            <div className='flex items-center space-x-5 mr-5 md:mr-10'>
            <Link to="/">
                <h1 className='text-lg font-bold text-slate-800 hover:text-slate-700'>Shop</h1>
            </Link>
            <Link to="/cart">
                <AiOutlineShoppingCart className='w-6 h-6 text-slate-800 hover:text-slate-700'/>
            </Link>
        </div>
        </div>
    </nav>
  )
}
