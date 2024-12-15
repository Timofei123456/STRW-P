import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
    fetchAccounts as fetchAccountsApi, 
    fetchAccountsOfCurrentUser  as fetchAccountsOfCurrentUserApi,
    addAccount as addAccountApi,
    updateAccount as updateAccountApi,
    deleteAccount as deleteAccountApi,
    fetchAccountById as fetchAccountByIdApi,
    fetchAccountsByType as fetchAccountsByTypeApi,
    fetchAccountsByClientId as fetchAccountsByClientIdApi,
    fetchAccountBalance as fetchAccountBalanceApi
} from '../../api/accountApi';

const initialState = {
    accounts: [],
    error: null,
    loading: false,
};

export const fetchAccountsOfCurrentUser  = createAsyncThunk(
    'accounts/fetchAccountsOfCurrentUser ',
    async (token, { rejectWithValue }) => {
        try {
            const data = await fetchAccountsOfCurrentUserApi(token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

export const fetchAccounts = createAsyncThunk(
    'accounts/fetchAccounts',
    async (token, { rejectWithValue }) => {
        try {
            const data = await fetchAccountsApi(token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

export const addAccount = createAsyncThunk(
    'accounts/addAccount',
    async ({ account, token }, { rejectWithValue }) => {
        try {
            const data = await addAccountApi(account, token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

export const updateAccount = createAsyncThunk(
    'accounts/updateAccount',
    async ({ account, token }, { rejectWithValue }) => {
        try {
            const data = await updateAccountApi(account, token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

export const deleteAccount = createAsyncThunk(
    'accounts/deleteAccount',
    async ({ id, token }, { rejectWithValue }) => {
        try {
            await deleteAccountApi(id, token);
            return id;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

export const fetchAccountById = createAsyncThunk(
    'accounts/fetchAccountById',
    async ({ id, token }, { rejectWithValue }) => {
        try {
            const data = await fetchAccountByIdApi(id, token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

export const fetchAccountsByType = createAsyncThunk(
    'accounts/fetchAccountsByType',
    async ({ type, token }, { rejectWithValue }) => {
        try {
            const data = await fetchAccountsByTypeApi(type, token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

export const fetchAccountsByClientId = createAsyncThunk(
    'accounts/fetchAccountsByClientId',
    async ({ clientId, token }, { rejectWithValue }) => {
        try {
            const data = await fetchAccountsByClientIdApi(clientId, token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

export const fetchAccountBalance = createAsyncThunk(
    'accounts/fetchAccountBalance',
    async ({ accountId, token }, { rejectWithValue }) => {
        try {
            const data = await fetchAccountBalanceApi(accountId, token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

const accountSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        clearAccounts: (state) => {
            state.accounts = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAccountsOfCurrentUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAccountsOfCurrentUser.fulfilled, (state, action) => {
                state.accounts = action.payload;
                state.loading = false;
            })
            .addCase(fetchAccountsOfCurrentUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchAccounts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAccounts.fulfilled, (state, action) => {
                state.accounts = action.payload;
                state.loading = false;
            })
            .addCase(fetchAccounts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addAccount.fulfilled, (state, action) => {
                state.accounts.push(action.payload);
            })
            .addCase(deleteAccount.fulfilled, (state, action) => {
                const id = action.payload;
                state.accounts = state.accounts.filter(account => account.id !== id);
            });
    },
});

export const { clearAccounts } = accountSlice.actions;

export default accountSlice.reducer;