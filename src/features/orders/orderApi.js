import { mainApi } from "../../app/mainApi";

const orderApi= mainApi.injectEndpoints({
    endpoints: (builder) => ({
        

        getUserOrder: builder.query({
            query: (token) => ({
        url: '/orders/users',
        headers: {
          Authorization: token
        },
        method: 'GET',
      }),
      providesTags: ['Orders']
        }),

        getOrderDetail: builder.query({
            query: (id) => ({
        url: `/orders/${id}`,
        method: 'GET',
      }),
      providesTags: ['Orders']
        }),

        addOrder: builder.mutation({
            query: (query) => ({
        url: '/orders',
        body: query.body,
        headers: {
          Authorization: query.token
        },
        method: 'POST',
      }),
      providesTags: ['Orders']
    }),
    })
});
export const { useGetOrdersQuery, useGetUserOrderQuery, 
  useAddOrderMutation, useGetOrderDetailQuery } = orderApi;