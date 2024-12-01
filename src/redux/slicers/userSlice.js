import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser:  null,
    users: [],
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setCurrentUser:  (state, action) => {
            state.currentUser  = action.payload;
        },
        clearCurrentUser:  (state) => {
            state.currentUser  = null;
        },
        setAllUsers: (state, action) => {
            state.users = action.payload;
        },
        clearAllUsers: (state) => {
            state.users = [];
        },
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        updateUser:  (state, action) => {
            const { index, user } = action.payload;
            state.users[index] = user;
        },
        removeUser:  (state, action) => {
            const { id } = action.payload;
            state.users = state.users.filter(user => user.id !== id);
        },
    }
});

export const { 
    setCurrentUser , 
    clearCurrentUser , 
    setAllUsers, 
    clearAllUsers, 
    addUser , 
    updateUser , 
    removeUser  
} = userSlice.actions;

export default userSlice.reducer;