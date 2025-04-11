import { createSlice } from "@reduxjs/toolkit";

export const taskSlice= createSlice({
    name: 'taskSlice',
    initialState:{
        tasks:[
            {id:1, title:'some homework done', completed: false}
        ]
    },
    reducers:{
        addTask:(state, action)
    }
})