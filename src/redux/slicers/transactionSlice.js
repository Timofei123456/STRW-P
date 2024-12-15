import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    fetchTransactions as fetchTransactionsApi,
    fetchTransactionsOfCurrentUser as fetchTransactionsOfCurrentUserApi,
    addTransaction as addTransactionApi,
    updateTransaction as updateTransactionApi,
    deleteTransaction as deleteTransactionApi,
    fetchTransactionById as fetchTransactionByIdApi,
    fetchTransactionsByType as fetchTransactionsByTypeApi,
    fetchTransactionsByAccountId as fetchTransactionsByAccountIdApi
} from '../../api/transactionApi';

const initialState = {
    transactions: [],
    error: null,
    loading: false,
};

export const fetchTransactionsOfCurrentUser = createAsyncThunk(
    'transactions/fetchTransactionsOfCurrentUser ',
    async (token, { rejectWithValue }) => {
        try {
            const data = await fetchTransactionsOfCurrentUserApi(token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

export const fetchTransactions = createAsyncThunk(
    'transactions/fetchTransactions',
    async (token, { rejectWithValue }) => {
        try {
            const data = await fetchTransactionsApi(token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

export const addTransaction = createAsyncThunk(
    'transactions/addTransaction',
    async ({ transaction, token }, { rejectWithValue }) => {
        try {
            const data = await addTransactionApi(transaction, token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

export const updateTransaction = createAsyncThunk(
    'transactions/updateTransaction',
    async ({ transaction, token }, { rejectWithValue }) => {
        try {
            const data = await updateTransactionApi(transaction, token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

export const deleteTransaction = createAsyncThunk(
    'transactions/deleteTransaction',
    async ({ id, token }, { rejectWithValue }) => {
        try {
            await deleteTransactionApi(id, token);
            return id; // Возвращаем id для удаления транзакции из состояния
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

export const fetchTransactionById = createAsyncThunk(
    'transactions/fetchTransactionById',
    async ({ transactionId, token }, { rejectWithValue }) => {
        try {
            const data = await fetchTransactionByIdApi(transactionId, token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

export const fetchTransactionsByType = createAsyncThunk(
    'transactions/fetchTransactionsByType',
    async ({ type, token }, { rejectWithValue }) => {
        try {
            const data = await fetchTransactionsByTypeApi(type, token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

export const fetchTransactionsByAccountId = createAsyncThunk(
    'transactions/fetchTransactionsByAccountId',
    async ({ accountId, token }, { rejectWithValue }) => {
        try {
            const data = await fetchTransactionsByAccountIdApi(accountId, token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        clearTransactions: (state) => {
            state.transactions = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactionsOfCurrentUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTransactionsOfCurrentUser.fulfilled, (state, action) => {
                state.loading = false;
                state.transactions = action.payload;
            })
            .addCase(fetchTransactionsOfCurrentUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchTransactions.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.loading = false;
                state.transactions = action.payload;
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addTransaction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addTransaction.fulfilled, (state, action) => {
                state.loading = false;
                state.transactions.push(action.payload);
            })
            .addCase(addTransaction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateTransaction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateTransaction.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.transactions.findIndex(transaction => transaction.id === action.payload.id);
                if (index !== -1) {
                    state.transactions[index] = action.payload;
                }
            })
            .addCase(updateTransaction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteTransaction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteTransaction.fulfilled, (state, action) => {
                state.loading = false;
                const id = action.payload;
                state.transactions = state.transactions.filter(transaction => transaction.id !== id);
            })
            .addCase(deleteTransaction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});
export const { clearTransactions } = transactionSlice.actions;

export default transactionSlice.reducer;