// importing 'configureStore' to create a redux store

import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartReducer';

// creating a redux store to manage our cart state

const store = configureStore({
    reducer: { // defining our reducer object
        cart: cartReducer // setting slice named 'cart' and associating 'cartReducer' to it
    },
})

export default store;