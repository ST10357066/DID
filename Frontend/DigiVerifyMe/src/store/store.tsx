// Frontend/DigiVerifyMe/src/store/store.tsx
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import sessionReducer from './sessionSlice';
import zkReducer from './zkSlice';

// Configure the store
export const store = configureStore({
  reducer: {
    auth: authReducer,
    session: sessionReducer,
    zk: zkReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Optional, depending on your use case
    }),
});

// Define AppDispatch and RootState types
export type AppDispatch = typeof store.dispatch; // Get the dispatch type from the store
export type RootState = ReturnType<typeof store.getState>; // Get the state type from the store

// Create typed hooks
export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default store;
