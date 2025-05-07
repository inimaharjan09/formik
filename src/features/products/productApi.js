import { mainApi } from "../../app/mainApi";



export const productApi = mainApi.injectEndpoints({

  endpoints: (builder) => ({

    getProducts: builder.query({
      query: (query) => ({
        url: '/products',
        method: 'GET',
        params: query
      })
    }),

    getTop5Products: builder.query({
      query: (query) => ({
        url: '/products/top-5',
        method: 'GET',

      })
    })

  })

});


export const { useGetProductsQuery, useGetTop5ProductsQuery } = productApi;