import React, { useState } from 'react';


import logoImage from '../assets/images/Apple.svg'
import cartImage from '../assets/images/Cart1.svg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../redux/hooks';





const Header: React.FC = () => { 
    const totalPrice = useAppSelector((state) => state.counter.totalPrice)
    // const total = cartItems.reduce((acc, item) =>  
    //     acc + item.price
    // ,0)

    return ( 
        
        <div className="flex items-center justify-between relative bg-gray-500 py-2 px-4">

            <Link to='/'>
                <img  src={logoImage} alt="" width={50} height={50} />
            </Link>

                <div>

            <Link to='cart'>
            <button className='flex gap-5 justify-center items-center font-bold text-xl border-4 rounded-lg border-slate-400 p-2'>
                <p className='mb-1.5'>{totalPrice} $</p>
                <img  src={cartImage} alt="" width={35} height={35} />
            </button>
                
            </Link>

                </div>


        </div>
    )
}
export default Header;
