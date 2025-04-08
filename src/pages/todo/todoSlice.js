import { createSlice } from "@reduxjs/toolkit";

export const todoSlice=createSlice({
    name: 'todoSlice',
    initialState:{
        todos:[
        ]
    },
    reducers:{
        addTodo:(state, action)=>{
            state.todos.push(action.payload);
        },
        updateTodo: (state, action)=>{

        }
    }
});
export const {addTodo} = todoSlice.actions;