import { createSlice } from '@reduxjs/toolkit';
import { fetchTransactions as fetchTransactionsApi } from '../../api/transactionApi';
import { fetchTransactionsOfCurrentUser as fetchTransactionsOfCurrentUserApi  } from '../../api/transactionApi';


const initialState = {
    transactions: [],
    error: null,
};

const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        setTransactions: (state, action) => {
            state.transactions = action.payload;
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        addTransaction: (state, action) => {
            state.transactions.push(action.payload);
        },
        deleteTransaction: (state, action) => {
            const { id } = action.payload;
            state.transactions = state.transactions.filter(transaction => transaction.id !== id);
        },
        clearTransactions: (state) => {
            state.transactions = [];
        },
    },
});

export const fetchTransactionsOfCurrentUser  = (token) => async (dispatch) => {
    try {
        const data = await fetchTransactionsOfCurrentUserApi (token);
        dispatch(setTransactions(data));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const fetchTransactions = (token) => async (dispatch) => {
    try {
        const data = await fetchTransactionsApi(token);
        dispatch(setTransactions(data));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const { 
    setTransactions, 
    setError, 
    addTransaction, 
    deleteTransaction, 
    clearTransactions 
} = transactionSlice.actions;

export default transactionSlice.reducer;