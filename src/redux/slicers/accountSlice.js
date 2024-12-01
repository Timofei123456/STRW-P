import { createSlice } from '@reduxjs/toolkit';
import { fetchAccounts as fetchAccountsApi } from '../../api/accountApi';
import { fetchAccountsOfCurrentUser as fetchAccountsOfCurrentUserApi  } from '../../api/accountApi';


const initialState = {
    accounts: [],
    error: null,
};

const accountSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        setAccounts: (state, action) => {
            state.accounts = action.payload;
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        addAccount: (state, action) => {
            state.accounts.push(action.payload);
        },
        deleteAccount: (state, action) => {
            const { id } = action.payload;
            state.accounts = state.accounts.filter(account => account.id !== id);
        },
        clearAccounts: (state) => {
            state.accounts = [];
        },
    },
});

export const fetchAccountsOfCurrentUser  = (token) => async (dispatch) => {
    try {
        const data = await fetchAccountsOfCurrentUserApi (token);
        dispatch(setAccounts(data));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const fetchAccounts = (token) => async (dispatch) => {
    try {
        const data = await fetchAccountsApi(token);
        dispatch(setAccounts(data));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const { 
    setAccounts, 
    setError, 
    addAccount, 
    deleteAccount, 
    clearAccounts 
} = accountSlice.actions;

export default accountSlice.reducer;