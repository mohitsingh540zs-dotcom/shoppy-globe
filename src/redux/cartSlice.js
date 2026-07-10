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
        removeFromCart(state, action) {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload
            );
        },

        increaseQuantity(state, action) {
            const product = state.cart.find(
                (item) => item.id === action.payload
            );

            if (product) {
                product.quantity++;
            }
        },

        decreaseQuantity(state, action) {
            const product = state.cart.find(
                (item) => item.id === action.payload
            );

            if (product && product.quantity > 1) {
                product.quantity--;
            }
        },

        clearCart(state) {
            state.cart = [];
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;