import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    token: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInUser: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.error = null;
        },
        signOutUser: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.error = null;
        },
        signErrorUser: (state, action) => {
            state.isAuthenticated = false;
            state.token = null;
            state.error = action.payload;
        },
    }
});

export const { signInUser, signOutUser, signErrorUser } = authSlice.actions;
export default authSlice.reducer;