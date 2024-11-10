import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInUser:  (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
        },
        signOutUser: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
        },
        signErrorUser:  (state, action) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload;
        },
        authenticateUser:  (state, action) => {
            const { username, password, users } = action.payload;
        
            const user = users.find(
                u => u.username === username && u.password === password
            );
        
            if (user) {
                state.isAuthenticated = true;
                state.user = user;
                state.error = null;
            } else {
                state.isAuthenticated = false;
                state.user = null;
                state.error = "Неверные учетные данные";
            }
        }
    }
});

export const { signInUser , signOutUser , signErrorUser , authenticateUser  } = authSlice.actions;
export default authSlice.reducer;