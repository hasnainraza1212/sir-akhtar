import { createSlice } from '@reduxjs/toolkit'

// const initialState = JSON.parse(window?.localStorage.getItem("cart"))|| []
const initialState = []


export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItemInCart:(state, action)=>{
            return [...state, action.payload]
        },
      
        deleteCartItem:(state, action)=>{
            const updatedState = state.filter(item=>item.id!==action.payload);
            return updatedState
        },
        decrementCartItemCount: (state, action) => {
            // Find the item in the state array
            const updatedState = state.map(item => {
                // If the item id matches the action payload, decrement its count
                if (item.id === action.payload) {
                    // Return a new object with the count decremented
                    return { ...item, count: item.count - 1 };
                }
                // For other items, return them unchanged
                return item;
            });
            // Return the updated state
            return updatedState;
        },
        
        incrementCartItemCount: (state, action) => {
            // Find the item in the state array
            const updatedState = state.map(item => {
                // If the item id matches the action payload, increment its count
                if (item.id === action.payload) {
                    // Return a new object with the count incremented
                    return { ...item, count: item.count + 1 };
                }
                // For other items, return them unchanged
                return item;
            });
            // Return the updated state
            return updatedState;
        }
    }
})

export const {addItemInCart, deleteCartItem, decrementCartItemCount, incrementCartItemCount} = cartSlice.actions
export default cartSlice.reducer