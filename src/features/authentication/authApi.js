import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { mainApi } from '../../app/mainApi';




export const authApi = mainApi.injectEndpoints({

  endpoints: (builder) => ({

    userLogin: builder.mutation({
      query: (val) => ({
        url: '/users/login',
        body: val,
        method: 'POST'
      })
    }),

    userSignUp: builder.mutation({
      query: (val) => ({
        url: '/users/register',
        body: val,
        method: 'POST'
      })
    }),


  })

});

export const { useUserLoginMutation, useUserSignUpMutation } = authApi;