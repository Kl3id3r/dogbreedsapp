// @Vendors
import {
    createAsyncThunk, createEntityAdapter, createSlice
} from '@reduxjs/toolkit';
// @Types
import { IAction, IAuth } from '../types/AppType';
import { IUserData } from '../types/UserDataType';
// @Utils
import { setItem } from '../utils/storage';

const PREFIX = 'auth';
const authAdapter = createEntityAdapter<IAuth>({});

// Actions && Middlewares
export const fetchAuthLogin = createAsyncThunk(`${PREFIX}/fetchLogin`, async (params: IUserData) => {
    // Save data user local
    const jsonToString = JSON.stringify(params);
    setItem('@user_data', jsonToString)
    const payload = { ...params }
    return { payload };
});

// Reducer
export const authSlice = createSlice({
    name: PREFIX,
    initialState: authAdapter.getInitialState({
        loading: false,
        isAuthenticated: true,
        user: null,
        errorMessage: null,
        serverErrors: false,
        succes: false,
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthLogin.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchAuthLogin.fulfilled, (state, action: IAction) => {
                state.loading = false
                state.isAuthenticated = true
                state.user = action.payload
                state.serverErrors = false
            })
            .addCase(fetchAuthLogin.rejected, (state, action: IAction) => {
                state.loading = false
                state.errorMessage = action?.error?.message
                state.serverErrors = true
            })
    },
});

export default authSlice.reducer;
