import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../../utils/utils';

const initialState = [...products];

export const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        updateProductsCards: (state, action) => {
            const query = (action.payload).toLowerCase();
            if (query === "") {
                return initialState; // Return initial state when query is empty
            }else{
                return state.filter(item => item?.name?.toLowerCase()?.includes(query));
            }
        }
    }
});

export const { updateProductsCards } = ProductSlice.actions;
export default ProductSlice.reducer;
