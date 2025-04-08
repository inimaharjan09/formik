import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../pages/todo/todoSlice";

export const store=configureStore({
    reducer:{
        todoSlice:todoSlice.reducer
    }
})