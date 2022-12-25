import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    initialState:[],
    name:"productSlice",
    reducers:{
        addToCart:(state,action)=>{
            let findProduct=state.find((e)=>e.id===action.payload.id)
           if(findProduct){
            findProduct.quantity +=1;
           }else{
            let clone={...action.payload,quantity:1}
            state.push(clone)
           }
        },
        removeProduct:(state,action)=>{
            return state.filter((e)=>e.id!==action.payload.id)
        },
        increase:(state,action)=>{
            let findProduct=state.find((e)=>e.id===action.payload.id)
           if(findProduct){
            findProduct.quantity +=1;
           }else{
            let clone={quantity:1}
           }
        },
        decrease:(state,action)=>{
            let findProduct=state.find((e)=>e.id===action.payload.id)
           if(findProduct){
            if(findProduct.quantity>1){
                findProduct.quantity -=1;
            }else{
             return state.filter((e)=>e.id!==action.payload.id)
            }
            }
        }
    }
})

export const {addToCart,removeProduct,increase,decrease}=productSlice.actions
export default productSlice.reducer