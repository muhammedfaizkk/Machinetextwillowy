
import { configureStore } from '@reduxjs/toolkit'
import Cart from './dataslice'


const store = configureStore({
    reducer: {
        Mycart: Cart
    }
})
export default store
