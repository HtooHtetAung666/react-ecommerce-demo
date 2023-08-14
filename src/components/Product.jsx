import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';

export const Product = (props) => {
    const { id, productName, price, image } = props.data;

    const { addToCart, cartItems } = useContext(ShopContext);

    const cartAmount = cartItems[id];

    return (
        <div className='items-center '>
            <div className=''>
                <div className="w-full h-full max-w-md border border-blue-200 rounded-lg shadow">
                    <div>
                        <img className="p-4 w-full h-full md:h-72 object-contain rounded-t-lg" src={image} alt='product_image' />
                    </div>
                    <div className="px-2 py-2 space-y-1 md:space-y-3 md:px-5 md:pb-5">
                        <div>
                            <h5 className="text-md md:text-xl font-semibold tracking-tight text-slate-800">{productName}</h5>
                        </div>
                        <div className="items-center space-y-2 md:space-y-1 md:flex md:justify-between">
                            <h4 className="text-lg md:text-3xl font-bold text-slate-800">${price}</h4>
                            <button
                                className="text-white bg-blue-400 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center"
                                onClick={()=>addToCart(id)}
                            >
                                Add to cart {cartAmount > 0 && <>({cartAmount})</>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
