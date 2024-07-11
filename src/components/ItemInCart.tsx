import React, { FC, useState } from "react";
import Quantity from "./Quantity";
import { IProduct } from "../types";
import { removeItem } from "../redux/cart/counterSlice";
import { useAppDispatch } from "../redux/hooks";
const ItemInCart: FC<IProduct> = ({ id,name,imagePath,price, count }) => { 

    const dispatch = useAppDispatch()
    const onClickRemove = () => { 
        dispatch(removeItem(id))
    }


    return ( 
        <div className="shadow-md rounded-md p-5 text-center items-center my-5 ">

            <img src={imagePath} alt="" width={250} height={250}  />

            <div className="text-lg text-slate-800 font-bold mt-7 ">
                {name}
            </div>

            <div className="text-sm my-2 text-gray-900 decoration-1 font-medium">
                1 x {price} $
            </div>
                <Quantity id={id} count={count} price={price}/>
                <div className="flex justify-around gap-16 ">

                <p className="text-sm text-gray-900 bg-slate-400 rounded-md bg-contain mt-3 p-1 hover:bg-slate-300 transition-colors">
                    Цена: {price * count } $
                </p>

                <button className="text-sm text-gray-900 bg-slate-400 rounded-md bg-contain mt-3 p-1 hover:bg-slate-300 transition-colors" 
                onClick={onClickRemove}>Удалить</button>

                </div>

        </div>

    )
}

export default ItemInCart;