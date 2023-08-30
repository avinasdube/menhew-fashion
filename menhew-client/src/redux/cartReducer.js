// a reducer slice for cart functionality
/* slices in redux basically refer to particular features */

import { createSlice } from "@reduxjs/toolkit";

// setting initial state as empty array of products

const initialState = {
    products: [],
};

// creating a slice for cart functionality using 'createSlice()' function

export const cartSlice = createSlice({
    name: 'cart', // the name of slice is basically given for dev tools
    initialState, // using the initial state defined above
    reducers: {

        // defining various reducer functions that handle events in cart

        /* 1. reducer function to add an item to cart */

        addToCart: (state, action) => {

            /* Redux follows the principle of immutability, and directly modifying the property of 
            an existing object might not trigger the state to update correctly. So, to ensure that 
            the Redux state updates as expected, we should create a new state object with the updated 
            productQuantity */

            const { id, productQuantity } = action.payload; // destructuring 'payload' of 'action' and getting id and productQuantity

            // finding index value of the 'product' in 'state.products' array that matches the given id

            const itemIndex = state.products.findIndex((item) => item.id === id); 

            if (itemIndex !== -1) { // if item index is not '-1' then item is already in the cart
                const updatedProducts = state.products.map((item, index) => { // creating new 'state.products' array with updated quantities
                    if (index === itemIndex) { // if index === itemIndex then we are processing an existing item in the cart
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

        /* 2. reducer function to remove an item from cart */

        removeItem: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload)
        },

        /* 3. reducer function to reset cart to 0 */ 

        resetCart: (state, action) => {
            state.products = [];
        },
    },
});

// exporting event handler cart reducers

export const { addToCart, removeItem, resetCart } = cartSlice.actions;

// exporting reducer function

export default cartSlice.reducer;