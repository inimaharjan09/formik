import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productApi = createApi({
    reducerPath:'productApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://dummyjson.com'}),
    endpoints:(builder )=>({
        getAllProducts: builder.query({
            query: (q)=>({
                url:'/product',
                method:'GET'
            })
        }),
        getSingleProducts: builder.query({
            query: (q)=>({
                url:`/product/${id}`,
                method:'GET'
            })
        }),
        addProduct: builder.mutation({
            query: (data)=>({
                url:'/product/add',
                body: data,
                method:'POST'
            })
        })
    })
});