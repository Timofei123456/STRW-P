import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
    fetchClients as fetchClientsApi, 
    addClient as addClientApi, 
    updateClient as updateClientApi, 
    deleteClient as deleteClientApi,
    fetchClientById as fetchClientByIdApi,
    fetchClientByName as fetchClientByNameApi
} from '../../api/clientApi';

const initialState = {
    clients: [],
    error: null,
    loading: false,
};

export const fetchClients = createAsyncThunk(
    'clients/fetchClients',
    async (token, { rejectWithValue }) => {
        try {
            const data = await fetchClientsApi(token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

export const addClient = createAsyncThunk(
    'clients/addClient',
    async ({ client, token }, { rejectWithValue }) => {
        try {
            const data = await addClientApi(client, token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

export const updateClient = createAsyncThunk(
    'clients/updateClient',
    async ({ client, token }, { rejectWithValue }) => {
        try {
            const data = await updateClientApi(client, token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

export const deleteClient = createAsyncThunk(
    'clients/deleteClient',
    async ({ id, token }, { rejectWithValue }) => {
        try {
            await deleteClientApi(id, token);
            return id;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

export const fetchClientById = createAsyncThunk(
    'clients/fetchClientById',
    async ({ id, token }, { rejectWithValue }) => {
        try {
            const data = await fetchClientByIdApi(id, token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

export const fetchClientByName = createAsyncThunk(
    'clients/fetchClientByName',
    async ({ name, token }, { rejectWithValue }) => {
        try {
            const data = await fetchClientByNameApi(name, token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error);
        }
    }
);

const clientSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        clearClients: (state) => {
            state.clients = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchClients.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchClients.fulfilled, (state, action) => {
                state.clients = action.payload;
                state.loading = false;
            })
            .addCase(fetchClients.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addClient.fulfilled, (state, action) => {
                state.clients.push(action.payload);
            })
            .addCase(deleteClient.fulfilled, (state, action) => {
                const id = action.payload;
                state.clients = state.clients.filter(client => client.id !== id);
            })
    },
});

export const { clearClients } = clientSlice.actions;

export default clientSlice.reducer;