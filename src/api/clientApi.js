import axios from 'axios';

const API_BASE_URL = 'http://localhost:8088';

export const fetchClients = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/client`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching clients:', error);
        throw error.response ? error.response.data : error;
    }
};

export const addClient = async (client, token) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/client`, client, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding client:', error);
        throw error.response ? error.response.data : error;
    }
};

export const updateClient = async (client, token) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/client`, client, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating client:', error);
        throw error.response ? error.response.data : error;
    }
};

export const deleteClient = async (id, token) => {
    try {
        await axios.delete(`${API_BASE_URL}/client/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return true;
    } catch (error) {
        console.error('Error deleting client:', error);
        throw error.response ? error.response.data : error;
    }
};

export const fetchClientById = async (id, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/client/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching client by ID:', error);
        throw error.response ? error.response.data : error;
    }
};

export const fetchClientByName = async (name, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/client/name/${name}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching client by name:', error);
        throw error.response ? error.response.data : error;
    }
};