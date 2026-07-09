import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addToCart(state, action) {
            // Product received from dispatch
            const product = action.payload;

            // Check if product already exists
            const existingProduct = state.cart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                // Increase quantity
                existingProduct.quantity++;
            } else {
                // Add new product with quantity
                state.cart.push({
                    ...product,
                    quantity: 1,
                });
            }
        },
    },
});

export const {
    addToCart
} = cartSlice.actions;

export default cartSlice.reducer;