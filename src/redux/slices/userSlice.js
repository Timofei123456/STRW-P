import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8088';

export const fetchCurrentUser  = createAsyncThunk(
    'users/fetchCurrentUser ',
    async (token, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/user/current`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : 'Ошибка при получении текущего пользователя');
        }
    }
);

export const fetchAllUsers = createAsyncThunk(
    'users/fetchAllUsers',
    async (token, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/user`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : 'Ошибка при получении всех пользователей');
        }
    }
);

export const createUser  = createAsyncThunk(
    'users/createUser ',
    async ({ userData, token }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/users`, userData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : 'Ошибка при создании пользователя');
        }
    }
);

export const updateUser  = createAsyncThunk(
    'users/updateUser ',
    async ({ userId, userData, token }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${API_BASE_URL}/users/${userId}`, userData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : 'Ошибка при обновлении пользователя');
        }
    }
);

export const deleteUser  = createAsyncThunk(
    'users/deleteUser ',
    async ({ userId, token }, { rejectWithValue }) => {
        try {
            await axios.delete(`${API_BASE_URL}/users/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            return userId;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : 'Ошибка при удалении пользователя');
        }
    }
);

const initialState = {
    currentUser:  null,
    users: [],
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        clearCurrentUser:  (state) => {
            state.currentUser  = null;
        },
        clearAllUsers: (state) => {
            state.users = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.currentUser  = action.payload;
                state.loading = false;
            })
            .addCase(fetchCurrentUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchAllUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.loading = false;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
                state.loading = false;
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const { index, user } = action.payload;
                state.users[index] = user;
                state.loading = false;
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                const userId = action.payload;
                state.users = state.users.filter(user => user.id !== userId);
                state.loading = false;
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { 
    clearCurrent, 
    clearAllUsers 
} = userSlice.actions;

export default userSlice.reducer;