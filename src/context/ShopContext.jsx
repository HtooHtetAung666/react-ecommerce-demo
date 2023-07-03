import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../Products';

export const ShopContext = createContext();

const defaultCart = () => {
  let cart = {};

  for(let i=1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

export const ShopContextProvider = (props) => {
  const [cartItems,setCartItems] = useState(defaultCart);

  const addToCart = (itemId) => {
    setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}));
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}));
  }

  const updateCartItem = (newAmount, itemId) => {
    setCartItems((prev)=>({...prev, [itemId]: newAmount}));
  }

  const totalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product)=> product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount;
  }

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    totalCartAmount,
  }

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
