import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slice.js/counterSlice'


export const store = configureStore({
    reducer:{
        counterReducer:counterSlice
    }
    
})