import React from "react";
import { FC } from "react";
import {  useAppDispatch } from '../redux/hooks'
import { add, minusItem, } from "../redux/cart/counterSlice";
import { IProduct } from "../types";

const Quantity: FC<IProduct> = ({ id, count }) => { 

    const dispatch = useAppDispatch()

    const onClickPlus = () => { 
        dispatch(add({id}))
    }

    const onClickMinus = () => { 
        if(count > 1) { 
            dispatch(
                minusItem({id})
            )
        }
    }

    
    return ( 
        <div className="flex items-center justify-center text-center ">
            {/* disabled={count > 1? false : true}  */}
            <button className='bg-slate-700 font-semibold text-white rounded-sm px-3 py-1' onClick={onClickMinus}>-</button>
            {/* <input type="number" className="mx-2" onChange={(event) => setCount(+event.target.value)} value={count}/> */}
            <p className="mx-11">{count}</p>
            <button className='bg-slate-700 font-semibold text-white rounded-sm px-3 py-1' onClick={onClickPlus}>+</button>
        </div>
    )
};

export default Quantity