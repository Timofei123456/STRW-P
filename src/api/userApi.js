import axios from 'axios';

const API_BASE_URL = 'http://localhost:8088';

export const fetchCurrentUser  = async (username, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user/username/${username}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching current user:', error);
        throw error.response ? error.response.data : error;
    }
};

export const fetchAllUsers = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching all users:', error);
        throw error.response ? error.response.data : error;
    }
};

export const createUser  = async (userData, token) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users`, userData, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error.response ? error.response.data : error;
    }
};

export const updateUser  = async (userId, userData, token) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/users/${userId}`, userData, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error.response ? error.response.data : error;
    }
};

export const deleteUser  = async (userId, token) => {
    try {
        await axios.delete(`${API_BASE_URL}/users/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error.response ? error.response.data : error;
    }
};