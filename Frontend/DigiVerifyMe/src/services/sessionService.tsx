// Frontend\DigiVerifyMe\src\services/sessionService.tsx
// GET /sessionManager/
// HTTP 200 OK
// Allow: GET, OPTIONS
// Content-Type: application/json
// Vary: Accept

// {
//     "message": "Welcome to Session Manager!",
//     "available_urls": {
//         "home": "http://127.0.0.1:8001/sessionManager/",
//         "session-list": "http://127.0.0.1:8001/sessionManager/sessions/",
//         "revoke-session": "http://127.0.0.1:8001/sessionManager/sessions/1/revoke/",
//         "revoke-all-sessions": "http://127.0.0.1:8001/sessionManager/sessions/revoke-all/"
//     }
// }
import axios from 'axios';

// Define the API URL
const API_URL = 'https://api.example.com'; // Replace with your actual API URL

// Define the types for the session response
interface SessionResponse {
  id: string;
  device: string; // Adjust based on your API response
  lastActive: string; // Adjust based on your API response
}

// Define the session service
const sessionService = {
  fetchSessions: async (): Promise<SessionResponse[]> => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const response = await axios.get(`${API_URL}/sessions`, {
      headers: { Authorization: `Bearer ${user.token}` }
    });
    return response.data;
  },

  terminateSession: async (sessionId: string): Promise<void> => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    await axios.delete(`${API_URL}/sessions/${sessionId}`, {
      headers: { Authorization: `Bearer ${user.token}` }
    });
  },

  createSession: async (deviceInfo: any): Promise<SessionResponse> => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const response = await axios.post(`${API_URL}/sessions`, deviceInfo, {
      headers: { Authorization: `Bearer ${user.token}` }
    });
    return response.data;
  },
};

export default sessionService;
