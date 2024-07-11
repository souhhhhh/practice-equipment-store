import React from "react";
import { FC } from "react";
import { IProduct } from "../types";
import Quantity from "./Quantity";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { add } from "../redux/cart/counterSlice";
interface IProductProps { 
    product: IProduct
}


const CartItem: FC<IProductProps> = ({ product }) => { 


    const dispatch = useAppDispatch()
    
    const addToCart = (product: IProduct) => { 
        dispatch(add(product))
    }

    return ( 
        <div className="shadow-md rounded-md p-5 text-center items-center ">

            <img src={product.imagePath} alt="" width={250} height={250}  />

            <div className="text-lg text-slate-800 font-bold mt-7 ">
                {product.name}
            </div>

            <div className="text-sm my-2 text-gray-900 decoration-1 font-medium">
                1 x {product.price} $
            </div>
                <button className="text-sm text-gray-900 bg-slate-400 rounded-md bg-contain mt-3 p-1 hover:bg-slate-300 transition-colors"
                onClick={() => addToCart(product)}>В корзину</button>
        </div>
    )
};

export default CartItem