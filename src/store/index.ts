// @Vendors
import { configureStore } from '@reduxjs/toolkit';
// @Reducers
import authReducer from './authSlice';
import breedsReducer from './breedsSlice';

export const store = configureStore({
    reducer: {
        authReducer,
        breedsReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
