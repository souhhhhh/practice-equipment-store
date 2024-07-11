import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CounterState } from './types'
import { IProduct } from '../../types';



const initialState: CounterState = { 
    item: [],
    totalPrice: 0,
}


export const counterSlice = createSlice({ 
    name: 'counter',
    initialState,
    reducers: { 
        add: (state,action) => { 
            const findItem: IProduct | undefined = state.item.find((obj: IProduct) => obj.id == action.payload.id);

            if (findItem) {
                findItem.count++;

            } 
            
            else {
                state.item.push({ ...action.payload, count: 1 });
            } 


            state.totalPrice = state.item.reduce((sum, obj) => { 
                return (obj.price * obj.count) + sum
                //sum - предыдущая сумма, то есть, если у нас в корзине был один ноутбук, стоимостью 2000 долларов, а мы к нему прибавляем ноутбук за 5000 долларов
                // то результат не сбросится, поэтому к 2000 прибавится 5000
            }, 0)

            
        },

        minusItem: (state, action) => { 
            const findItem: IProduct | undefined = state.item.find((obj: IProduct) => obj.id == action.payload.id);
            //добавляем элемент в const, у которого id равен тому id, который мы передали
            
            if (findItem) {
                findItem.count--;
            }
            
            state.totalPrice = state.item.reduce((sum, obj) => { 
                return (obj.price * obj.count) + sum
            }, 0)

        },
        removeItem: (state, action) => { 
            state.item = state.item.filter((obj) => obj.id !== action.payload)
            

            state.totalPrice = state.item.reduce((sum, obj) => { 
                return (obj.price * obj.count) + sum
            }, 0)
        }       
    }
})

export const { add, minusItem, removeItem } = counterSlice.actions
// export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer