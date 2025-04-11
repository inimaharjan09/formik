import { createAction, createSlice } from "@reduxjs/toolkit";
import { getFromLocal, setToLocal } from "../../local/local_storage";

export const reset = createAction('app/reset');

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: {
    todos: getFromLocal()
  },
  reducers: {

    addTodo: (state, action) => {
      state.todos.push(action.payload);
      setToLocal(state.todos);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo);

      setToLocal(state.todos);
    },
    removeTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
      setToLocal(state.todos);
    }

  },
  extraReducers: (builder) => {
    builder.addCase(reset, (state, action) => {
      state.todos = [];
    })
  }
});


export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;