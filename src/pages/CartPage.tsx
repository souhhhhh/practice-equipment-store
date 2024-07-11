import React, { FC } from "react";
import { Link } from 'react-router-dom'
import { useAppSelector } from "../redux/hooks";

import ItemInCart from "../components/ItemInCart";
import { IProduct } from "../types";
const CartPage: FC = () => { 
    
    const cartProduct = useAppSelector((state) => state.counter.item)
    return ( 
    <div className="flex justify-center text-center items-center">

        <div className="text-slate-700 text-5xl font-bold mt-20 ">

            <p>Корзина</p>
            
            <div className="flex gap-10 ">
                {cartProduct.map((el: IProduct) => ( 
                    <ItemInCart {...el} key={el.id + el.count}/>
                ))}
            </div>
                
        

            <div className="mt-3.5 p-3 text-3xl bg-slate-400 rounded-lg transition ease-in-out delay-15 hover:bg-slate-300">
                <Link to="/">
                <p>На главную</p>
                </Link>
            </div>

           
            
        </div>

    </div>
    )
}

export default CartPage;
