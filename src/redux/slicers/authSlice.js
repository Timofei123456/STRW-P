import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8088';

export const signIn = createAsyncThunk(
    'auth/signIn',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/auth/sign-in`, {
                username,
                password,
            });
            return response.data.token;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : 'Ошибка при входе');
        }
    }
);

const initialState = {
    isAuthenticated: false,
    token: null,
    error: null,
    loading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signOutUser:  (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.error = null;
            state.loading = false;
        },
        signErrorUser:  (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signIn.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.token = action.payload;
                state.error = null;
                state.loading = false;
            })
            .addCase(signIn.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.token = null;
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const { signOutUser, signErrorUser } = authSlice.actions;
export default authSlice.reducer;