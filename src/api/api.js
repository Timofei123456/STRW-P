const API_BASE_URL = 'http://localhost:8088';

export const signIn  = async (username, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/sign-in`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        if (!response.ok) {
            throw new Error('Login failed: ' + response.statusText);
        }
        const data = await response.json();
        return data.token;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const fetchClients = async (token) => {
    try {
        const response = await fetch(`${API_BASE_URL}/client`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch clients: ' + response.statusText);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching clients:', error);
        throw error;
    }
};