// Frontend\DigiVerifyMe\src\store\authSlice.tsx
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import authService from '../services/authService';

interface User {
  id: string;
  did: string;
  name: string;
  password: string;
  token?: string;
}

interface UserData {
  username: string;
  email: string;
  did: string;
  password: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  verificationStatus: string | null;
  did: string | null; 
}

export const login = createAsyncThunk<User, { usernameOrEmail: string, password: string }, { rejectValue: string }>(
  'auth/login',
  async ({ usernameOrEmail, password }, thunkAPI) => {
    try {
      return await authService.login(usernameOrEmail, password);
    } catch (error) {
      const message = (error as any).response?.data || 'Login failed';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const signup = createAsyncThunk<User, UserData, { rejectValue: string }>(
  'auth/signup',
  async (userData: UserData, thunkAPI) => {
    try {
      return await authService.signup(userData);
    } catch (error) {
      const message = (error as any).response?.data || 'Signup failed';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const verifyDID = createAsyncThunk<string, { did: string; challenge: string }, { rejectValue: string }>(
  'auth/verifyDID',
  async ({ did, challenge }, thunkAPI) => {
    try {
      return await authService.verifyDID(did, challenge);
    } catch (error) {
      const message = (error as any).response?.data || 'Verification failed';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    verificationStatus: null,
  } as AuthState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.verificationStatus = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload ?? 'An error occurred';
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload ?? 'An error occurred';
      })
      .addCase(verifyDID.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyDID.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.verificationStatus = action.payload;
      })
      .addCase(verifyDID.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload ?? 'An error occurred';
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
