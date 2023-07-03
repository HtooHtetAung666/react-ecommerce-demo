import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';

export const Product = (props) => {
    const { id, productName, price, image } = props.data;

    const { addToCart, cartItems } = useContext(ShopContext);

    const cartAmount = cartItems[id];

    return (
        <div className='items-center '>
            <div className=''>
                <div className="w-full h-full max-w-sm  border border-fuchsia-200 rounded-lg shadow">
                    <a href="#">
                        <img className="p-4 w-full h-full rounded-t-lg" src={image} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-lg md:text-xl font-semibold tracking-tight text-white">{productName}</h5>
                        </a>
                        <div className="flex items-center justify-between">
                            <span className="text-xl md:text-3xl font-bold text-white">${price}</span>
                            <button
                                className="text-white bg-fuchsia-400 hover:bg-fuchsia-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center"
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
