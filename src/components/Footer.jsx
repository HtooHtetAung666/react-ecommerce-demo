import React from 'react'
import { AiFillHeart } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className='w-full h-full bg-slate-800 p-5 lg:max-7-xl lg:mx-auto'>
        <div className='flex items-center justify-center space-x-3'>
            <h1 className='text-white lg:text-lg'>Made with</h1>
            <AiFillHeart className='text-red-500 w-5 h-5' />
        </div> 
    </div>
  )
}
