import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {

            /* Redux follows the principle of immutability, and directly modifying the property of 
            an existing object might not trigger the state to update correctly. So, to ensure that 
            the Redux state updates as expected, we should create a new state object with the updated 
            productQuantity */

            const { id, productQuantity } = action.payload;
            const itemIndex = state.products.findIndex((item) => item.id === id);

            if (itemIndex !== -1) {
                const updatedProducts = state.products.map((item, index) => {
                    if (index === itemIndex) {
                        return {
                            ...item,
                            productQuantity: item.productQuantity + productQuantity,
                        };
                    }
                    return item;
                });

                state.products = updatedProducts;
            } else {
                state.products.push(action.payload);
            }
        },
        removeItem: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload)
        },
        resetCart: (state, action) => {
            state.products = [];
        },
    },
});

export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;