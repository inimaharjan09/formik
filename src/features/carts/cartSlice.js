import { createSlice } from "@reduxjs/toolkit";
import { clearCartsFromLocal, getCartsFromLocal, setCartsToLocal } from "../local/local";



export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    carts: getCartsFromLocal()
  },
  reducers: {
    setToCart: (state, action) => {
      const isExist = state.carts.find((cart) => cart._id === action.payload._id);
    
      if(isExist){
      state.carts = state.carts.map((cart) => cart._id === isExist._id ? action.payload : cart);

    }else{
      state.carts.push(action.payload);

    }
    setCartsToLocal(state.carts);
    },

    addToCart: (state, action) => {
      state.carts.push(action.payload);
      setCartsToLocal(state.carts);
    },

    updateCart: (state, action) => {
      state.carts = state.carts.map((cart) => cart._id === action.payload._id ? action.payload : cart);
      setCartsToLocal(state.carts);
    },

    removeFromCart: (state, action) => {
      state.carts = state.carts.filter((cart) => cart._id !== action.payload);
      setCartsToLocal(state.carts);
    },
    clearCart: (state) => {
      state.carts = [];
      clearCartsFromLocal();
      

    }

  }
})

export const { setToCart, addToCart, updateCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
