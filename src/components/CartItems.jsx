import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';


export const CartItems = (props) => {
    const { id, productName, price, image } = props.data;

    const { cartItems, addToCart, removeFromCart, updateCartItem } = useContext(ShopContext);

    return (
        <>
            <div className="justify-between mb-4 rounded-lg border border-fuchsia-200 p-5 shadow-md sm:flex sm:justify-start">
                <img 
                    src={image} 
                    className="w-full rounded-lg sm:w-40" 
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-white">{productName}</h2>
                        <p className="mt-1 text-xs text-white">${price}</p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                            <span 
                                className="cursor-pointer rounded-l bg-fuchsia-400 hover:bg-fuchsia-300 py-1 px-3.5 duration-100 text-white"
                                onClick={()=>removeFromCart(id)}
                            > 
                                - 
                            </span>
                            <input 
                                className="h-8 w-8 border bg-white text-center text-xs outline-none"  
                                value={cartItems[id]}
                                onChange={(e)=>updateCartItem(Number(e.target.value), id)} 
                            />
                            <span 
                                className="cursor-pointer rounded-r bg-fuchsia-400 hover:bg-fuchsia-300 py-1 px-3 duration-100 text-white"
                                onClick={()=>addToCart(id)}
                            > 
                                + 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
