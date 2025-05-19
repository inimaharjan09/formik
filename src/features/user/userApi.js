import { mainApi } from "../../app/mainApi.js";



export const userApi = mainApi.injectEndpoints({

  endpoints: (builder) => ({

    getUser: builder.query({
      query: (token) => ({
        url: '/users/profile',
        method: 'GET',
        headers: { Authorization: token }
      }),
      providesTags: ['User']
    }),

    updateUser: builder.mutation({
      query: (q) => ({
        url: '/users/profile',
        body: q.body,
        method: 'PATCH',
        headers: { Authorization: q.token }
      })
    }),


  })

});

export const {useGetUserQuery, useUpdateUserMutation  } = userApi;