// Frontend\DigiVerifyMe\src\services\authService.tsx
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8001/auth';

interface UserData {
    username: string;
    password: string;
    email?: string; 
}

const authService = {
    login: async (usernameOrEmail: string, password: string): Promise<any> => {
        try {
            const response = await axios.post(`${API_URL}/login`, { username_or_email: usernameOrEmail, password });
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        } catch (error) {
            console.error("Login failed", error);
            throw error;
        }
    },

    logout: () => {
        localStorage.removeItem('user');
    },

    signup: async (userData: UserData): Promise<any> => {
        try {
            const response = await axios.post(`${API_URL}/signup`, userData);
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        } catch (error) {
            console.error("Signup failed", error);
            throw error;
        }
    },

    verifyDID: async (did: string, challenge: string): Promise<any> => {
        const response = await axios.post(`${API_URL}/verify`, { did, challenge });
        return response.data;
    },

    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem('user') || '{}') || null;
    },
};

export default authService;
