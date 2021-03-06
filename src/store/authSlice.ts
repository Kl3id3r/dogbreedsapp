// @Vendors
import {
    createAsyncThunk, createEntityAdapter, createSlice
} from '@reduxjs/toolkit';
// @Types
import { IAction, IAuth } from '../types/AppType';
import { IUserData } from '../types/UserDataType';
// @Utils
import { getItem, removeItem, setItem } from '../utils/storage';

const PREFIX = 'auth';
const authAdapter = createEntityAdapter<IAuth>({});

// Actions && Middlewares
export const fetchAuthLogin = createAsyncThunk(`${PREFIX}/fetchLogin`, async (params: IUserData) => {
    // Save data user local
    const jsonToString = JSON.stringify(params);
    setItem('@user_data', jsonToString)
    return { ...params };
});

export const checkAuthentication = createAsyncThunk(`${PREFIX}/checkAuthentication`, async () => {
    const userDataLocal = await getItem('@user_data');
    if (userDataLocal) {
        return JSON.parse(userDataLocal);
    }
    throw Error('Not found data');
});

export const fetchLogout = createAsyncThunk(`${PREFIX}/logout`, async () => {
    await removeItem('@user_data');
    return true;
});

// Reducer
export const authSlice = createSlice({
    name: PREFIX,
    initialState: authAdapter.getInitialState({
        loading: false,
        isAuthenticated: false,
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
            .addCase(fetchLogout.fulfilled, (state) => {
                state.loading = false
                state.isAuthenticated = false
                state.serverErrors = false
                state.user = null
            })
            .addCase(checkAuthentication.pending, (state) => {
                state.loading = true
            })
            .addCase(checkAuthentication.fulfilled, (state, action: IAction) => {
                state.loading = false
                state.isAuthenticated = true
                state.user = action.payload
                state.serverErrors = false
            })
            .addCase(checkAuthentication.rejected, (state, action: IAction) => {
                state.loading = false
                state.isAuthenticated = false
                state.errorMessage = action?.error?.message
                state.serverErrors = false
                state.user = null
            })
    },
});

export default authSlice.reducer;
