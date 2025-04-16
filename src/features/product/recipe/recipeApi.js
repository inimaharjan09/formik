import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products' }),

  endpoints: (builder) => ({

    getAllProducts: builder.query({
      query: (q) => ({
        url: '/',
        method: 'GET'
      }),

    }),

    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET'
      })
    }),

    addProduct: builder.mutation({
      query: (data) => ({
        url: '/add',
        body: data,
        method: 'POST'
      })
    })


  })

});

export const { useGetAllProductsQuery, useLazyGetAllProductsQuery } = productApi;