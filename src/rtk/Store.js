import { configureStore } from "@reduxjs/toolkit";
import product from "./Slices/Product-slice"

export const store=configureStore({
    reducer:{
        product:product
    }
})