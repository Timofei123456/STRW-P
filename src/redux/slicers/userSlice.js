import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        { id: 1, username: "1", password: "1" },
        { id: 2, username: "user1", password: "123" },
    ],
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        removeUser:  (state, action) => {
            state.users = state.users.filter((_, index) => index !== action.payload);
        },
        updateUser:  (state, action) => {
            const { index, user } = action.payload;
            state.users[index] = user;
        }
    }
});

export const { removeUser , updateUser  } = userSlice.actions;
export default userSlice.reducer;