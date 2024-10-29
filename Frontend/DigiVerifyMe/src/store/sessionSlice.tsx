// Frontend\DigiVerifyMe\src\store/sessionSlice.tsx
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import sessionService from '../services/sessionService';

// Define the type for a session
interface Session {
  id: string; // Ensure this matches the structure returned from your API
  device: string; // Example property; add more as needed
  lastActive: string; // Example property; adjust based on your API
}

// Define the initial state type
interface SessionState {
  sessions: Session[];
  loading: boolean;
  error: string | null;
}

// Create the fetchSessions async thunk
export const fetchSessions = createAsyncThunk<Session[], void, { rejectValue: string }>(
  'session/fetchSessions',
  async (_, thunkAPI) => {
    try {
      return await sessionService.fetchSessions();
    } catch (error) {
      const message = (error as any).response?.data || 'Failed to fetch sessions';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Create the terminateSession async thunk
export const terminateSession = createAsyncThunk<string, string, { rejectValue: string }>(
  'session/terminateSession',
  async (sessionId, thunkAPI) => {
    try {
      await sessionService.terminateSession(sessionId);
      return sessionId;
    } catch (error) {
      const message = (error as any).response?.data || 'Failed to terminate session';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Create the session slice
const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    sessions: [] as Session[], // Explicitly define the type of sessions
    loading: false,
    error: null,
  } as SessionState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSessions.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error on new request
      })
      .addCase(fetchSessions.fulfilled, (state, action: PayloadAction<Session[]>) => {
        state.loading = false;
        state.sessions = action.payload;
      })
      .addCase(fetchSessions.rejected, (state, action: PayloadAction<string | null | undefined>) => {
        state.loading = false;
        state.error = action.payload ?? 'An error occurred'; // Handle undefined payload
      })
      .addCase(terminateSession.pending, (state) => {
        state.loading = true;
      })
      .addCase(terminateSession.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false; // Set loading to false after termination
        state.sessions = state.sessions.filter(session => session.id !== action.payload);
      })
      .addCase(terminateSession.rejected, (state, action: PayloadAction<string | null | undefined>) => {
        state.loading = false;
        state.error = action.payload ?? 'Failed to terminate session';
      });
  },
});

// Export the reducer
export default sessionSlice.reducer;
