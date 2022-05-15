// @Vendors
import { configureStore } from '@reduxjs/toolkit';
// @Reducers
import authReducer from './authSlice';

export const store = configureStore({
    reducer: {
        authReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
