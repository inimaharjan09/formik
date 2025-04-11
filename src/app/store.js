import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../pages/todo/todoSlice";
import { postSlice } from "../pages/todo/postSlice";

export const store=configureStore({
    // reducer:{
    //     todoSlice:todoSlice.reducer
    // }

    reducer: {
        [todoSlice.name]:todoSlice.reducer,
        [postSlice.name]:postSlice.reducer
    }
})