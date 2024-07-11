import React from 'react';
import { IProduct } from '../types';
import CartItem from './CartItem';
const products: IProduct[] = [
    { 
    id: '5wqeq',
    imagePath: 'https://static.re-store.ru/upload/resize_cache/iblock/cbd/100500_800_140cd750bba9870f18aada2478b24840a/cxv0e3l0bbksb3wdi09hfl0ud52qs5kj.jpg',
    name: 'Apple MacBook Pro 16',
    price: 5059,
    count: 0,
    },
    { 
    id: 'e5qeq',
    imagePath: 'https://static.re-store.ru/upload/resize_cache/iblock/ad2/100500_800_140cd750bba9870f18aada2478b24840a/vp22qmg6smadiei4b6efwkjr0yl56tx0.jpg',
    name: 'Apple MacBook Air 15',
    price: 2500,
    count: 0,
    },
    { 
    id: 'ew5eq',
    imagePath: 'https://static.re-store.ru/upload/iblock/63e/czt6t2nclzt1l0g6zujgzc1j86x16xhe.jpeg',
    name: 'Apple MacBook Pro 16',
    price: 5000,
    count: 0,
    },
    { 
    id: 'ewq5q',
    imagePath: 'https://static.re-store.ru/upload/resize_cache/iblock/da0/100500_800_140cd750bba9870f18aada2478b24840a/da0937b137c91935be738b1cf7e99617.jpg',
    name: 'Apple MacBook Air 13',
    price: 2000,
    count: 0,
    },
    { 
    id: 'ewqe5',
    imagePath: 'https://static.re-store.ru/upload/resize_cache/iblock/f8a/100500_800_140cd750bba9870f18aada2478b24840a/qwt3vnb96odljyiic3grxqqd21qojre4.jpg',
    name: 'Apple MacBook Air 13',
    price: 2000,
    count: 0,
    },
]

const Products = () => { 
    
    return ( 
        <div className='flex justify-center gap-20 flex-wrap my-1 '>
            {products.map((product: IProduct) => (
                <CartItem product={product} key={product.id}/>
            ))}
        </div>
    )
};
export default Products