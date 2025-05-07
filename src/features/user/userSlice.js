import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, removeUserFromLocal, setUserToLocal } from "../local/local";

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        user: getUserFromLocal()
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            setUserToLocal(state.user);
        },
        removeUser: (state, action)=> {
            state.user = null;
            removeUserFromLocal();
        }
    }
});
export const { setUser, removeUser} = userSlice.actions;