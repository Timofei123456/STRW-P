import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    token: null,
    user: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInUser:  (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.error = null;
        },
        signOutUser:  (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
            state.error = null;
        },
        signErrorUser:  (state, action) => {
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
            state.error = action.payload;
        },
        setUser:  (state, action) => {
            state.user = action.payload;
        }
    }
});

// Экспортируйте действия
export const { signInUser , signOutUser , signErrorUser , setUser  } = authSlice.actions;
export default authSlice.reducer;