import axios from 'axios';

const API_BASE_URL = 'http://localhost:8088';

export const fetchAccounts = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/account`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching accounts:', error);
        throw error.response ? error.response.data : error;
    }
};

export const fetchAccountsOfCurrentUser  = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/account/currentUser `, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching accounts of current user:', error);
        throw error.response ? error.response.data : error;
    }
};

export const addAccount = async (account, token) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/account`, account, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding account:', error);
        throw error.response ? error.response.data : error;
    }
};

export const updateAccount = async (account, token) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/account`, account, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating account:', error);
        throw error.response ? error.response.data : error;
    }
};

export const deleteAccount = async (id, token) => {
    try {
        await axios.delete(`${API_BASE_URL}/account/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return true;
    } catch (error) {
        console.error('Error deleting account:', error);
        throw error.response ? error.response.data : error;
    }
};
export const fetchAccountById = async (id, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/account/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching account by ID:', error);
        throw error.response ? error.response.data : error;
    }
};

export const fetchAccountsByType = async (type, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/account/type/${type}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching accounts by type:', error);
        throw error.response ? error.response.data : error;
    }
};

export const fetchAccountsByClientId = async (clientId, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/account/client/${clientId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching accounts by client ID:', error);
        throw error.response ? error.response.data : error;
    }
};

export const fetchAccountBalance = async (accountId, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/account/${accountId}/balance`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching account balance:', error);
        throw error.response ? error.response.data : error;
    }
};