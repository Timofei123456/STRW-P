import axios from 'axios';

const API_BASE_URL = 'http://localhost:8088';

export const fetchTransactions = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/transaction`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw error.response ? error.response.data : error;
    }
};

export const fetchTransactionsOfCurrentUser  = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/transaction/currentUser `, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching transactions of current user:', error);
        throw error.response ? error.response.data : error;
    }
};

export const addTransaction = async (transaction, token) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/transaction`, transaction, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding transaction:', error);
        throw error.response ? error.response.data : error;
    }
};

export const updateTransaction = async (transaction, token) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/transaction`, transaction, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating transaction:', error);
        throw error.response ? error.response.data : error;
    }
};

export const deleteTransaction = async (id, token) => {
    try {
        await axios.delete(`${API_BASE_URL}/transaction/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return true;
    } catch (error) {
        console.error('Error deleting transaction:', error);
        throw error.response ? error.response.data : error;
    }
};

export const fetchTransactionById = async (transactionId, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/transaction/${transactionId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching transaction by ID:', error);
        throw error.response ? error.response.data : error;
    }
};

export const fetchTransactionsByType = async (type, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/transaction/type/${type}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching transactions by type:', error);
        throw error.response ? error.response.data : error;
    }
};

export const fetchTransactionsByAccountId = async (accountId, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/transaction/account/${accountId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data } catch (error) {
        console.error('Error fetching transactions by account ID:', error);
        throw error.response ? error.response.data : error;
    }
};