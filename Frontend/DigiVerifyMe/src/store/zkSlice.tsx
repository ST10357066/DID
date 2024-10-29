// Frontend\DigiVerifyMe\src\store\zkSlice.tsx
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import zkService from '../services/zkService';

// Define the type for a ZKP proof
interface ZKPProof {
    id: string; // Ensure this matches the structure returned from your API
    // Add more properties as necessary
}

// Define the initial state type
interface ZKState {
    proofs: ZKPProof[];
    currentProof: ZKPProof | null;
    loading: boolean;
    error: string | null;
}

// Create the submitZKP async thunk
export const submitZKP = createAsyncThunk<ZKPProof, { proof: string; proofType: string; proofData: string }, { rejectValue: string }>(
    'zk/submitZKP',
    async (proofData, thunkAPI) => {
        try {
            return await zkService.submitZKP(proofData);
        } catch (error) {
            const message = (error as { response?: { data?: string } })?.response?.data || 'Failed to submit proof';
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Create the verifyZKP async thunk
export const verifyZKP = createAsyncThunk<ZKPProof, string, { rejectValue: string }>(
    'zk/verifyZKP',
    async (proofId, thunkAPI) => {
        try {
            return await zkService.verifyZKP(proofId);
        } catch (error) {
            const message = (error as { response?: { data?: string } })?.response?.data || 'Failed to verify proof';
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Create the zk slice
const zkSlice = createSlice({
    name: 'zk',
    initialState: {
        proofs: [] as ZKPProof[], // Explicitly define the type of proofs
        currentProof: null,
        loading: false,
        error: null,
    } as ZKState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitZKP.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset error on new request
            })
            .addCase(submitZKP.fulfilled, (state, action: PayloadAction<ZKPProof>) => {
                state.loading = false;
                state.currentProof = action.payload;
                state.proofs.push(action.payload);
            })
            .addCase(submitZKP.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.error = action.payload ?? 'An error occurred'; // Handle undefined payload
            })
            .addCase(verifyZKP.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset error on new request
            })
            .addCase(verifyZKP.fulfilled, (state, action: PayloadAction<ZKPProof>) => {
                state.loading = false;
                state.currentProof = action.payload;
                const index = state.proofs.findIndex(proof => proof.id === action.payload.id);
                if (index !== -1) {
                    state.proofs[index] = action.payload;
                }
            })
            .addCase(verifyZKP.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.error = action.payload ?? 'Failed to verify proof';
            });
    },
});

// Export the reducer
export default zkSlice.reducer;
