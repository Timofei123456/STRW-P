import axios from 'axios';

const API_BASE_URL = 'http://localhost:8088';

export const signIn = async (username, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/sign-in`, {
            username,
            password,
        });
        return response.data.token;
    } catch (error) {
        console.error('Error during login:', error);
        throw error.response ? error.response.data : error;
    }
};