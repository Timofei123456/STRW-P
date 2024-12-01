import { createSlice } from '@reduxjs/toolkit';
import { fetchClients as fetchClientsApi } from '../../api/clientApi';

const initialState = {
    clients: [],
    error: null,
};

const clientSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        setClients: (state, action) => {
            state.clients = action.payload;
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        addClient: (state, action) => {
            state.clients.push(action.payload);
        },
        deleteClient: (state, action) => {
            const { id } = action.payload;
            state.clients = state.clients.filter(client => client.id !== id);
        },
        clearClients: (state) => {
            state.clients = [];
        },
    },
});

export const fetchClients = (token) => async (dispatch) => {
    try {
        const data = await fetchClientsApi(token);
        dispatch(setClients(data));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const { 
    setClients, 
    setError, 
    addClient, 
    deleteClient, 
    clearClients 
} = clientSlice.actions;

export default clientSlice.reducer;