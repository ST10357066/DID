// Frontend\DigiVerifyMe\src\services\zkService.tsx
import axios from 'axios';
// Home
// GET /zeroknowledgeproof/
// HTTP 200 OK
// Allow: GET, OPTIONS
// Content-Type: application/json
// Vary: Accept

// {
//     "message": "Welcome to Zero Knowledge Proof!",
//     "available_urls": {
//         "home": "http://127.0.0.1:8001/zeroknowledgeproof/",
//         "generate-zkp": "http://127.0.0.1:8001/zeroknowledgeproof/generate/",
//         "verify-zkp": "http://127.0.0.1:8001/zeroknowledgeproof/verify/"
//     }
// }

// Define the API URL
const API_URL = 'https://api.example.com'; // Replace with your actual API URL

// Define the type for proof data
interface ProofData {
    proof: string; // Adjust based on your actual proof structure
    proofType: string; // Keeping proofType if needed
    proofData: string; // Keeping proofData if needed
}

const zkService = {
    submitZKP: async (proofData: ProofData): Promise<any> => { // Specify the return type if known
        const user = JSON.parse(localStorage.getItem('user') || '{}') || { token: '' };
        const response = await axios.post(`${API_URL}/zkp/submit`, proofData, {
            headers: { Authorization: `Bearer ${user.token}` },
        });
        return response.data;
    },

    verifyZKP: async (proofId: string): Promise<any> => { // Specify the return type if known
        const user = JSON.parse(localStorage.getItem('user') || '{}') || { token: '' };
        const response = await axios.get(`${API_URL}/zkp/verify/${proofId}`, {
            headers: { Authorization: `Bearer ${user.token}` },
        });
        return response.data;
    },

    getZKPHistory: async (): Promise<any> => { // Specify the return type if known
        const user = JSON.parse(localStorage.getItem('user') || '{}') || { token: '' };
        const response = await axios.get(`${API_URL}/zkp/history`, {
            headers: { Authorization: `Bearer ${user.token}` },
        });
        return response.data;
    },
};

export default zkService;
