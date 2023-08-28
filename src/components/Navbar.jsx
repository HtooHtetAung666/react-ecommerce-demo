import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SiMsi } from "react-icons/si";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

export const Navbar = () => {
  const { totalCartItem } = useContext(ShopContext);

  const totalItem = totalCartItem();

  return (
    <nav className=" bg-white border-b-2 border-slate-400 shadow-md sticky top-0">
      <div className="w-full h-full flex items-center justify-between p-2 lg:p-3 lg:max-w-7xl lg:mx-auto">
        <div className="">
          <SiMsi className="w-12 h-12 md:w-14 md:h-14 text-[#7315e5] hover:scale-110" />
        </div>
        <div className="flex items-center space-x-5 mr-5 md:mr-10">
          <Link to="/">
            <h1 className="text-lg font-bold text-slate-800 hover:text-slate-700">
              Home
            </h1>
          </Link>
          <Link to="/cart">
            <div className="relative flex">
              <AiOutlineShoppingCart className="flex-1 w-7 h-7 lg:w-8 lg:h-8 text-slate-800 hover:text-slate-700" />
              {totalItem > 0 ? (
                <span className="absolute right-0 top-0 rounded-full bg-blue-400 w-3 h-3 md:w-4 md:h-4 top right p-0 m-0 text-white font-mono text-sm leading-tight text-center">
                  {totalItem}{" "}
                </span>
              ) : (
                ""
              )}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
