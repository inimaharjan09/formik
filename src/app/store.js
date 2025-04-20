import { configureStore } from "@reduxjs/toolkit";


export const store=configureStore({
    reducer:{
        // [productApi.reducerPath]: productApi.reducer,
        // [blogApi.reducerPath]: blogApi.reducer
    },
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat([
    //     //extra features caching / invalidation / polling
    //     productApi.middleware,
    //     blogApi.middleware
    // ])
});