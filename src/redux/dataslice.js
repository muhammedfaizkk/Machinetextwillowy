import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Mycartdata: []
};

const Cart = createSlice({
    name: "Carts",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.Mycartdata = [...state.Mycartdata, action.payload];
        },
        updateQty: (state, action) => {
            const {quantity, id } = action.payload
            const item = state.Mycartdata.find((item) => item.id === id)
            if (item) {
                item.qty = quantity;
            }

        },
        deleteItemFromCart: (state, action) => {
            state.Mycartdata = state.Mycartdata.filter((item) => item.id !== action.payload);
        }
    }
});

export const { deleteItemFromCart, addToCart, updateQty } = Cart.actions;
export default Cart.reducer;
