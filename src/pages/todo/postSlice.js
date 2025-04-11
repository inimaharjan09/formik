import { createSlice } from "@reduxjs/toolkit";
import { reset } from "./todoSlice";



export const postSlice = createSlice({
  name: 'postSlice',

  initialState: {
    posts: [
      { id: 1, title: 'hello', detail: 'sello' }
    ]
  },

  extraReducers: (builder) => {
    builder.addCase(reset, (state, action) => {
      state.posts = [];

    })
  }
});


export const { } = postSlice.actions;