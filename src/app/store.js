import { configureStore } from "@reduxjs/toolkit";
import { mainApi } from "./mainApi";
import { userSlice } from "../features/user/userSlice";



export const store=configureStore({
    reducer:{
        [mainApi.reducerPath]: mainApi.reducer,
        [userSlice.name]: userSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            mainApi.middleware
        ])
});