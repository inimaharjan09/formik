import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const blogApi= createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://67f1ee5fc733555e24ae56e4.mockapi.io'}),
    endpoints: (builder)=>({
        getBlogs: builder.query({
            query: () => ({
              url: '/blogs',
              method: 'GET'
            }),
            providesTags: ['Blogs']
          }),
          addBlog: builder.mutation({
            query: (data) => ({
              url: '/blogs',
              body: data,
              method: 'POST'
            }),
            invalidatesTags: ['Blogs']
          }),
          removeBlog: builder.mutation({
            query: (id) => ({
              url: `/blogs/${id}`,
              method: 'DELETE'
            }),
            invalidatesTags: ['Blogs']
          })
        })
      });
export const { useGetBlogsQuery, useAddBlogMutation, useRemoveBlogMutation } = blogApi;